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