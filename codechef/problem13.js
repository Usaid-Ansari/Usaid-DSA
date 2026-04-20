// Minimum Wage
// The minimum wage in Chefland is 
// 11
// 11 dollars per hour.

// Given that Chef earns 
// X
// X dollars per hour, find whether his income is strictly above the minimum wage.

// Input Format
// The first and only line contains an integer 
// X
// X, denoting the income of Chef per hour.
// Output Format
// Output on a new line, YES, if Chef's income is strictly above the minimum wage. Otherwise, output NO.

// You may print each character of the string in uppercase or lowercase (for example, the strings YES, yEs, yes, and yeS will all be treated as identical).

// Constraints
// 1
// ≤
// X
// ≤
// 20
// 1≤X≤20
// Sample 1:
// Input
// Output
// 20
// YES
// Explanation:
// Chef's income is 
// 20
// 20 dollars per hour, which is strictly higher than the minimum wage.

// Sample 2:
// Input
// Output
// 11
// NO
// Explanation:
// Chef's income is 
// 11
// 11 dollars per hour, which is not higher than the minimum wage.

process.stdout.write("Enter a Number: ");
process.stdin.on("data", (data) => {
   let X = parseInt(data.toString().trim());
       if(X < 1 || X >20){
        console.log("Invalid Input");
    }
    else if(X <= 11){
        console.log("NO");
    }
    else{
        console.log("YES");
    }
});
