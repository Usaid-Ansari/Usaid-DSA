const PromiseOne = new Promise(function (resolve, reject) {
    //Do async task
    setTimeout(function () {
        console.log("Async Task is completed");
        resolve();
    }, 2000);
});

PromiseOne.then(function () {
    console.log("promise consumed");
})

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async 2 complete");
        resolve();
    }, 2000);
}).then(function () {
    console.log("promise 2 consume");
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async 3 complete");
        reject();
    }, 2000);
}).catch(function () {
    console.log("promsie 3 consume");
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "usaid", emailId: "captainusaid@1.com" })
    }, 2000)
});

promiseFour.then(function(user){
    console.log(user);
});

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username: "hitesh", password: "@123"})
        } else {
            reject("Error : Something Went Wrong")
        }
    
    }, 2000)
});

 promiseFive.then((user) => {
    // console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((username)=>{
    console.log(username);
})