const express = require("express");
const router = express.Router();

const {
  addBlog,
  getBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", verifyToken, isAdmin, addBlog);
router.get("/:id", getBlog);
//router.get("/", getBlogs);
router.put("/:id", verifyToken, isAdmin, updateBlog);
router.delete("/:id", verifyToken, isAdmin, deleteBlog);

//for devops project
router.get("/", (req, res) => {
  res.send("I am working...");
});

module.exports = router;
