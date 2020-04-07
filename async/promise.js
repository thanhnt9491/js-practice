const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello')
    })
}, 2000);

somePromise.then(message => {
    console.log('success' + message);
})
    .catch(err => {
        console.log('fail' + err);
    })


const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hello')
    })
}, 2000);

somePromise.then(message => {
    console.log('success' + message);
})
    .catch(err => {
        console.log('fail' + err);
    })
