const userNum = Math.floor(Math.random() * 6 + 1)
const iaNum = Math.floor(Math.random() * 6 + 1)
let message = "PARITA'";
console.log("Numero Utente --> " + userNum + "   VS   " + iaNum + " <-- Numero Computer")

if(userNum > iaNum){
    message = "L'UTENTE VINCE";
}else if(userNum < iaNum){
    message = "IL COMPUTERT VINCE"
}

console.log(message);