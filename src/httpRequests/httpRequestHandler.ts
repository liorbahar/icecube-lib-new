
import {Utils} from '../utils/utils'
import { FactoryHttpError } from '../error/factory/factoryHttpError';
import { FlowModel } from '../models/flow/flowModel';
import { FlowPropertiesModel } from '../models/flow/flowPropertiesModel';
import { IHttpRequestHandler } from '../interfaces/ihttpRequestHandler';
var rp = require('request-promise');

export class httpRequestHandler implements IHttpRequestHandler{
    private url;
    constructor(url){
        this.url = url;
    }
    public get(route:string , headers? : object){
        return this.sendRequest(this.initParams(route,'GET',null,headers));
    }

    public post(route : string ,body : object, headers? : object){
        return this.sendRequest(this.initParams(route,'POST',body,headers));
    }

    public delete(route : string ,body : object, headers? : object){
        return this.sendRequest(this.initParams(route,'DELETE',body,headers));
    }

    public put(route : string ,body : object, headers? : object){
        return this.sendRequest(this.initParams(route,'PUT',body,headers));
    }
    public initParams(route :string ,method : string, body , headers) : object
    { 
        let opt : object = {
            method:method,
            uri : this.url + route,
            resolveWithFullResponse: true,
            json : true
        };
        
        if (!Utils.isNullOrUndefinded(body)){
            opt['body'] = body;
        }


        if (!Utils.isNullOrUndefinded(headers)){
            opt['headers'] = headers;
        }

        return opt;
    }
    
    public async sendRequest(options) : Promise<object>{
        console.log(options);
        let response = await rp(options)
            .then(function (res) {
                console.log(res.body)
                return res;
            })
            .catch(function (err) {
                console.log(err.response.body);
                throw FactoryHttpError.getError(err);

            });

            return response;

            
    }

}



let httpHandler = new httpRequestHandler('http://localhost:3333');
httpHandler.get('/send');

