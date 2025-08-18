export function isEmpty(str){
    if (str === ""){
        return true;
    }
    return false;
}

export function isShort(str){
    if(str.length < 6){
        return true;
    }
    return false;
}

export function isLong(str){
    if(str.length >= 20){
        return true;    
    }
    return false;
}
