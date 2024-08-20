let arr = [1,2,3,4,5];


Array.prototype.myMap = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        result.push(cb(this[i]));
    }
    return result;
}

let result = arr.myMap((el)=> el*2);
console.log(result);