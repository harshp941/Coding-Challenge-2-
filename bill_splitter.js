// Calculate tip using ternary operator
x = 275;
let tip = x >= 50 && x <= 300 ? x * 0.15 : x * 0.2;
console.log(tip);

// Task 2 Adding output to display bill, tip, and total
total = x + tip;
console.log(total);
console.log(`The bill was $${x}, the tip was $${tip}, and the total value is $${total}`);
