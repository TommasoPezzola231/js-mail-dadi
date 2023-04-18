const email = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com", "utente4@gmail.com", "utente5@gmail.com", "utente6@gmail.com"]

let emailUtente = prompt("Inserisci la tua Email");

let key = "NON è";


for (let i = 0; i < email.length; i++) {

    if (emailUtente == email [i]) {
        key = "è"
    }

}

console.log(`L'utente ${key} Registrato!`);
alert(`L'utente ${key} Registrato!`);