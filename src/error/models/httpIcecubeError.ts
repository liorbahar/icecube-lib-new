import { HttpError } from "./httpError";

export class HttpIcecubeError extends HttpError {
    constructor(message: string,statusCode) {
      super(message,statusCode);
      this.name = "HttpIcecubeError";
      Error.captureStackTrace(this, HttpIcecubeError);
    }
  }
  