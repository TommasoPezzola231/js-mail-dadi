const email = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com", "utente4@gmail.com", "utente5@gmail.com", "utente6@gmail.com"]

let emailUtente = document.getElementById("emailUtente");

let button = document.getElementById("verifica");

let messaggio = document.getElementById("risposta");

button.addEventListener("click",
    function () {

        let key = "NON è";

        for (let i = 0; i < email.length; i++) {

            let emailUtente = document.getElementById("emailUtente").value;

            let risposta = "";
        
            if (emailUtente == email [i]) {
                key = "è"
            }
        
        }

        risposta = `L'utente ${key} Registrato!`;
        console.log(`${risposta}`);
        messaggio.innerText = risposta;
        
    }
)
