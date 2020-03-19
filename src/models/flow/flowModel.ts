import { FlowPropertiesModel } from "./flowPropertiesModel";
import { FlowModelType } from "./flowModelType";

export class FlowModel implements FlowModelType{
    name? : any;
    token? : any;
    type? : any;
    enabled? : any;
    properties? : FlowPropertiesModel;
}