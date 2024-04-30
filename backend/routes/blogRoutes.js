const express = require('express')
const router = express.Router()

const {addBlog, getBlog, getBlogs, updateBlog, deleteBlog} = require('../controllers/blogController')

router.post('/addblog/:id', addBlog)
router.get('/getblog/:id', getBlog)
router.get('/getblogs', getBlogs)
router.put('/updateblog/:id', updateBlog)
router.delete('/deleteblog/:id', deleteBlog)

module.exports = router