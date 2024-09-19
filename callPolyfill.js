let obj1={
    name:"sun"
}
let obj2={
    name:"pqr"
}
function printAge(age){
    console.log(`${this.name} is ${age} years old`);
}

//printAge.call(obj1, 25);

Function.prototype.myCall = function(obj={}, ...args){
    if(typeof this !=='function'){
        throw new Error("not callable");
    }
    obj.fn=this;
    obj.fn(...args);
}
printAge.myCall(obj1, 25);