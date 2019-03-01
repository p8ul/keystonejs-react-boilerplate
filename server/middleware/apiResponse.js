const apiResponse = (req, res, next) => {
  res.sendSuccess = (data, statusCode = 200, message) => {
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    return res.status(statusCode).json({
      message,
      data,
    });
  };

  res.sendError = (message, statusCode = 500, error) => {
    if (req.method === 'OPTIONS') {
      return res.status(statusCode).end();
    }

    return res.status(statusCode).json({
      message,
      error,
    });
  };

  next();
};


export default apiResponse;
