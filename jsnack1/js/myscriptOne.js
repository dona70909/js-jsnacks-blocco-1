const numberOne = parseInt(prompt("inserisci un numero"));
const numberTwo = parseInt(prompt("inserisci un numero"));

console.log(numberOne);
console.log(numberTwo);



if(isNaN(numberOne) || isNaN(numberTwo)){
    console.log("Valori non validi");
}
else if(numberOne > numberTwo){
    console.log("Ha vinto player 1" + numberOne);
}else if(numberOne < numberTwo){
    console.log("Ha vinto player 2" + numberTwo);
} else{
    console.log("Pari");
}