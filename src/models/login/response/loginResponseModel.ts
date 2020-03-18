import {LoginResponseModelType} from './loginResponseModelType'
export class LoginModelResponse implements LoginResponseModelType {
    connected? : boolean;
    user? : string;
}