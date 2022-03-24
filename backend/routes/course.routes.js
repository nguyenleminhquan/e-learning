import express from 'express'
import verifyToken from '../middlewares/verifyToken.js'
import {
    createCourse
} from '../controller/course.controller.js'

const route = express.Router()

route.post('/', verifyToken, createCourse)

export default route