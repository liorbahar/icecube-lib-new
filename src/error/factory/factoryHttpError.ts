import { HttpError } from "../models/httpError";
import { IcecubeError } from "../models/icecubeError";
import { icecubeErrorValidation } from "./icecubeErrorValidation";
import { HttpIcecubeError } from "../models/httpIcecubeError";

export class FactoryHttpError {
    public static getError(error) : HttpError{
        let errorBody = error.response.body;
        let statusCode = error.response.statusCode;
        if (icecubeErrorValidation.checkIfIcecubeError(errorBody))
        { 
            console.log('recognize icecube error');
            return new HttpIcecubeError(errorBody,statusCode);
        }
        console.log('not recognize icecube error');
        return new HttpError(errorBody,statusCode);
    }
}