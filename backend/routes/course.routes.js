import express from 'express'
import verifyToken from '../middlewares/verifyToken.js'
import {
    createCourse,
    registerCourse
} from '../controller/course.controller.js'

const route = express.Router()

route.post('/register', verifyToken, registerCourse)
route.post('/', verifyToken, createCourse)

export default route