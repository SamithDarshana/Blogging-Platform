const db = require('../config/dbConnect')



const addUser = async (req, res) => { 
    const {username, email, password} = req.body
    const values = [ username,  email, password];
    console.log(values)
    const q = "insert into user (`username`, `email`, `password`) values (?)";
  
    db.query(q, [values], (err, data) => {
      if (err) {
        console.log(err.message);
        return res.status(400).json(err.message);
      }
      return res.json("User added successfully");
    })
}

module.exports = {addUser}