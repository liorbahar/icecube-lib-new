export class Utils{

    public static isNullOrUndefinded(value) : boolean{
        if (value === null || value === undefined){
            return true;
        }
        return false;
    }
}