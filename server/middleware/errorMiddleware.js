// why we are creating this
// because the default middleware for express is an html page and we are creating
// an api so i want our error to just be a json object that has an error message

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(400);
  next(error);
};

// creating custom error handler
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // handling special type mongoose error
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({ message, stack: process.env.NODE_ENV === 'production' ? null : err.stack });
};

export {notFound , errorHandler};