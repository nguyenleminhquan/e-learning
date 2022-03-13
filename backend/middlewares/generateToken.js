import jwt from 'jsonwebtoken'

const generateToken = (payload) => {
    try {
        var decode = jwt.sign(payload, process.env.SECRET_KEY_TOKEN)
        return decode
    } catch (error) {
        next(error)
    }
}

export default generateToken