const express = require('express')
const { addUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/userController')
const router = express.Router()

router.post('/adduser',addUser)
router.get('/getusers', getUsers)
router.get('/getuser/:id', getUser)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)

module.exports = router  