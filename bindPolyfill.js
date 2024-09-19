let obj1={
    name:"sun"
}
let obj2={
    name:"pqr"
}
function printAge(age){
    console.log(`${this.name} is ${age} years old`);
}

//let res=printAge.bind(obj1);
//res(25);

Function.prototype.myBind = function(obj={}, ...args1){
    if(typeof this !=='function'){
        throw new Error("not callable");
    }
    obj.fn=this;
    return function(...args2){
        obj.fn(...args1, ...args2);
    }
}
let newFn = printAge.myBind(obj1);
newFn(25);