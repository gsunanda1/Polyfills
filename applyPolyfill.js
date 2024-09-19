let obj1={
    name:"sun"
}
let obj2={
    name:"pqr"
}
function printAge(age){
    console.log(`${this.name} is ${age} years old`);
}

//printAge.apply(obj1, [25]);

Function.prototype.myApply = function(obj={}, ...args){
    if(typeof this !=='function'){
        throw new Error("not callable");
    }
    if(!Array.isArray(args)){
        throw new Error("TypeError:CreateListFromArrayLike called on non-object")
    }
    obj.fn=this;
    obj.fn(...args);
}
printAge.myApply(obj1, [25]);