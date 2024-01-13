//@des Global error handling middleware can be used in all of the project

class ApiError extends Error {
    constructor (message,statusCode){
        super (message);
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4)? 'fail':'error'
        this.isOpretional = true
    }
}module.exports = ApiError