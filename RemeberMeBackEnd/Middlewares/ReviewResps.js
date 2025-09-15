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

export function isLongTitle(str){
    if(str.length > 30){
        return true;    
    }
    return false;
}

export function isLongDesc(str){
    if(str.length > 300){
        return true;    
    }
    return false;
}

export function isDiferent(strone, strtwo){
    if(strone !== strtwo){
        return true
    }
    return false     
}