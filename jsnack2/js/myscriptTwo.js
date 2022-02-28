const wordone = prompt("inserisci la prima parola");
const wordTwo = prompt("inserisci la seconda parola");


if(wordone.length < wordTwo.length){
    console.log(wordone);
    console.log(wordTwo);
} else if(wordTwo.length < wordone.length){
    console.log(wordTwo);
    console.log(wordone);
}else{
    console.log("Hanno la stessa lunghezza");
    console.log(wordone);
    console.log(wordTwo);
}

