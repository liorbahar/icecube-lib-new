import { IIcecubeClient } from "../interfaces/iIcecubeClient";
import { ILoginHandler } from "../interfaces/iLoginHandler";
import { ISchemaHandler } from "../interfaces/iSchemaHandler";
import { ITransactionHandler } from "../interfaces/iTransactionHandler";
import { ICubeHandler } from "../interfaces/iCubeHandler";


export class IcecubeClient implements IIcecubeClient{
    loginHandler: ILoginHandler;
    schemaHandler: ISchemaHandler;
    transactionHandler : ITransactionHandler;
    CubeHandler:ICubeHandler;
    constructor(loginHandler: ILoginHandler,schemaHandler: ISchemaHandler,transactionHandler : ITransactionHandler,CubeHandler:ICubeHandler){
        this.loginHandler = loginHandler;
        this.schemaHandler = schemaHandler;
        this.transactionHandler = transactionHandler;
        this.CubeHandler = CubeHandler; 
    }
}
