import { HttpError } from "./httpError";

export class HttpIcecubeError extends HttpError {
  private errorMessage:any;
  private error:any;
  private component:any;
  private className:any;
  private status:any;
  
    constructor(message: string,errorMessage : any,error:any , component:any ,className :any , status : any , statusCode : number) {
      super(message,statusCode);
      this.errorMessage = errorMessage;
      this.error = error;
      this.component = component;
      this.className = className;
      this.status = status;
      this.name = HttpIcecubeError.name;
    
      Error.captureStackTrace(this, HttpIcecubeError);
    }
  

 
}
  