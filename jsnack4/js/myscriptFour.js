
const peaopleParty = ["antonio","francesco","carmela","lucia","alberto","adele"];

const yourName = prompt("Come ti chiami?").toLowerCase().trim();


let checkName = false;

for(let i = 0; i<peaopleParty.length; i++){
    if(peaopleParty[i] == yourName){
        checkName = true;
    } 
}

if(checkName){
    console.log("Puoi entrare");
    console.log(checkName);
}else{
    console.log(checkName);
    console.log("Mi dispiace il tuo nome non e' in lista");
}

/* 
if(peaopleParty.indexOf(yourName) > -1){
    console.log("Puoi entrare");
}else{
    console.log("Mi dispiace il tuo nome non e' in lista");
} */

/* includes true or false */
