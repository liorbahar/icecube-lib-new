export class HttpError extends Error {
    private statusCode : number;
    constructor(message: string,statusCode : number) {
      super(message);
      this.statusCode = statusCode;
      this.name = HttpError.name;
      Error.captureStackTrace(this, HttpError);
    }
}
    
  
  