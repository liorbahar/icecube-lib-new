import { SchemaModelType } from "./schemaModelType";

export class SchemaModel implements SchemaModelType {
    name? : any;
    inputs? : [];
    outputs? : [];
    properties?: Object;
    requiers? : Object;
}

