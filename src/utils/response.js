const response = (res, statusCode, message, data) => {
    const responseBody = {
        status: statusCode < 400 ? 'success' : 'fail',
        message,
    };

    if (data) {
        responseBody.data = data;
    }

    return res
        .status(statusCode)
        .json(responseBody)
        .end();
};

export default response;