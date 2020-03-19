import { IcecubeApiErrorModelType } from "./icecubeApiErrorModelType";

export class IcecubeApiErrorModel implements IcecubeApiErrorModelType {
        message :any;
        error : any;
        component : any;
        className : any;
        status : any;
        statusCode? : any;

        constructor(message: any,error:any , component:any ,className :any , status : any ,statusCode? : any) {
            this.message = message;
            this.error = error;
            this.component = component;
            this.className = className;
            this.status = status;
            this.statusCode = statusCode;
        }
          

        public toString() : string {
            return JSON.stringify({
                message :this.message,
                error : this.error,
                component : this.component,
                className : this.className,
                status : this.status,
                statusCode : this.statusCode
              })
        }
}