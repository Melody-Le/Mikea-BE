export default class ApiError extends Error {
  constructor(readonly statusCode: number, readonly message: string) {
    super();
  }
}

export class NotFoundError extends ApiError {
  constructor(readonly message: string = "Not Found") {
    super(404, message);
  }
}

// export class ForbiddenError extends ApiError {
//   constructor(readonly message: string = "Forbidden") {
//     super(403, message);
//   }
// }

export class InternalServerError extends ApiError {
  constructor(readonly message: string = "Internal Server Error") {
    super(500, message);
  }
}

// export class UnauthorizedError extends ApiError {
//   constructor(readonly message: string = "Unauthorized Request") {
//     super(401, message);
//   }
// }

export class BadRequestError extends ApiError {
  constructor(readonly message: string = "Bad Request") {
    super(400, message);
  }
}

// export class ValidationError extends ApiError {
//   constructor(readonly message: string = "Bad Request") {
//     super(422, message);
//   }
// }
