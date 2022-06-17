const mail = ["ciccio@gmail.com","pasticcio@gmail.com","pasticcio@hotmail.com","prova@gmail.com"];
let message;
const userMail = prompt('Inserisci la tua mail');
console.log("L'utente prova ad accedere con la seguente mail: "+userMail)
for(let i=0; i <=mail.length; i++){
    if(userMail === mail[i]){
        message ="La tua mail è presente , puoi accedere !";
        /* Se troviamo una mail uguale a quella inserita dall'utente,rendiamo l'indice = alla lunghezza                   
           dell'array in modo tale da non soddisfare piu la condizione del for*/ 
        i = mail.length;
    }
    else
    {
        message = "La tua mail non è presente , non puoi accedere";  
    }
}

console.log(message)