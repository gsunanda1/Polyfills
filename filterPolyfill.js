let arr = [1,2,3,4,5];


Array.prototype.myFilter = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i]))
        result.push(this[i]);
    }
    return result;
}

let result = arr.myFilter((el)=> el>2);
console.log(result);