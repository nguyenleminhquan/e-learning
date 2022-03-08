const APINotFoundHandler = (req, res, next) => {
    const error = new Error('API not found!')
    error.status = 401
    next(error)
}

export default APINotFoundHandler