// Variablen
var leicht: HTMLElement;
var mittel: HTMLElement;
var schwer: HTMLElement;

var spielfeld: HTMLInputElement;
var oben: HTMLInputElement;
var mitte: HTMLInputElement;
var unten: HTMLInputElement;

window.addEventListener("load", function (): void {

    // Zuweisungen
    leicht = document.querySelector("#leicht");
    mittel = document.querySelector("#mittel");
    schwer = document.querySelector("#schwer");

    spielfeld = document.querySelector("#spielfeld");
    oben = document.querySelector("#oben");
    mitte = document.querySelector("#mitte");
    unten = document.querySelector("#unten");

    //Spielfeld nicht sichtbar bei beim aufrufen
    // spielfeld.innerHTML = "";
    // oben.innerHTML = "";


    // Auswahl der Schwirigkeit
    leicht.addEventListener("click", playleicht);

    function playleicht(): void {
        console.log("Sie spielen ein leichtes Spiel!");

        // if (spielfeld.value != "") {
        //     console.log ("Test");
        // }

        // if (oben.value != "") {
        //     console.log ("Test");
            
        // }
    }

    mittel.addEventListener("click", playmittel);

    function playmittel(): void {
        console.log("Sie spielen ein mittleres Spiel!");
    }

    schwer.addEventListener("click", playschwer);

    function playschwer(): void {
        console.log("Sie spielen ein schweres Spiel!");
    }

});

