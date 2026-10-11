// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promises");
//     // resolve("Success");
//     reject("Order reject");
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// let promise = getData(123);
// console.log(promise);

// function getData1(dataId1, getNextData1) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error");
//             if(getNextData1) {
//                 getNextData1();
//             }
//         }, 5000);
//     });
// }
// let promise1 =  getData1(345);
// console.log(promise1);


//.then() .catch()
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am promise");
//         // resolve("success");
//         reject("Network error");
//     });
// }

// let promise = getPromise();
// promise.then((result) => {
//     console.log("promsie fulfilled",result);

// });

// promise.catch((error) => {
//     console.log("promise rejected", error);
// });

//catching

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}
console.log("fetching data1...");
asyncFunc1().then((result) => {
    console.log("fetching data2..");
asyncFunc2().then((result) => { 

    })
})

