import { TransactionDataModelType } from "../models/transaction/transactionFullData/transactionDataModelType";


export interface ITransactionHandler {
    getTransaction(env,transactionId?) : Promise<TransactionDataModelType>
}