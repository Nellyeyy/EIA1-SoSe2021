// Variable
// var pin: HTMLElement;
var kontostandButton: HTMLElement;

pin = document.querySelector("#pin");
kontostandButton = document.querySelector("#kontostand");

// Funktion: Bei Klick auf Button neues Eingabefeld erseint
kontostandButton.addEventListener("click", Kontostand);

function Kontostand(): void {
    // Pin hat Classe ausgeblendet in htm/css mit display none
    pin.setAttribute("class", "");
}

// Variable
var pin: HTMLElement;
var pinEingabe: HTMLElement;
var bestaetigButton: HTMLElement;
var kontostand: HTMLElement;

pin = document.querySelector("#kontostand");
pinEingabe = document.querySelector("#pinEingabe");
bestaetigButton = document.querySelector("#bestaetigen");
kontostand = document.querySelector("#kontostand");

var versuch: number = 1;

// // Funktion: Bei Klick auf Bestätigen-Button neues Kontostand erscheint
// bestaetigButton.addEventListener("click", Pinprove);

function Pinprove(): void {
    if (pinEingabe.getAttribute("class") == "active") {
        // Kontostand hat Classe ausgeblendet in htm/css mit display none
        kontostand.setAttribute("class", "");
    } else if (versuch == 1 || versuch == 2 || versuch == 3) {
        // Computer sperrt die Karte und lässt eine Nachrdicht anzeigen
        var sperrung: HTMLElement = this.createElement("div", "falscheingabe");
        sperrung.textContent = `3 malige Falscheingabe. Ihre Karte ist gesperrt. 
        Melden Sie sich beim Kundenservice!`;
        pinEingabe.append(sperrung);
        // karte.setAttribut("class", "sperren");
        // Kartenausgabe

    } else {
        // pinEingabe wiederholt 
        pin.setAttribute("class", "");
        // Nachricht erschienen lassen 
        var falscheingabe: HTMLElement = this.createElement("div", "falscheingabe");
        falscheingabe.textContent = `Falscheingabe. Bitte versuchen Sie es erneut`;
        pinEingabe.append(falscheingabe);
        versuch++;
    }
}

// Funktion: Bei Klick auf Bestätigen-Button - Kontostand erscheint
bestaetigButton.addEventListener("click", Pinprove);

function Pinprove(): void {
    if (pinEingabe.getAttribute("class") == "active") {
        // Kontostand hat Classe ausgeblendet in htm/css mit display none
        kontostand.setAttribute("class", "");
    } else {
        while (versuch <= 3) {
            // pinEingabe wiederholt 
            pin.setAttribute("class", "");
            // Nachricht erschienen lassen 
            var falscheingabe: HTMLElement = this.createElement("div", "falscheingabe");
            falscheingabe.textContent = `Falscheingabe. Bitte versuchen Sie es erneut`;
            pinEingabe.append(falscheingabe);
            versuch++;
        }
        //  Computer sperrt die Karte und lässt eine Nachrdicht anzeigen
        var sperrung: HTMLElement = this.createElement("div", "falscheingabe");
        sperrung.textContent = `3 malige Falscheingabe. Ihre Karte ist gesperrt. 
        Melden Sie sich beim Kundenservice!`;
        pinEingabe.append(sperrung);
        // karte.setAttribut("class", "sperren");
        // Kartenausgabe

    }
}


// tslint:disable-next-line: no-any
const konto: any = {
    id: "123-456-789-0",
    iban: "DE12 1212 122 1212 1212 00",
    name: "Max Mustermann"
};


