import express from 'express'
import generateToken from '../middlewares/generateToken.js'
import verifyToken from '../middlewares/verifyToken.js'
import {
    userLogin,
    userRegister
} from '../controller/user.controller.js'


const route = express.Router()

route.post('/login', userLogin)
route.post('/register', userRegister)

export default route