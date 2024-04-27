import express from 'express'
import db from './database.js'

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json("Hello this is the backend")
})

app.get("/user", (req, res) => {
    const q = "select * from user"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/adduser", (req, res) => {
    const q = 'insert into user (`username`, `email`, `password`) values (?)'
    const values = [ 
        req.body.username,
        req.body.email,
        req.body.password
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("User added successfully")
    })
}) 

app.listen(3001, () => {
    console.log("Connected to backend")
})