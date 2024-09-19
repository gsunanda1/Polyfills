// Simulating asynchronous operations using setTimeout
function firstOperation(callback) {
    setTimeout(() => {
        console.log('First operation done');
        callback();
    }, 1000);
}

function secondOperation(callback) {
    setTimeout(() => {
        console.log('Second operation done');
        callback();
    }, 1000);
}

function thirdOperation(callback) {
    setTimeout(() => {
        console.log('Third operation done');
        callback();
    }, 1000);
}

function fourthOperation(callback) {
    setTimeout(() => {
        console.log('Fourth operation done');
        callback();
    }, 1000);
}

// Callback Hell: Each operation depends on the previous one.
firstOperation(() => {
    secondOperation(() => {
        thirdOperation(() => {
            fourthOperation(() => {
                console.log('All operations done');
            });
        });
    });
});
