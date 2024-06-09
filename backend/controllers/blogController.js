const db = require("../config/dbConnect");
const util = require("util");
const dbQuery = util.promisify(db.query).bind(db);
const Joi = require("joi");

const addBlog = async (req, res) => {
  const { title, content, tags, username } = req.body;

  // Validate the request body
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    tags: Joi.array().items(Joi.string()), // assuming tags are an array of strings
  });

  const { error } = schema.validate({ username, title, content, tags });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const q1 = "SELECT user_id FROM user WHERE username = ?";
    const result = await dbQuery(q1, [username]);

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user_id = result[0].user_id;

    const q2 =
      "INSERT INTO blog_post (`user_id`, `title`, `content`, `tags`) VALUES (?, ?, ?, ?)";
    await dbQuery(q2, [user_id, title, content, tags]);

    return res.json("Blog added successfully");
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getBlog = async (req, res) => {
  const postId = req.params.id;
  const q = "select * from blog_post where post_id = ?";

  dbQuery(q, [postId], (err, data) => {
    if (err) {
      return res.status(404).json(err.message);
    }
    return res.json(data);
  });
};

const getBlogs = async (req, res) => {
  const q = "select * from blog_post";
  dbQuery(q, (err, data) => {
    if (err) {
      return res.status(404).json(err.message);
    }
    return res.json(data);
  });
};

const updateBlog = async (req, res) => {
  const { title, content, tags } = req.body;
  const values = [title, content, tags];
  const postId = req.params.id;
  const q =
    "update blog_post set `title`=?, `content`=?, `tags`=? where post_id = ?";

  db.query(q, [...values, postId], (err) => {
    if (err) {
      res.status(400).json(err.message);
    }
    return res.json("Blog updated successfully");
  });
};

const deleteBlog = async (req, res) => {
  const postId = req.params.id;
  const q = "delete from blog_post where post_id = ?";

  db.query(q, [postId], (err) => {
    if (err) {
      return res.status(404).json(err.message);
    }
    return res.json("Blog deleted successfully");
  });
};

module.exports = { addBlog, getBlog, getBlogs, updateBlog, deleteBlog };
