const arrayNumber = [];

let sum = 0;
let media = 0;
for (i = 0; i < 10; i++){
    const number = Math.floor(Math.random() * 10);
    arrayNumber.push(number);
    sum += number;
    media = sum/arrayNumber.length;
} 

console.log(arrayNumber);
console.log("media " + media);