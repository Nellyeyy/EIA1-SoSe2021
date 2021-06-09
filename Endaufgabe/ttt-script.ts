// Variablen
var leicht: HTMLElement;
var mittel: HTMLElement;
var schwer: HTMLElement;

var spielfeld: HTMLElement;

window.addEventListener("load", function (): void {

    // Zuweisungen
    leicht = document.querySelector("#leicht");
    mittel = document.querySelector("#mittel");
    schwer = document.querySelector("#schwer");

    spielfeld = document.querySelector("#spielfeld");

    //Spielfeld nicht sichtbar bei beim aufrufen
    // spielfeld.innerHTML = "";

    // Auswahl der Schwirigkeit
    leicht.addEventListener("click", playleicht);

    function playleicht(): void {
        console.log("Sie spielen die leichte Version");
        // if (spielfeld.innerHTML = !"") {
        //     spielfeld
        // };
    }

    mittel.addEventListener("click", playmittel);

    function playmittel(): void {
        console.log("Sie spielen die mittlere Version");
    }

    schwer.addEventListener("click", playschwer);

    function playschwer(): void {
        console.log("Sie spielen die schwere Version");
    }


});