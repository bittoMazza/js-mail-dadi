const mail = ["ciccio@gmail.com","pasticcio@gmail.com","pasticcio@hotmail.com","prova@gmail.com"];
let message = false;
const userMail = prompt('Inserisci la tua mail');
console.log("L'utente prova ad accedere con la seguente mail: "+userMail)
for(let i=0; i < mail.length; i++){
    if(userMail === mail[i]){
        message = true;
        /* Se troviamo una mail uguale a quella inserita dall'utente,rendiamo l'indice = alla lunghezza                   
           dell'array in modo tale da non soddisfare piu la condizione del for*/ 
        i = mail.length;
    }
}

if(message == true){
    console.log("La mail è presente , l'utente puo accedere")
}else{
    console.log("La mail non è presente , l'utente non puo accedere")
}