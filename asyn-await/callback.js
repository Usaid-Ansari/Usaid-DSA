// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b); // sum(a, b);
// }
// calculator(1, 2, sum);


// const hello = () => {
//     console.log("Hello World");
// }
// setTimeout(hello, 3000);

//CallBack Hell
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    console.log("getting data 2 ...");
    getData(2, () => {
        console.log("getting data 3...");
        getData(3);
    });
});