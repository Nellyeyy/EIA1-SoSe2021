// Variablen
var leicht;
var mittel;
var schwer;
var spielfeld;
var oben;
var mitte;
var unten;
window.addEventListener("load", function () {
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
    function playleicht() {
        console.log("Sie spielen ein leichtes Spiel!");
        // if (spielfeld.value != "") {
        //     console.log ("Test");
        // }
        // if (oben.value != "") {
        //     console.log ("Test");
        // }
    }
    mittel.addEventListener("click", playmittel);
    function playmittel() {
        console.log("Sie spielen ein mittleres Spiel!");
    }
    schwer.addEventListener("click", playschwer);
    function playschwer() {
        console.log("Sie spielen ein schweres Spiel!");
    }
});
//# sourceMappingURL=ttt-script.js.map