let n = 5;
for(let i=1; i<=n; i++){
    //star
    for(let j=1; j<=i;j++){
        process.stdout.write(" *");
    }
    for(let s=0; s<n-i; s++){     
        process.stdout.write("");
    }
    console.log();
}