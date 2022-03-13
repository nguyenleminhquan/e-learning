import jwt from 'jsonwebtoken'
import createError from 'http-errors'

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return createError(401, 'No authorization!') 

    try {
        var payload = jwt.verify(token, process.env.SECRET_KEY_TOKEN)
        req.id = payload.id
        next()
    } catch (error) {
        return createError(403)        
    }
}

export default verifyToken