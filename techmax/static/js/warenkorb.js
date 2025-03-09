let bestellenButtons = document.getElementsByClassName("warenkorb-bestellen");

for (let i = 0; i < bestellenButtons.length; i++) {
    bestellenButtons[i].addEventListener("click", function() {
        let artikelID = this.dataset.artikel;
        let action = this.dataset.action;
        updateKundenBestellung(artikelID, action);

        if(benutzer == "AnonymousUser"){
            updateGastBestellung(artikelID, action);
        } else {
            updateKundenBestellung(artikelID, action);
        }
    });
}

function updateGastBestellung(artikelID, action){
    //console.log("Gast " +artikelID+" "+action)
    if(action == "bestellen"){
        if(warenkorb[artikelID] == undefined){
            warenkorb[artikelID] = {"menge":1}
        } else {
            warenkorb[artikelID]["menge"] +=1
        }
    }
    if(action == "entfernen"){
        warenkorb[artikelID]["menge"] -= 1

        if(warenkorb[artikelID]["menge"] <=0){
            delete warenkorb[artikelID]
        }
    }
    document.cookie = "warenkorb=" + JSON.stringify(warenkorb) + ";domain;path=/; SameSite=None; Secure"
    console.log(warenkorb)
    location.reload()
}

function updateKundenBestellung(artikelID, action) {
    let url = "/artikel_backend/";
    let csrftoken = window.csrftoken;
    console.log("CSRF-Token:", csrftoken);

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken
        },
        body: JSON.stringify({ "artikelID": artikelID, "action": action })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Erfolgreiche Antwort:", data);
        location.reload();
    })
    .catch(error => console.error("Fehler beim Senden der Bestellung:", error));
}

// Kasse
let formular = document.getElementById("formular");
let gesamtpreis = document.getElementById("gesamtpreis")?.value || 0;

if (formular) {
    formular.addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("formular-button")?.classList.add("d-none");
        document.getElementById("bezahlen-info")?.classList.remove("d-none");
    });
}

// **Fix für bezahlen-button**
let bezahlenButton = document.getElementById("bezahlen-button");
if (bezahlenButton) {
    bezahlenButton.addEventListener("click", function(e) {
        submitFormular();
    });
}

// Formular absenden
function submitFormular(){
    let benutzerDaten = {
        "name": formular?.inputName?.value || "",
        "email": formular?.inputEmail?.value || "",
        "gesamtpreis": gesamtpreis
    }
    let lieferadresse = {
        "adresse": formular?.inputAdresse?.value || "",
        "plz": formular?.inputPlz?.value || "",
        "stadt": formular?.inputStadt?.value || "",
        "land": formular?.inputLand?.value || "",
    }
    console.log(benutzerDaten, lieferadresse);

    let url = "/bestellen/";

    fetch(url, {
        method: "post",
        headers: {
            "Content-type": "application/json",
            "X-CSRFToken":csrftoken,
        },
        body:JSON.stringify({"benutzerDaten":benutzerDaten, "lieferadresse":lieferadresse})
    })
    .then(()=>window.location.href="/")
}
