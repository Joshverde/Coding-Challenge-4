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
