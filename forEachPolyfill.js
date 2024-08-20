let arr = [1,2,3,4,5];


Array.prototype.myForEach = function(cb){
    for(let i=0;i<this.length;i++){
        cb(this[i]);
    }
}

let result = arr.myForEach((el)=> console.log(el));
console.log(result);