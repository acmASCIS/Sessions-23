const { Router } = require('express');
const { getAllUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/userController');

const userRouter = Router();


userRouter.get('/getAll', getAllUsers)
userRouter.get('/getById/', getUserById)
userRouter.post('/adduser', addUser)
userRouter.put('/update/:id', updateUser)
userRouter.delete('/delete/:id', deleteUser)

module.exports = userRouter