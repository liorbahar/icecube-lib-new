import { ICubeHandler } from "./iCubeHandler";
import { ITransactionHandler } from "./iTransactionHandler";
import { ISchemaHandler } from "./iSchemaHandler";
import { ILoginHandler } from "./iLoginHandler";

export interface IIcecubeClient {
    loginHandler : ILoginHandler;
    schemaHandler : ISchemaHandler;
    transactionHandler : ITransactionHandler;
    CubeHandler:ICubeHandler;

}