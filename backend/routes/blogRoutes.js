const express = require('express')
const router = express.Router()

const {addBlog, getBlog, getBlogs, updateBlog, deleteBlog} = require('../controllers/blogController')

router.post('/addblog/:id', addBlog)
router.get('/getblog', getBlog)
router.get('/getblogs', getBlogs)
router.put('/updateblog', updateBlog)
router.delete('/deleteblog', deleteBlog)

module.exports = router