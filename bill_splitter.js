// Calculate tip using ternary operator
x = 275;
let tip = x >= 50 && x <= 300 ? x * 0.15 : x * 0.2;
console.log(tip);

// Task 2 Adding output to display bill, tip, and total
let total = x + tip;
console.log(total);
console.log(`The bill was $${x}, the tip was $${tip}, and the total value is $${total}`);

// Task 3 Create and test calculateTip function
let bill = 100; // had to make a new function to put bill amount
function calculateTip(bill) {
     return billAmount = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calculateTip(bill));

// Task 4 Utilize Arrays
let bills = [275,40,430,125,555,44];
console.log(bills);

let tips = bills.map(bill => calculateTip(bill)); // grabbed the function and used it in the array 
console.log(tips);
 
let totals = bills.map((bill, index) => bill + tips[index]); // used the tips and bills amounts and added them into a new array
console.log(totals);