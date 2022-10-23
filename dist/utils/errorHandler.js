"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(error, req, res, next) {
    res.status(error.statusCode).json({
        status: "error",
        statusCode: error.statusCode,
        message: error.message,
    });
}
exports.default = default_1;
