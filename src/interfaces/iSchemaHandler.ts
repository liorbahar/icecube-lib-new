import { SchemaModelType } from "../models/schema/schemaModelType";


export interface ISchemaHandler{
    createShcema(schema : SchemaModelType) : Promise<SchemaModelType>

    getSchema(schemaName): Promise<object>;
    
}