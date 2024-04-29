const db = require('../config/dbConnect')



const addUser = async (req, res) => { 
    const {username, email, password} = req.body
    const values = [ username,  email, password]; 
    const q = "insert into user (`username`, `email`, `password`) values (?)";
  
    db.query(q, [values], (err) => {
      if (err) {
        console.log(err.message);
        return res.status(400).json(err.message);
      }
      return res.json("User added successfully");
    })
}  

const getUsers  = async (req, res) => {
    const q = "select * from user"
    db.query(q, (err, data) => {
        if(err){
            console.log(err.message)
            return res.status(400).json(err.message)
        }
        return res.json(data)
    })
}

const getUser = async (req, res) => {
    const userId = req.params.id
    const q = "select * from user where user_id = ?"

    db.query(q, [userId], (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(404).json(err.message);
        }
        return res.json(data);
    })
}

const updateUser = async (req, res) =>{
    const {username, email, password} = req.body
    const values = [username, email, password]
    const userId = req.params.id
    const q = "update user set `username`=?, `email`=?, `password`=? where user_id = ?"

    db.query(q, [...values, userId], (err) => {
        if(err){
            console.log(err.message)
            return res.status(400).json(err.message)
        }
        return res.json("User updated successfully")
    })
}

const deleteUser = async (req, res) => {
    const userId = req.params.id
    const q = "delete from user where user_id=?"

    db.query(q, [userId], (err) => {
        if(err){
            console.log(err.message)
            return res.status(404).json(err.message)
        }
        return res.json("User deleted successfully")
    })
}

module.exports = {addUser, getUsers, getUser, updateUser, deleteUser}