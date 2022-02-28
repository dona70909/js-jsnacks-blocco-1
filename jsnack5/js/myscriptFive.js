const arrayNumber = [];

for(let i = 0; i<=6; i++){
    const userNumber = parseInt(prompt("Tentativo n."+ i +".  Inserisci un numero "));
    if(((userNumber % 2) != 0) && !isNaN(userNumber)){
        arrayNumber.push(userNumber);
    } 
}

console.log(arrayNumber);
