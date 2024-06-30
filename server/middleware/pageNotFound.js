const pageNotFound = ((req, res, next) => {
    console.log('404 handler reached');
    res.status(404).json({ message: 'Oops... Page not found!' });
});

export default pageNotFound


