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
Promise.myAll([promise1, promise2]).then(console.log).catch(console.log); //["promoise1","promise2"]

//Promise.race takes an iterable of promises and returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
Promise.myRace = function(promiseArr) {
    return new Promise((resolve, reject) => {
        promiseArr.forEach((promise) => {
            Promise.resolve(promise).then(resolve).catch(reject);
        });
    });
};
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));
const p3 = new Promise((resolve) => setTimeout(resolve, 200, 3));

// Test myRace
Promise.myRace([p1, p2, p3]).then(console.log).catch(console.error); // Outputs: 1
//Promise.myRace([promise1, promise2]).then(console.log).catch(console.log);
//Resolves as soon as one of the promises in promiseArr resolves, or rejects with an AggregateError if all of them reject.
Promise.myAny = function(promiseArr) {
    let errors = [];
    let counter = 0;

    return new Promise((resolve, reject) => {
        promiseArr.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolve)
                .catch((error) => {
                    errors[index] = error;
                    counter++;
                    if (counter === promiseArr.length) {
                        reject(new AggregateError(errors, "All promises were rejected"));
                    }
                });
        });
    });
};

// Test myAny
Promise.myAny([p2, p3]).then(console.log).catch(console.error); // Outputs: 3