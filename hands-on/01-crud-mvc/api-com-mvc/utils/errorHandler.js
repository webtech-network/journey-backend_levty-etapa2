const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes (you might use a more robust logger in production)
    console.error(err.stack);

    // Determine the status code. Default to 500 (Internal Server Error) if not specified.
    const statusCode = err.statusCode || 500;

    // Determine the message. Use the error message if available, otherwise a generic one.
    const message = err.message || 'An unexpected error occurred.';

    // Send the error response
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
    });
};

module.exports = errorHandler;