import { FlowModelType } from "../models/flow/flowModelType";
import { IcecubeHeadersRequestType } from "../models/headers/icecubeHeadersRequestType";

export interface ICubeHandler{
    createFlow(flow : FlowModelType ,env, headers? : IcecubeHeadersRequestType);
    
    deleteFlow(pgId,env,isHard , headers? : IcecubeHeadersRequestType);

    updateFlow(flowId,flow : FlowModelType ,env, headers? : IcecubeHeadersRequestType);

    getFlow(pgId,env);
    
    flushFlow(flowId,env, headers? : IcecubeHeadersRequestType);
}