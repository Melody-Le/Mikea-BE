"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownEndpoint = void 0;
require();
const unknownEndpoint = (request, response) => {
    throw new ErrorHandler(401, "unknown endpoint");
};
exports.unknownEndpoint = unknownEndpoint;
