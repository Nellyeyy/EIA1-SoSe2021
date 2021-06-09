// Variablen
var leicht;
var mittel;
var schwer;
var spielfeld;
window.addEventListener("load", function () {
    // Zuweisungen
    leicht = document.querySelector("#leicht");
    mittel = document.querySelector("#mittel");
    schwer = document.querySelector("#schwer");
    spielfeld = document.querySelector("#spielfeld");
    //Spielfeld nicht sichtbar bei beim aufrufen
    // spielfeld.innerHTML = "";
    // Auswahl der Schwirigkeit
    leicht.addEventListener("click", playleicht);
    function playleicht() {
        console.log("Sie spielen die leichte Version");
        // if (spielfeld.innerHTML = !"") {
        //     spielfeld
        // };
    }
    mittel.addEventListener("click", playmittel);
    function playmittel() {
        console.log("Sie spielen die mittlere Version");
    }
    schwer.addEventListener("click", playschwer);
    function playschwer() {
        console.log("Sie spielen die schwere Version");
    }
});
//# sourceMappingURL=ttt-script.js.map