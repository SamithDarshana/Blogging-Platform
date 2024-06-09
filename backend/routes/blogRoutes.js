const express = require("express");
const router = express.Router();

const {
  addBlog,
  getBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.post("/", addBlog);
router.get("/:id", getBlog);
router.get("/", getBlogs);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
