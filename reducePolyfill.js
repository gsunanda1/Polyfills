let arr = [1,2,3,4,5];


Array.prototype.myReduce = function(cb, initialValue){
    let acc = initialValue;
    for(let i=0;i<this.length;i++){
        acc= acc ? cb(acc, this[i]): this[i]
    }
    return acc;
}

let result = arr.myReduce((acc,item)=> {return acc+item },0);
console.log(result);