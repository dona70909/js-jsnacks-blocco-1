const N = parseInt(prompt("Inserisci un numero"));


for (let i = 0; i<N; i++){ 
    const array = []; 
    while(array.length < 10){
        const randomNumber = Math.floor((Math.random() * 4532) + 4);
        array.push(randomNumber);
    }
    console.log(array);
}
