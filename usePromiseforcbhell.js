// Simulating asynchronous operations using setTimeout with Promises
function firstOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First operation done');
            resolve();
        }, 1000);
    });
}

function secondOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second operation done');
            resolve();
        }, 1000);
    });
}

function thirdOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third operation done');
            resolve();
        }, 1000);
    });
}

function fourthOperation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fourth operation done');
            resolve();
        }, 1000);
    });
}

// Using Promises to avoid callback hell
firstOperation()
    .then(secondOperation)
    .then(thirdOperation)
    .then(fourthOperation)
    .then(() => {
        console.log('All operations done');
    });


    // Using async/await to further simplify
async function executeOperations() {
    await firstOperation();
    await secondOperation();
    await thirdOperation();
    await fourthOperation();
    console.log('All operations done');
}

// Call the async function
executeOperations();

