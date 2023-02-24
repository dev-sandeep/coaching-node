exports.customErrorHandlerMiddleware = (error, request, response, next)=>{
   console.log(error);
    response.status(error.status || 400).send(error.message || 'simple error');
}