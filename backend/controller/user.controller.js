import createError from 'http-errors'
import bcrypt from 'bcrypt'
import User from '../models/user.model.js'
import generateToken from '../middlewares/generateToken.js'

const userRegister = async (req, res, next) => {
    const body = req.body
    // find exist account
    const exist = await User.findOne({ username: body.username })
    
    if (exist) {
        return next(createError(400, "Username is exist"))
    } else {
        let newUser = new User(body)
        try {
            console.log(1)
            newUser = await newUser.save()
            res.json({
                msg: "Register successfully"
            })
            next()
        } catch (error) {
            throw new Error(error)
        }
    }
}

const userLogin = async (req, res, next) => {
    const { username, password } = req.body
    const exist = await User.findOne({ username: username })

    if (exist) {
        const match = await bcrypt.compare(password, exist.password)

        // if match
        if (match) {
            const token = generateToken({ username })
            res.json({
                id: exist._id,
                username: exist.username,
                first_name: exist.first_name,
                last_name: exist.last_name,
                role: exist.role,
                dob: exist.dob,
                gender: exist.gender,
                token: token
            })
            next()
        } else {
            return next(createError(400, "Password doesn't match"))
        }
    } else {
        return next(createError(400, "No username found"))
    }
}

export {
    userRegister,
    userLogin
}