let arr = [1,2,[3,4],5, [[2,3]]];

// recursive call.
Array.prototype.myFlat = function(depth){
    let result = [];
    this.forEach((el)=>{
        if(Array.isArray(el) && depth>0){
            result.push(...el.myFlat(depth-1));
        }
        else{
            result.push(el);
        }
    })
    return result;
}

let result = arr.myFlat(2);
console.log(result);