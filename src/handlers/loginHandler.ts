
import { Utils } from "../utils/utils";
import { FactoryAutomationError } from "../error/factory/generalErrorFactory";
import { LoginResponseModelType } from "../models/login/response/loginResponseModelType";
import { LoginModelType } from "../models/login/request/loginModelType";
import { ILoginHandler } from "../interfaces/iLoginHandler";
import { IHttpRequestHandler } from "../interfaces/ihttpRequestHandler";

export class LoginHandler implements ILoginHandler{
    private httpRequest : IHttpRequestHandler ;
    constructor(httpReuqest : IHttpRequestHandler){
        this.httpRequest = httpReuqest;
    }

    public async login(connectionData : LoginModelType) : Promise<LoginResponseModelType>{
        try{
            let body : object= Object.assign({},connectionData);
            return await this.httpRequest.post('/user/login',body).body as LoginResponseModelType;
        }
        catch (err){
            throw FactoryAutomationError.getError(err);
        }
    }
    
}
