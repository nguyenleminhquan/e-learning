import Course from '../models/course.model.js'
import User from '../models/user.model.js'
import createError from 'http-errors'

const createCourse = async (req, res, next) => {
    const teacher = await User.findOne({ username: req.username })
    const body = req.body
    if (teacher.role == "teacher") {
        try {
            let newCourse = new Course({
                name: body.name,
                teacher: teacher._id,
                startDay: new Date(body.startDay),
                endDate: new Date(body.endDate),
                description: body.description
            })

            newCourse = await newCourse.save()
            teacher.courses.push(newCourse._id)
            await teacher.save()

            return res.json({
                id: newCourse._id,
                name: newCourse.name,
                teacher: {
                    first_name: teacher.first_name,
                    last_name: teacher.last_name,
                    dob: teacher.dob,
                    gender: teacher.gender
                },
                startDay: newCourse.startDay,
                endDate: newCourse.endDate,
                students: newCourse.students,
                description: newCourse.description
            })
        } catch (error) {
            next(error)
        }
    } else {
        return next(createError(403, "You must be teacher"))
    }
}

const attendCourse = async (req, res, next) => {
    const student = await User.findOne({ username: req.username })
    const idCourse = req.body.course
    try {
        const existCourse = await Course.findOne({ _id: idCourse })
        if (student.role == "student") {
            if (existCourse) {
                const students = existCourse.students
                const existStudent = students.indexOf(student._id)
    
                if (existStudent >= 0) {
                    return next(createError(400, "You registered this course"))
                } else {
                    try {
                        existCourse.students.push(student._id)
                        await existCourse.save()
    
                        student.courses.push(existCourse._id)
                        await student.save()
    
                        return res.json({
                            msg: "Register course successfully"
                        })
                    } catch (error) {
                        next(error)
                    }
                }
            } else {
                return next(createError(400, "The course isn't exist"))
            }
        } else {
            return next(createError(403, "You must be student"))
        }
    } catch (error) {
        return next(error)
    }   
}

export {
    createCourse,
    attendCourse
}