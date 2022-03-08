const errorHandler = (err, req, res, next) => {
    res.json({
        status: err.status || 500,
        msg: err.message
    })
}

export default errorHandler