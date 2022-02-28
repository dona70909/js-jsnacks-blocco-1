const number = prompt("Inserisci un numero");


let sum = 0;
for(let i = 0; i<number.length;i++){
    /* split() */
    const digit = parseInt(number.charAt(i));
    sum += digit;
}

console.log(sum);
