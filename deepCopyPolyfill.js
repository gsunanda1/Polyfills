let arr1=[1,2,3,[4,5]];
let arr2 = deepCopy(arr1);
function deepCopy(val){
    if(["string","number","boolean"].includes(typeof val))
      return val;
    else if(Array.isArray(val)){
        return val.map((el)=> deepCopy(el));
    }
    else {
        // given two objects
        return Object.keys(val).reduce((acc,key)=>{
            acc[key]=deepCopy(val[key]);
            return acc;
        },{})
    }
}
// console.log(arr1, arr2);
// arr2[3].push(6);
// console.log(arr1, arr2);

let obj1 = {a:1, b:{c:2},d:4};
let obj2 = deepCopy(obj1);
console.log(obj1, obj2);
obj2.b = null;
console.log(obj1, obj2);