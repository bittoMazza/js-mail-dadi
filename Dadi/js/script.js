const userNum = Math.floor(Math.random() * 6 + 1)
document.getElementById('user-num').innerHTML = userNum
const iaNum = Math.floor(Math.random() * 6 + 1)
document.getElementById('ia-num').innerHTML = iaNum
let message = "PARITA'";
console.log("Numero Utente --> " + userNum + "   VS   " + iaNum + " <-- Numero Computer")


if(userNum > iaNum){
    message = "L'UTENTE VINCE";
}else if(userNum < iaNum){
    message = "IL COMPUTERT VINCE"
}

console.log(message);
document.getElementById('final-message').innerHTML = message;