export  interface IHttpRequestHandler{
    
    get(route:string , headers? : object);

    post(route : string ,body : object, headers? : object);

    delete(route : string ,body? : object, headers? : object);
    
    put(route : string ,body : object, headers? : object);
}