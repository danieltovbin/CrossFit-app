const errorHandler = ((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Oops... Something went wrong on our end. Please try again later.', error: err.message });
});

export default errorHandler