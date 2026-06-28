const principle = 10000;
const rate = 0.10;
const N = 2;
const time = 3;
const amount = principle *(1+rate / N) ** (N * time);
const compoundinterest = amount - principle;

console.log("amount : " , amount.toFixed(2));
console.log("compound interest for  3 years :", compoundinterest.toFixed(3));
