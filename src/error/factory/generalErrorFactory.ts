import { HttpError } from "../models/httpError";
import { AutomationError } from "../models/automationError";

export class FactoryAutomationError {
    public static getError(error) : Error{
        if (error instanceof HttpError)
        {
            console.log(error.message)
            return error;
        }
        return new AutomationError(error.message)
    }
}