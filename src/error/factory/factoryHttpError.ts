import { HttpError } from "../models/httpError";
import { IcecubeError } from "../models/icecubeError";
import { icecubeErrorValidation } from "./icecubeErrorValidation";
import { HttpIcecubeError } from "../models/httpIcecubeError";
import { messageKey, errorKey, componentKey, classNameKey, statusKey } from "../../config/consts";
import { IcecubeApiErrorModelType } from "../../models/error/icecubeApiErrorModelType";
import { IcecubeApiErrorModel } from "../../models/error/icecubeApiErrorModel";

export class FactoryHttpError {
    public static getError(error) : HttpError{
        let errorBody = error.response.body;
        let statusCode = error.response.statusCode;
        let errMess : string = JSON.stringify({error:errorBody,statusCode:statusCode});
        if (icecubeErrorValidation.checkIfIcecubeError(errorBody))
        { 
            let errorMessage = errorBody[messageKey];
            let error = errorBody[errorKey];
            let component = errorBody[componentKey];
            let className = errorBody[classNameKey];
            let status = errorBody[statusKey];

            return new HttpIcecubeError(errMess,errorMessage,error,component,className,status,statusCode);
            
        }
        return new HttpError(errMess,statusCode);
    }
}
