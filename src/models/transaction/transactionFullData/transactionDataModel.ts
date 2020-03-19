import { TransactionDataModelType } from "./transactionDataModelType";

export class TransactionDataModel implements TransactionDataModelType{
    status? : string;
    message? : string;
    envId? : number;
    details? : any;
    errorClass? : string;
    component? : string;
    error? : string;
}