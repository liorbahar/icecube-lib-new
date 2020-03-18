
import { FactoryAutomationError } from "../error/factory/generalErrorFactory";
import { FlowModelType } from "../models/flow/flowModelType";
import { Utils } from "../utils/utils";
import { IcecubeHeadersRequestType } from "../models/headers/icecubeHeadersRequestType";

import { TransactionModelType } from "../models/transaction/operationResponse/transactionModelType";
import { httpRequestHandler } from "../httpRequests/httpRequestHandler";

import { IHttpRequestHandler } from "../interfaces/ihttpRequestHandler";
import { ICubeHandler } from "../interfaces/iCubeHandler";

export class CubeHandler implements ICubeHandler{ 
    private httpRequest : IHttpRequestHandler ;
    constructor(httpReuqest : IHttpRequestHandler){
        this.httpRequest = httpReuqest;
    }

    

    public async createFlow(flow : FlowModelType ,env, headers? : IcecubeHeadersRequestType) : Promise<TransactionModelType> {
        try {
            let route : string= `/v2/${env}/cube`;
            let body : object= Object.assign({},flow);
            let headersRequest :object = this.initHeaders(headers);
            console.log(`create flow ${flow}`);
            return await this.httpRequest.post(route,body,headersRequest).body as TransactionModelType;
        }
        catch(err){
            throw FactoryAutomationError.getError(err);
        }
    }
    

    public async deleteFlow(pgId,env,isHard , headers? : IcecubeHeadersRequestType) : Promise<TransactionModelType>{
        try {
            let route :string = `/v2/${env}/cube/${pgId}?isHard=${isHard}`
            let headersRequest : object  = this.initHeaders(headers);
            console.log(`delete flow ${pgId}`);
            return await this.httpRequest.delete(route,null,headersRequest).body as TransactionModelType;
        }
        catch(err){
            throw FactoryAutomationError.getError(err);
        }
    }

    public async updateFlow(flowId,flow : FlowModelType ,env, headers? : IcecubeHeadersRequestType) : Promise<TransactionModelType> {
        try {
            let route : string = `/v2/${env}/cube${flowId}`;
            let body : object = Object.assign({},flow);
            let headersRequest :object  = this.initHeaders(headers);
            console.log(`update flow ${flowId} with body ${flow}`);
            return await this.httpRequest.put(route,body,headersRequest).body as TransactionModelType;
        }
        catch(err){
            throw FactoryAutomationError.getError(err);
        }
    }

    public async getFlow(pgId,env) : Promise<FlowModelType>{
        try {
            let route  : string = `/v2/${env}/cube/${pgId}`
            return await this.httpRequest.get(route).body as FlowModelType;
        }
        catch(err){
            throw FactoryAutomationError.getError(err);
        }
    }
    
    public async flushFlow(flowId,env, headers? : IcecubeHeadersRequestType) : Promise<TransactionModelType> {
            try {
                let route = `/v2/${env}/cube/${flowId}/flush`;
                let headersRequest :object = this.initHeaders(headers);
                console.log(`flush cube ${flowId}`);
                return await this.httpRequest.put(route,null,headersRequest).body as TransactionModelType;
            }
            catch(err){
                throw FactoryAutomationError.getError(err);
            }
    }

    
    // todo : check what america send us in headers
    private initHeaders(headers : IcecubeHeadersRequestType) : object{
        if (Utils.isNullOrUndefinded(headers))
        {
            return null;
        }

        let headerRequest : object = {};
        if (!Utils.isNullOrUndefinded(headers.transactionId)){
            headerRequest['transactionId'] = headers.transactionId;
        }

        if (!Utils.isNullOrUndefinded(headers.auth)){
            headerRequest['auth'] = headers.auth;
        }
        if (!Utils.isNullOrUndefinded(headers.type)){
            headerRequest['type'] = headers.type;
        }

        return headerRequest;
    } 
}


