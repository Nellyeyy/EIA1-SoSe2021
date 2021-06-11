// Variablen
var leicht: HTMLElement;
var mittel: HTMLElement;
var schwer: HTMLElement;

var spielfeld: HTMLInputElement;

window.addEventListener("load", function (): void {

    // Zuweisungen
    leicht = document.querySelector("#leicht");
    mittel = document.querySelector("#mittel");
    schwer = document.querySelector("#schwer");

    spielfeld = document.querySelector("#spielfeld");

    // Auswahl der Schwierigkeit
    leicht.addEventListener("click", playleicht);

    function playleicht(): void {
        console.log("Sie spielen ein leichtes Spiel!");

        // 3x3 Spielfeld erscheinen lassen        
        spielfeld.classList.remove("ausblenden");
        console.log("Das 3x3 Spielfeld erscheint");

        // // Background Button Leicht 
        // leicht.classList.add("background1");
    }

    mittel.addEventListener("click", playmittel);

    function playmittel(): void {
        console.log("Sie spielen ein mittleres Spiel!");

        // 4x4 Spielfeld erscheinen lassen 
        spielfeld.classList.remove("ausblenden");
        console.log("Das 4x4 Spielfeld erscheint");
    }

    schwer.addEventListener("click", playschwer);

    function playschwer(): void {
        console.log("Sie spielen ein schweres Spiel!");

        // 5x5 Spielfeld erscheinen lassen
        spielfeld.classList.remove("ausblenden");
        console.log("Das 5x5 Spielfeld erscheint");
    }

});

