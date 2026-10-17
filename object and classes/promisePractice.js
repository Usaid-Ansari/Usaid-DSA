const promise = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve("Task complete");
    }else{
        reject("Task rejected")
    }
});

promise.then(function(result){
    console.log(result);
}).catch(function(result){
    console.log(result);
})