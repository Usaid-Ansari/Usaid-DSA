// const PromiseOne = new Promise(function (resolve, reject) {
//     //Do async task
//     setTimeout(function () {
//         console.log("Async Task is completed");
//         resolve();
//     }, 2000);
// });

// PromiseOne.then(function () {
//     console.log("promise consumed");
// })

// const promiseTwo = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async 2 complete");
//         resolve();
//     }, 2000);
// }).then(function () {
//     console.log("promise 2 consume");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async 3 complete");
//         reject();
//     }, 2000);
// }).catch(function () {
//     console.log("promsie 3 consume");
// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "usaid", emailId: "captainusaid@1.com" })
//     }, 2000)
// });

// promiseFour.then(function (user) {
//     console.log(user);
// });

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "hitesh", password: "@123" })
//         } else {
//             reject("Error : Something Went Wrong")
//         }

//     }, 2000)
// });
// //Catching
// promiseFive.then((user) => {
//     // console.log(user);
//     return user.username
// })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch((username) => {
//         console.log(username);
//     })
//     .finally((username) => {
//         console.log("The promises is either resolved or reject");
//     })

// //Async Await

// const promiseSix = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "hitesh", password: "@123" })
//         } else {
//             reject("Error : Something Went Wrong")
//         }

//     }, 2000)
// });

// async function consumePromsieFive() {
//     const response = await promiseSix
//     console.log(response);
// }
// consumePromsieFive();

// function saySomething(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something" + " " + x);
//         }, 2000)
//     });
// }

// async function talk(x) {
//     const result = await saySomething(x);
//     console.log(result);
// }
// async function main() {
//     await talk(2);
//     await talk(4);
//     await talk(6);
// }

// main();

const promiseSeven = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "hitesh", password: "@123" })
        } else {
            reject("Error : JS Went Wrong")
        }

    }, 2000)
});

async function consumePromiseSeven() {
    try {
        const response = await promiseSeven
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseSeven();

const promiseEigth = new Promise((resolve, reject) => {
    setTimeout(function () {
        let msg = false;
        if (!msg) {
            resolve("Valid Data")
        } else {
            reject("Invalid Data")
        }
    }, 3000)
});

async function checkData() {
    try {
        const finalData = await promiseEigth
        console.log(finalData);
    } catch (error) {
        console.log(error);
    }
}
checkData();