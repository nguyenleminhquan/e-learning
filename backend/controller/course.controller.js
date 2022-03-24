import Course from '../models/course.model.js'
import User from '../models/user.model.js'
import createError from 'http-errors'

const createCourse = async (req, res, next) => {
    const teacher = await User.findOne({ username: req.username })
    const body = req.body

    try {
        let newCourse = new Course({
            name: body.name,
            teacher: teacher._id,
            startDay: new Date(body.startDay),
            endDate: new Date(body.endDate)
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
        })
    } catch (error) {
        error.status = 500
        next(new Error(error))
    }
}

export {
    createCourse
}