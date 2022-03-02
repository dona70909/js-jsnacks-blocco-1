const arrayNumbers = [];
const arrayOdd = [];
const arrayEven = [];



let sum = 0;
while(sum < 200){
    const userNUmber = parseInt(prompt("Inserisci un numero"));
    arrayNumbers.push(userNUmber);
    sum += userNUmber;
}

console.log(arrayNumbers);
console.log(sum);


/* if(((arrayOdd.length < 200) && (arrayEven.length < 200)) && ((userNUmber % 2) == 0)){
    arrayOdd.push(userNUmber);
} else if ( ((arrayOdd.length < 200) && (arrayEven.length < 200)) && ((userNUmber % 2) != 0) ){
        arrayEven.push(userNUmber);
} else{    
    arrayNumbers.push(userNUmber);    
} */