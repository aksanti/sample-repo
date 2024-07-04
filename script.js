let currentMoney = 0, laptopPrice = 1;

if (currentMoney >= laptopPrice) {
    console.log("Getting a new laptop!");
} else {
    console.log("Can't affrod a new laptop, yet!");
}

// HOW TO USE SWITCH 

let a = 1;

switch (a) {
    case 1:
        a = "One";
        break;
    case 2:
        a = "Two";
        break;
    default:
        a = "Not found"
        break;
}
console.log(`The value is ${a}`);

// COMPARAISON

let laptopDiscountPrice = currentMoney - laptopPrice * 0.2;
if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
    console.log("Getting a new laptop!");
} else {
    console.log("Can't affrod a new laptop, yet!");
}