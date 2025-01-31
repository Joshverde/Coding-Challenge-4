// Task #1
// Creates the avriables and constants used in the If-Else
let purchaseAmount = 500
const discount = .10
let DiscountTotal = purchaseAmount - (purchaseAmount * discount)
//applies a discount if the purchase amount is over 100 and prints a corisponding message
if(purchaseAmount > 100) {
    console.log(`final amount after Discount: ${DiscountTotal}`);
}
else{
    console.log(`final amount: ${purchaseAmount}`)
}

//Task #2
// creates the sales array and defines totalSales
let sales = [35,24,78,90,123]
let totalSales = 0
for(sale of sales) {
    totalSales = sale + totalSales;
}
console.log(totalSales)

//Task #3
// Creates variable
let stock = 10
// suptracts one for the the while loop after each iteration and prints output to console log
while(stock != 0){
    --stock;
    console.log(stock)
}

// Task #4
// creates variable
let response  = 0
// adds an increment of 1 to each loop until loop reaches 3 attempts
do{
    ++response;
    console.log (`Attempt: ${response}`)
}
    while(response < 3);

// Task #5
// Creates an object and its properties
let employee = {
    name: "janaina",
    position: "logistics",
    salary: "21,738"
}
for(property in employee){
    console.log(`${property}: ${employee[property]}`)
}

// Task #6
// Creates an array 
let products =["Coke","Sprite","Fanta","Rootbeer"]
// Prints each product in the products array with a message
for(product of products) {
    console.log(`Product: ${product}`)
}
// Task 7
// creates an array
let orders = [4001,2002,8003]
// Uses a forEach function to print each Id and its index +1
orders.forEach((id, idIndex) => {
    console.log(`ID ${idIndex +1}: ${id} `)})

// Task 8
// Creates a function that the tax of an amunt
function calculateTax(amount,taxRate){
    return amount * taxRate
}
// defines a varaible for the amount and a constant for the taxrate
let amount = 100;
const taxRate = .10
console.log(`The tax for the given amount: ${calculateTax(amount,taxRate)}`)

//  Task 9
// creates a function that takes a price and discountPercentage and returns discounted price
function applyDiscount(price,discountPercentage){
    return price -(price * discountPercentage/100)
}
// creates a price variable and a discountPercentage Constant
const discountPercentage = 10
let price = 100
console.log(`Discounted Price: ${applyDiscount(price,discountPercentage)}`)

// Task 10
// creates an arrow function that takes purchase amount and returns 1 point for every $10
var calculatePoints = (purchase) => Math.floor(purchase/10)// Math.floor returns whole number from the division
// Defines a variable for purchase amount
var purchase = 100
console.log(`Points earned: ${calculatePoints(purchase)}`)
