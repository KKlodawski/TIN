function fibbonacci(n) {

    if( n <= 1 ) return n;

    let result = [0,1];

    for (let i = 2; i <= n; i++) {
        let tmp = result[1];
        result = [tmp, result[0] + result[1]];
    }
    return result[1];
}

function isPalindrome(str) {
    let converted =  str.toLowerCase();

    return converted === converted.split('').reverse().join('');
}

function variableType(variable) {
    return typeof variable;
}

function amountToCoins(amount, coins) {
    let convertedCoins = [];

    for (let i = 0; i < coins.length; i++) {
        convertedCoins[i] = Math.floor(amount / coins[i]);
        amount -= convertedCoins[i] * coins[i];
    }
    return convertedCoins;
}


// ================================================
console.log("Fibbonacci from 0 to 19:")
for (let i = 0; i <= 19; i++) {
    console.log(`${i}. ${fibbonacci(i)}`);
}

console.log("Palindromes:");
console.log(`Abc: ${isPalindrome("Abc")}`);
console.log(`Aba: ${isPalindrome("Aba")}`);
console.log(`Ababa: ${isPalindrome("Ababa")}`);
console.log(`Abed: ${isPalindrome("Abed")}`);

console.log("Variable types:");
let x1 = 1;
let x2 = 'a';
let x3 = [1,1];
let x4 = ["a","bc"];
let x5 = true;
console.log(`${x1} : ${variableType(x1)}`);
console.log(`${x2} : ${variableType(x2)}`);
console.log(`${x3} : ${variableType(x3)}`);
console.log(`${x4} : ${variableType(x4)}`);
console.log(`${x5} : ${variableType(x5)}`);

console.log("Convert coins:")
console.log(`Amount: 46 Coins: 10,5,1 ::: ${amountToCoins(46,[10,5,1])}`);
console.log(`Amount: 46 Coins: 10,5,2,1 ::: ${amountToCoins(46,[10,5,2,1])}`);
console.log(`Amount: 63 Coins: 10,5,2,1 ::: ${amountToCoins(63,[10,5,2,1])}`);
console.log(`Amount: 1267 Coins: 25,10,1 ::: ${amountToCoins(1267,[25,10,1])}`);


