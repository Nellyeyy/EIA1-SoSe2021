// Variablen
var leicht;
var mittel;
var schwer;
var spielfeld;
var spielfeld4x4;
var spielfeld5x5;
var hilfe;
window.addEventListener("load", function () {
    // Zuweisungen
    leicht = document.querySelector("#leicht");
    mittel = document.querySelector("#mittel");
    schwer = document.querySelector("#schwer");
    spielfeld = document.querySelector("#spielfeld");
    spielfeld4x4 = document.querySelector("#spielfeld4x4");
    spielfeld5x5 = document.querySelector("#spielfeld5x5");
    hilfe = document.querySelector("#hilfe");
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
    var activeeins = document.getElementById("spielfeld4x4");
    var activezwei = document.getElementById("spielfeld5x5");
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
        // Ausblenden des 4x4 und 5x5
        if (activezwei.getAttribute("class") == "active") {
            activezwei.setAttribute("class", "");
        }
        else {
            activezwei.setAttribute("class", "active");
        }
        if (activeeins.getAttribute("class") == "active") {
            activeeins.setAttribute("class", "");
        }
        else {
            activeeins.setAttribute("class", "active");
        }
        // Hintergrund der beiden anderen Button ausblenden bei klicken des aktuellen Buttons
        if (buttonmittel.getAttribute("class") == "active") {
            buttonmittel.setAttribute("class", "");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            buttonschwer.setAttribute("class", "");
        }
        // Einblenden des 3x3 wenn vorher von anderer Schwierigkeit kommend
        if (activezwei.getAttribute("class") == "") {
            activezwei.setAttribute("class", "active");
        }
        if (activeeins.getAttribute("class") == "") {
            activeeins.setAttribute("class", "active");
        }
        // Bei deaktivieren von Button wird Start gezeigt
        if (buttonleicht.getAttribute("class") == "") {
            activeeins.setAttribute("class", "");
            activezwei.setAttribute("class", "");
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
        // Ausblenden des 5x5
        if (activezwei.getAttribute("class") == "active") {
            activezwei.setAttribute("class", "");
        }
        else {
            activezwei.setAttribute("class", "active");
        }
        // Hintergrund der beiden anderen Button ausblenden bei klicken des aktuellen Buttons
        if (buttonleicht.getAttribute("class") == "active") {
            buttonleicht.setAttribute("class", "");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            buttonschwer.setAttribute("class", "");
        }
        // Einblenden des 4x4 wenn vorher von anderer Schwierigkeit kommend
        if (activeeins.getAttribute("class") == "active") {
            activeeins.setAttribute("class", "");
        }
        if (activezwei.getAttribute("class") == "") {
            activezwei.setAttribute("class", "active");
        }
        // Bei deaktivieren von Button wird Start gezeigt
        if (buttonmittel.getAttribute("class") == "") {
            activeeins.setAttribute("class", "");
            activezwei.setAttribute("class", "");
        }
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
        // Einblenden des 5x5 wenn vorher von anderer Schwierigkeit kommend
        if (activezwei.getAttribute("class") == "active") {
            activezwei.setAttribute("class", "");
        }
        if (activeeins.getAttribute("class") == "active") {
            activeeins.setAttribute("class", "");
        }
    }
    // Züge/ Kreis und Kreiz setzen
    document.querySelector("#eins").addEventListener("click", function () { play(); });
    document.querySelector("#zwei").addEventListener("click", function () { play(); });
    document.querySelector("#drei").addEventListener("click", function () { play(); });
    document.querySelector("#vier").addEventListener("click", function () { play(); });
    document.querySelector("#fuenf").addEventListener("click", function () { play(); });
    document.querySelector("#sechs").addEventListener("click", function () { play(); });
    document.querySelector("#sieben").addEventListener("click", function () { play(); });
    document.querySelector("#acht").addEventListener("click", function () { play(); });
    document.querySelector("#neun").addEventListener("click", function () { play(); });
    document.querySelector("#zehn").addEventListener("click", function () { play(); });
    document.querySelector("#elf").addEventListener("click", function () { play(); });
    document.querySelector("#zwoelf").addEventListener("click", function () { play(); });
    document.querySelector("#dreiz").addEventListener("click", function () { play(); });
    document.querySelector("#vierz").addEventListener("click", function () { play(); });
    document.querySelector("#fuenfz").addEventListener("click", function () { play(); });
    document.querySelector("#sechsz").addEventListener("click", function () { play(); });
    document.querySelector("#siebz").addEventListener("click", function () { play(); });
    document.querySelector("#achz").addEventListener("click", function () { play(); });
    document.querySelector("#neunz").addEventListener("click", function () { play(); });
    document.querySelector("#z").addEventListener("click", function () { play(); });
    document.querySelector("#ez").addEventListener("click", function () { play(); });
    document.querySelector("#zz").addEventListener("click", function () { play(); });
    document.querySelector("#dz").addEventListener("click", function () { play(); });
    document.querySelector("#vz").addEventListener("click", function () { play(); });
    document.querySelector("#fz").addEventListener("click", function () { play(); });
    function play() {
        if (buttonleicht.getAttribute("class") == "active") {
            console.log("Hallo");
        }
        if (buttonmittel.getAttribute("class") == "active") {
            console.log("Hallo");
        }
        if (buttonschwer.getAttribute("class") == "active") {
            console.log("Hallo");
        }
    }
});
//# sourceMappingURL=ttt-script.js.map