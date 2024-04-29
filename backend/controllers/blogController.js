const db = require('../config/dbConnect')

const addBlog = async (req, res) => {
    const user_id = req.params.id 
    const {title, content, tags} = req.body
    const values = [title, content, tags]

    const q = "insert into blog_post (`user_id`, `title`, `content`, `tags`) values (?, ?, ?, ?)"
    db.query(q, [user_id, title, content, tags], (err) => {
        if(err){
            return res.status(400).json(err.message)
        }
        return res.json("Blog added successfully")
    })
}
  
const getBlog = async (req, res) => {

}

const getBlogs = async (req, res) => {
    const q = "select * from blog_post"
    db.query(q, (err, data) => {
        if(err){
            return res.status(404).json(err.message)
        }
        return res.json(data)
    })
}

const updateBlog = async (req, res) => {

}

const deleteBlog = async (req, res) => {

}

module.exports = {addBlog, getBlog, getBlogs, updateBlog, deleteBlog}