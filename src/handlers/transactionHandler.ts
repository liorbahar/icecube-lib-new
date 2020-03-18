
import { FactoryAutomationError } from "../error/factory/generalErrorFactory";
import { TransactionDataModelType } from "../models/transaction/transactionFullData/transactionDataModelType";
import { ITransactionHandler } from "../interfaces/iTransactionHandler";
import { IHttpRequestHandler } from "../interfaces/ihttpRequestHandler";


export class TransactionHandler implements ITransactionHandler{
    
    private httpRequest : IHttpRequestHandler ;
    constructor(httpReuqest : IHttpRequestHandler){
        this.httpRequest = httpReuqest;
    }

    public async getTransaction(env,transactionId?) : Promise<TransactionDataModelType>{
        try{
            return await this.httpRequest.get(`/v2/${env}/transactions/${transactionId}`).body as TransactionDataModelType;
        }
        catch (err) {
            throw FactoryAutomationError.getError(err);
        }
    }
}
