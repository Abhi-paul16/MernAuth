// why we are creating this 
// because the default middleware for express is an html page and we are creating
// an api so i want our error to just be a json object that has an error message

const notFound = (req, res, next)