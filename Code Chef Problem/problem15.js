// Notebook Counting
// Chef has 
// A
// A notebooks with him, each having a total of 
// B
// B pages.

// Each page has 
// 50
// 50 lines drawn to be written on, and you can write on both sides of the pages. Chef has to follow the drawn lines when writing. Thus, he can only write 
// 50
// 50 lines on the front side of the page, and 
// 50
// 50 lines on the back side.

// What is the effective total number of lines that Chef can write across all his notebooks?

// Input Format
// The first and only line of input contains 
// 2
// 2 integers - 
// A
// A and 
// B
// B.
// Output Format
// For each test case, output on a new line the total number of lines Chef can write.

// Constraints
// 1
// ≤
// A
// ≤
// 10
// 1≤A≤10
// 1
// ≤
// B
// ≤
// 100
// 1≤B≤100
// Sample 1:
// Input
// Output
// 1 1
// 100
// Explanation:
// Chef has 
// 1
// 1 notebook with 
// 1
// 1 page only. He can write 
// 50
// 50 lines on the front, and 
// 50
// 50 lines on the back side of the page, for a total of 
// 100
// 100 lines.

// Sample 2:
// Input
// Output
// 5 50
// 25000

process.stdout.write("Enter two numbers (space-separated): ");

process.stdin.on("data", (data) => {
  let [A, B] = data.toString().trim().split(" ").map(Number);
  console.log("First number:", A);
  console.log("Second number:", B);

  let result = A * B * 100;
  console.log("Result:", result);

  process.exit(); // input lene ke baad program close karo
});