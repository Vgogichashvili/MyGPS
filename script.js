var bill = Number(prompt("Enter bill:"));
var tip = 0;
var total = 0;

var x = this.bill
switch(true){
    case (50 <= x && x <= 300):
        tip = bill * 0.15;
        total = bill + tip;
        break;
    default:
        tip = bill * 0.2;
        total = bill + tip;
}

console.log(`The bill was:${bill},the tip was ${tip}, and the total value: ${total}`);