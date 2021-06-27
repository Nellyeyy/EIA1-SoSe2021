// Variablen
var hilfe;
var leicht;
var mittel;
var schwer;
var spiel;
var feld;
window.addEventListener("load", function () {
    // Zuweisungen
    hilfe = document.querySelector("#hilfe");
    leicht = document.querySelector("#leicht");
    mittel = document.querySelector("#mittel");
    schwer = document.querySelector("#schwer");
    spiel = document.querySelector(".spiel");
    feld = document.querySelector(".feld");
    // Hilfebutton
    var erklaeren = document.getElementById("erklaerung");
    hilfe.addEventListener("click", erklaerung);
    function erklaerung() {
        if (erklaeren.getAttribute("class") == "ausblenden") {
            erklaeren.setAttribute("class", "");
        }
        else {
            erklaeren.setAttribute("class", "ausblenden");
        }
    }
    // Auswahl der Schwierigkeit
    // Variablen für Schwierifkeit
    var buttonleicht = document.getElementById("leicht");
    var buttonmittel = document.getElementById("mittel");
    var buttonschwer = document.getElementById("schwer");
    // 1. Leicht
    leicht.addEventListener("click", playleicht);
    function playleicht() {
        // Hintergrundfarbe
        if (buttonleicht.getAttribute("class") == "active") {
            buttonleicht.setAttribute("class", "");
        }
        else {
            buttonleicht.setAttribute("class", "active");
        }
        // Hintergrund der beiden anderen Button ausblenden bei klicken des aktuellen Buttons
        if (buttonmittel.getAttribute("class") == "active") {
            buttonmittel.setAttribute("class", "");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            buttonschwer.setAttribute("class", "");
        }
        // Spielfeld 3x3 einfügen
        if (buttonleicht.getAttribute("class") == "active") {
            spiel.setAttribute("class", "active");
            feld.setAttribute("class", "active");
        }
    }
    // Mittleres Spiel
    mittel.addEventListener("click", playmittel);
    function playmittel() {
        // Hintergrundfarbe
        if (buttonmittel.getAttribute("class") == "active") {
            buttonmittel.setAttribute("class", "");
        }
        else {
            buttonmittel.setAttribute("class", "active");
        }
        // Hintergrund der beiden anderen Button ausblenden bei klicken des aktuellen Buttons
        if (buttonleicht.getAttribute("class") == "active") {
            buttonleicht.setAttribute("class", "");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            buttonschwer.setAttribute("class", "");
        }
        // Spielfeld 4x4 einfügen
    }
    // 3. Schwer
    schwer.addEventListener("click", playschwer);
    function playschwer() {
        // Hintergrundfarbe
        if (buttonschwer.getAttribute("class") == "active") {
            buttonschwer.setAttribute("class", "");
        }
        else {
            buttonschwer.setAttribute("class", "active");
        }
        // Hintergrund der beiden anderen Button ausblenden bei klicken des aktuellen Buttons
        if (buttonleicht.getAttribute("class") == "active") {
            buttonleicht.setAttribute("class", "");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            buttonmittel.setAttribute("class", "");
        }
        // Spielfeld 5x5 einfügen
    }
    // Züge 3x3 / Kreis und Kreiz setzen
    // let i: number = 0;
    // let button3x3: string[] = ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii"];
    // leicht.addEventListener("click", computer);
    // function computer(): void {
    //     var computerchoos = button3x3[Math.floor(Math.random() * button3x3.length)];
    //     document.getElementById(computerchoos).classList.remove = " ";
    // }
    // function computer(): void {
    //     if (buttonleicht.getAttribute("class") == "active") {
    //         i = Math.floor(Math.random() * button3x3.length);
    //         // aa.classList.remove("bb");
    //         // aa.classList.remove("aa");
    //         console.log(i);
    //     }
    // }
});
//# sourceMappingURL=ttt-script.js.map