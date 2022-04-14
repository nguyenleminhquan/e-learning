import express from 'express'
import verifyToken from '../middlewares/verifyToken.js'
import {
    userLogin,
    userRegister
} from '../controller/user.controller.js'
import { 
    createCourse,
    attendCourse 
} from '../controller/course.controller.js'


const route = express.Router()

route.post('/login', userLogin)
route.post('/register', userRegister)
route.post('/course/attend', verifyToken, attendCourse)
route.post('/course/create', verifyToken, createCourse)

export default route