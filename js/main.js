const email = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com", "utente4@gmail.com", "utente5@gmail.com", "utente6@gmail.com"]

let emailUtente = document.getElementById("emailUtente");

let button = document.getElementById("verifica");

let messaggio = document.getElementById("risposta");


let key = "NON è";

button.addEventListener("click",
    function () {

        for (let i = 0; i < email.length; i++) {

            let emailUtente = document.getElementById("emailUtente").value;
        
            if (emailUtente == email [i]) {
                key = "è"
            } 
        
        }

        messaggio = `L'utente ${key} Registrato!`;
        console.log(`${messaggio}`);
        messaggio.innerText = messaggio;
        
    }
)
