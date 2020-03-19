import { messageKey, errorKey, componentKey, classNameKey, statusKey } from "../../config/consts";

export class icecubeErrorValidation{

    public static checkIfIcecubeError(error: Object) : boolean{
        return (error.hasOwnProperty(messageKey) && 
            error.hasOwnProperty(errorKey) &&
            error.hasOwnProperty(componentKey) &&
            error.hasOwnProperty(classNameKey)&& 
            error.hasOwnProperty(statusKey));
    }
    
}