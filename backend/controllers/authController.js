const db = require("../config/dbConnect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Joi = require("joi");

const logUser = async (req, res) => {
  const { email, password } = req.body;

  const schema = Joi.object({
    password: Joi.string().min(5).max(25).required(),
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  try {
    const q = "select * from user where email = ?";
    db.query(q, [email], async (err, results) => {
      if (err) {
        console.log(err.message);
        return res.status(500).json({ error: err.message });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      const user = results[0];

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { user_id: user.user_id, role: user.role },
        "secret",
        { expiresIn: "1h" }
      );

      return res.json({
        message: "Login successful",
        id: user.user_id,
        name: user.username,
        token,
      });
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = logUser;
