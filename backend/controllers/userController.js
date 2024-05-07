const db = require("../config/dbConnect");

const Joi = require("joi");

const addUser = async (req, res) => { 

  //validate inputs
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().required(),
    email: Joi.string().email({minDomainSegments:2, tlds:{allow:['com', 'net']}})
  }) 

  const {error, value} = schema.validate(req.body)  
  if(error){
    return res.status(400).json(error.details[0].message)
  }  
  const { username, email, password } = value;

  
  const q = "insert into user (`username`, `email`, `password`) values (?, ?, ?)";
  const values = [username, email, password];

  db.query(q, values, (err) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json(err.message);
    }
    return res.json("User added successfully");
  });
};

const getUsers = async (res) => {
  const q = "select * from user";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err.message);
      return res.status(400).json(err.message);
    }
    return res.json(data);
  });
};

const getUser = async (req, res) => {
  const userId = req.params.id;
  const q = "select * from user where user_id = ?";

  db.query(q, [userId], (err, data) => {
    if (err) {
      console.log(err.message);
      return res.status(404).json(err.message);
    }
    return res.json(data);
  });
};

const updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  const values = [username, email, password];
  const userId = req.params.id;
  const q =
    "update user set `username`=?, `email`=?, `password`=? where user_id = ?";

  db.query(q, [...values, userId], (err) => {
    if (err) {
      console.log(err.message);
      return res.status(400).json(err.message);
    }
    return res.json("User updated successfully");
  });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const q = "delete from user where user_id=?";

  db.query(q, [userId], (err) => {
    if (err) {
      console.log(err.message);
      return res.status(404).json(err.message);
    }
    return res.json("User deleted successfully");
  });
};

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
