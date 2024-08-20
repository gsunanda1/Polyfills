// we use loadash.isEqual() to compare 2 objects in JS
// also we use JSON.stringify(obj1) == JSON.stringify(obj2) - but this wil fail when keys in obj are same,
// but order is different

let obj1 = {a:1, b:{c:2}, e:3};
let obj2 = {a:1, b:{c:2}, d:3};
function compareObj(obj1,obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if(keys1.length != keys2.length)
        return false;
    for(let key of keys1){
        let val1 = obj1[key];
        let val2 = obj2[key];
        isObj = isObject(val1) && isObject(val2);
        if(!isObj && val1!==val2) return false;
        if(isObj && !compareObj(val1,val2)) return false;
    }
    return true;
}
function isObject(obj){
    return obj!=null && typeof obj == 'object';
}
console.log(compareObj(obj1,obj2));
