// Variablen
var leicht: HTMLElement;
var mittel: HTMLElement;
var schwer: HTMLElement;

var spielfeld: HTMLInputElement;
var spielfeld4x4: HTMLInputElement;
var spielfeld5x5: HTMLInputElement;

var hilfe: HTMLElement;

window.addEventListener("load", function (): void {

    // Zuweisungen
    leicht = document.querySelector("#leicht");
    mittel = document.querySelector("#mittel");
    schwer = document.querySelector("#schwer");

    spielfeld = document.querySelector("#spielfeld");
    spielfeld4x4 = document.querySelector("#spielfeld4x4");
    spielfeld5x5 = document.querySelector("#spielfeld5x5");

    hilfe = document.querySelector("#hilfe");

    // Hilfebutton
    var erklaeren: HTMLElement = document.getElementById("erklaerung");

    hilfe.addEventListener("click", erklaerung);

    function erklaerung(): void {

        if (erklaeren.getAttribute("class") == "ausblenden") {
            erklaeren.setAttribute("class", "");
        } else {
            erklaeren.setAttribute("class", "ausblenden");
        }
    }

    // Auswahl der Schwierigkeit
    // Variablen für Schwierifkeit
    var activeeins: HTMLElement = document.getElementById("spielfeld4x4");
    var activezwei: HTMLElement = document.getElementById("spielfeld5x5");
    var buttonleicht: HTMLElement = document.getElementById("leicht");
    var buttonmittel: HTMLElement = document.getElementById("mittel");
    var buttonschwer: HTMLElement = document.getElementById("schwer");


    // 1. Leicht
    leicht.addEventListener("click", playleicht);

    function playleicht(): void {

        // Hintergrundfarbe
        if (buttonleicht.getAttribute("class") == "active") {
            buttonleicht.setAttribute("class", "");
        } else {
            buttonleicht.setAttribute("class", "active");
        }

        // Ausblenden des 4x4 und 5x5
        if (activezwei.getAttribute("class") == "active") {
            activezwei.setAttribute("class", "");
        } else {
            activezwei.setAttribute("class", "active");
        }

        if (activeeins.getAttribute("class") == "active") {
            activeeins.setAttribute("class", "");
        } else {
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

    function playmittel(): void {

        // Hintergrundfarbe
        if (buttonmittel.getAttribute("class") == "active") {
            buttonmittel.setAttribute("class", "");
        } else {
            buttonmittel.setAttribute("class", "active");
        }

        // Ausblenden des 5x5
        if (activezwei.getAttribute("class") == "active") {
            activezwei.setAttribute("class", "");
        } else {
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

    function playschwer(): void {

        // Hintergrundfarbe
        if (buttonschwer.getAttribute("class") == "active") {
            buttonschwer.setAttribute("class", "");
        } else {
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

});

