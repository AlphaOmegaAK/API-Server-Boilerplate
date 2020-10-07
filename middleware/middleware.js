function notFound(req, res, next) {
    res.status(400);
    const error = new Error(`Couldn't Find : ${req.originalUrl}`);
    next(error);
};

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something Broke');
};



module.exports = {
    notFound,
    errorHandler
};
