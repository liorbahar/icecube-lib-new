export class HttpError extends Error {
    public statusCode;
    constructor(message: string,statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.name = "HttpError";
      Error.captureStackTrace(this, HttpError);
    }

    public toString() : Object{
        return {
            message : this.message,
            statusCode : this.statusCode
        }
    }
}
    
  
  