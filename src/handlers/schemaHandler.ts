
import { FactoryAutomationError } from "../error/factory/generalErrorFactory";

import { SchemaModelType } from "../models/schema/schemaModelType";
import { ISchemaHandler } from "../interfaces/iSchemaHandler";
import { IHttpRequestHandler } from "../interfaces/ihttpRequestHandler";
import { httpRequestHandler } from "../httpRequests/httpRequestHandler";

export class SchemaHandler implements ISchemaHandler{
    private httpReuqets : IHttpRequestHandler;
    constructor(httpReuqets : IHttpRequestHandler){
        this.httpReuqets = httpReuqets;
    }
        
    public async createShcema(schema : SchemaModelType) : Promise<SchemaModelType>{
        try{
            let body : SchemaModelType = Object.assign({},schema);
            return await this.httpReuqets.post(`/admin/cube-schema/${schema.name}`,schema).body as SchemaModelType;
        }
        catch (err) {
            throw FactoryAutomationError.getError(err);
        }
    }

    public async getSchema(schemaName): Promise<SchemaModelType> {
        try{
            return this.httpReuqets.get(`/admin/cube-schema/${schemaName}`).body as SchemaModelType;
        }
        catch (err) {
            throw FactoryAutomationError.getError(err);
        }
    }
}

