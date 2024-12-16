class ErrorHandler extends Error{
    constructor(statusCode, message = "Getting Error", errors = [], stack) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.stack = stack;
        this.message = message;
        this.success = false;
    }
}

export default ErrorHandler;