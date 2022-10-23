"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.InternalServerError = exports.NotFoundError = void 0;
class ApiError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.default = ApiError;
class NotFoundError extends ApiError {
    constructor(message = "Not Found") {
        super(404, message);
        this.message = message;
    }
}
exports.NotFoundError = NotFoundError;
class InternalServerError extends ApiError {
    constructor(message = "Internal Server Error") {
        super(500, message);
        this.message = message;
    }
}
exports.InternalServerError = InternalServerError;
class BadRequestError extends ApiError {
    constructor(message = "Bad Request") {
        super(400, message);
        this.message = message;
    }
}
exports.BadRequestError = BadRequestError;
