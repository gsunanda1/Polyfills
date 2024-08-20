let promise1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Promise1');
    },1000);
})
let promise2= new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Promise2');
        //rej('rejected Promise2');
    },100);
})

Promise.myAll = function(promiseArr){
    let result = [], counter=0;
    return new Promise((resolve,reject)=>{
        promiseArr.forEach((promise, index)=>{
            promise.then((res)=>{
                counter++;
                result[index]= res;
                if(counter == promiseArr.length)
                    resolve(result);
            })
            .catch(e=> reject(e));
        })
    })
}
Promise.myAll([promise1, promise2]).then(console.log).catch(console.log);