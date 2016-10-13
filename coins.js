/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }
*/

function coinCounter (dollarAmount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  var amount = dollarAmount;
  
  var quarters = Math.floor(amount / .25);
  amount -= quarters * .25;
  amount = amount.toFixed(2);
  
  var dimes = Math.floor(amount / .10);
  amount -= dimes * .10;
  amount = amount.toFixed(2);
  
  var nickels = Math.floor(amount / .05);
  amount -= nickels * .05;
  amount = amount.toFixed(2);
  
  var pennies = Math.floor(amount / .01);
  amount -= pennies * .01;
  amount = amount.toFixed(2);

  coinPurse.quarters = quarters;
  coinPurse.dimes = dimes;
  coinPurse.nickels = nickels;
  coinPurse.pennies = pennies;

  return coinPurse;
}

dollarAmount = 2.97;
console.log(dollarAmount);
var coins = coinCounter(dollarAmount);
console.log(coins);