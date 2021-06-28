// Variablen
var hilfe;
var leicht;
var mittel;
var schwer;
var spielfeld;
var spielfeld4x4;
var spielfeld5x5;
var eins;
var zwei;
var drei;
var vier;
var fuenf;
var sechs;
var sieben;
var acht;
var neun;
var zehn;
var elf;
var zwoelf;
var dreiz;
var vierz;
var fuenfz;
var sechsz;
var siebz;
var achz;
var neunz;
var z;
var ez;
var zz;
var dz;
var vz;
var fz;
var maschine = "X";
var mensch = "O";
window.addEventListener("load", function () {
    // Zuweisungen
    hilfe = document.querySelector("#hilfe");
    leicht = document.querySelector("#leicht");
    mittel = document.querySelector("#mittel");
    schwer = document.querySelector("#schwer");
    spielfeld = document.querySelector("#spielfeld");
    spielfeld4x4 = document.querySelector("#spielfeld4x4");
    spielfeld5x5 = document.querySelector("#spielfeld5x5");
    eins = document.querySelector("#eins");
    zwei = document.querySelector("#zwei");
    drei = document.querySelector("#drei");
    vier = document.querySelector("#vier");
    fuenf = document.querySelector("#fuenf");
    sechs = document.querySelector("#sechs");
    sieben = document.querySelector("#sieben");
    acht = document.querySelector("#acht");
    neun = document.querySelector("#neun");
    zehn = document.querySelector("#zehn");
    elf = document.querySelector("#elf");
    zwoelf = document.querySelector("#zwoelf");
    dreiz = document.querySelector("#dreiz");
    vierz = document.querySelector("#vierz");
    fuenfz = document.querySelector("#fuenfz");
    sechsz = document.querySelector("#sechsz");
    siebz = document.querySelector("#siebz");
    achz = document.querySelector("#achz");
    neunz = document.querySelector("#neunz");
    z = document.querySelector("#z");
    ez = document.querySelector("#ez");
    zz = document.querySelector("#zz");
    dz = document.querySelector("#dz");
    vz = document.querySelector("#vz");
    fz = document.querySelector("#fz");
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
    var activeeins = document.getElementById("spielfeld4x4");
    var activezwei = document.getElementById("spielfeld5x5");
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
    // Züge 3x3 / Kreis und Kreuz setzen
    var i = 0;
    var zug = true;
    var check0 = true;
    var check1 = true;
    var check2 = true;
    var check3 = true;
    var check4 = true;
    var check5 = true;
    var check6 = true;
    var check7 = true;
    var check8 = true;
    var button3x3 = [eins, zwei, drei, vier, fuenf, sechs, sieben, acht, neun];
    // Erster Zug Computer bei klick auf Leicht
    leicht.addEventListener("click", computer);
    function computer() {
        if (buttonleicht.getAttribute("class") == "active") {
            i = Math.floor(Math.random() * button3x3.length);
            button3x3[i].innerHTML = maschine;
            i++;
        }
    }
    // function computerabc(): void {
    //     if (check0 == true && zug == true) {
    //         i = 0;
    //         button3x3[i].innerHTML = maschine;
    //         check0 = false;
    //         zug = false;
    //     }
    //     if (check1 == true && zug == true) {
    //         i = 1;
    //         button3x3[i].innerHTML = maschine;
    //         check1 = false;
    //         zug = false;
    //     }
    //     if (check2 == true && zug == true) {
    //         i = 2;
    //         button3x3[i].innerHTML = maschine;
    //         check2 = false;
    //         zug = false;
    //     }
    //     if (check3 == true && zug == true) {
    //         i = 3;
    //         button3x3[i].innerHTML = maschine;
    //         check3 = false;
    //         zug = false;
    //     }
    //     if (check4 == true && zug == true) {
    //         i = 4;
    //         button3x3[i].innerHTML = maschine;
    //         check4 = false;
    //         zug = false;
    //     }
    //     if (check5 == true && zug == true) {
    //         i = 5;
    //         button3x3[i].innerHTML = maschine;
    //         check5 = false;
    //         zug = false;
    //     }
    //     if (check6 == true && zug == true) {
    //         i = 6;
    //         button3x3[i].innerHTML = maschine;
    //         check6 = false;
    //         zug = false;
    //     }
    //     if (check7 == true && zug == true) {
    //         i = 7;
    //         button3x3[i].innerHTML = maschine;
    //         check7 = false;
    //         zug = false;
    //     }
    //     if (check8 == true && zug == true) {
    //         i = 8;
    //         button3x3[i].innerHTML = maschine;
    //         check8 = false;
    //         zug = false;
    //     }
    // }
    // Zug von Mensch, Computer setzt darauf hin seinen Zug
    button3x3[0].addEventListener("click", player0);
    function player0() {
        if (check0 == true) {
            button3x3[0].innerHTML = mensch;
            check0 = false;
            if (check0 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }
    button3x3[1].addEventListener("click", player1);
    function player1() {
        if (check1 == true) {
            button3x3[1].innerHTML = mensch;
            check1 = false;
            if (check1 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }
    button3x3[2].addEventListener("click", player2);
    function player2() {
        if (check2 == true) {
            button3x3[2].innerHTML = mensch;
            check2 = false;
            if (check2 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }
    button3x3[3].addEventListener("click", player3);
    function player3() {
        if (check3 == true) {
            button3x3[3].innerHTML = mensch;
            check3 = false;
            if (check3 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }
    button3x3[4].addEventListener("click", player4);
    function player4() {
        if (check4 == true) {
            button3x3[4].innerHTML = mensch;
            check4 = false;
            if (check4 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }
    button3x3[5].addEventListener("click", player5);
    function player5() {
        if (check5 == true) {
            button3x3[5].innerHTML = mensch;
            check5 = false;
            if (check5 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }
    button3x3[6].addEventListener("click", player6);
    function player6() {
        if (check6 == true) {
            button3x3[6].innerHTML = mensch;
            check6 = false;
            if (check6 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }
    button3x3[7].addEventListener("click", player7);
    function player7() {
        if (check7 == true) {
            button3x3[7].innerHTML = mensch;
            check7 = false;
            if (check7 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }
    button3x3[8].addEventListener("click", player8);
    function player8() {
        if (check8 == true) {
            button3x3[8].innerHTML = mensch;
            check8 = false;
            if (check8 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }
    // function computertest(): void {
    //     while (zug == true) {
    //         i = Math.floor(Math.random() * button3x3.length);
    //         if (ckeckarray[i] == true) {
    //             button3x3[i].innerHTML = maschine; 
    //             zug = false; 
    //             ckeckarray [i] = false;
    //         }
    //     }
    // }
    // function computerabc(): void {
    //     if (check0 == true && zug == true) {
    //         i = 0;
    //         button3x3[i].innerHTML = maschine;
    //         check0 = false;
    //         zug = false;
    //     }
    //     if (check1 == true  && zug == true) {
    //         i = 1;
    //         button3x3[i].innerHTML = maschine;
    //         check1 = false;
    //         zug = false;
    //     }
    //     if (check2 == true && zug == true) {
    //         i = 2;
    //         button3x3[i].innerHTML = maschine;
    //         check2 = false;
    //         zug = false;
    //     }
    //     if (check3 == true && zug == true) {
    //         i = 3;
    //         button3x3[i].innerHTML = maschine;
    //         check3 = false;
    //         zug = false;
    //     }
    //     if (check4 == true && zug == true) {
    //         i = 4;
    //         button3x3[i].innerHTML = maschine;
    //         check4 = false;
    //         zug = false;
    //     }
    //     if (check5 == true && zug == true) {
    //         i = 5;
    //         button3x3[i].innerHTML = maschine;
    //         check5 = false;
    //         zug = false;
    //     }
    //     if (check6 == true && zug == true) {
    //         i = 6;
    //         button3x3[i].innerHTML = maschine;
    //         check6 = false;
    //         zug = false;
    //     }
    //     if (check7 == true && zug == true) {
    //         i = 7;
    //         button3x3[i].innerHTML = maschine;
    //         check7 = false;
    //         zug = false;
    //     }
    //     if (check8 == true && zug == true) {
    //         i = 8;
    //         button3x3[i].innerHTML = maschine;
    //         check8 = false;
    //         zug = false;
    //     }
    // }
    // button3x3[0].addEventListener("click", player0);
    // function player0(): void {
    //     if (check0 == true) {
    //         button3x3[0].innerHTML = mensch;
    //         check0 = false;
    //         computertest();
    //         zug = true;
    //     }
    // }
    // button3x3[1].addEventListener("click", player1);
    // function player1(): void {
    //     if (check1 == true) {
    //         button3x3[1].innerHTML = mensch;
    //         check1 = false;
    //         computertest();
    //         zug = true;
    //     }
    // }
    // button3x3[2].addEventListener("click", player2);
    // function player2(): void {
    //     if (check2 == true) {
    //         button3x3[2].innerHTML = mensch;
    //         check2 = false;
    //         computertest();
    //         zug = true;
    //     }
    // }
    // button3x3[3].addEventListener("click", player3);
    // function player3(): void {
    //     if (check3 == true) {
    //         button3x3[3].innerHTML = mensch;
    //         check3 = false;
    //         computertest();
    //         zug = true;
    //     }
    // }
    // button3x3[4].addEventListener("click", player4);
    // function player4(): void {
    //     if (check4 == true) {
    //         button3x3[4].innerHTML = mensch;
    //         check4 = false;
    //         computertest();
    //         zug = true;
    //     }
    // }
    // button3x3[5].addEventListener("click", player5);
    // function player5(): void {
    //     if (check5 == true) {
    //         button3x3[5].innerHTML = mensch;
    //         check5 = false;
    //         computertest();
    //         zug = true;
    //     }
    // }
    // button3x3[6].addEventListener("click", player6);
    // function player6(): void {
    //     if (check6 == true) {
    //         button3x3[6].innerHTML = mensch;
    //         check6 = false;
    //         computertest();
    //         zug = true;
    //     }
    // }
    // button3x3[7].addEventListener("click", player7);
    // function player7(): void {
    //     if (check7 == true) {
    //         button3x3[7].innerHTML = mensch;
    //         check7 = false;
    //         computertest();
    //         zug = true;
    //     }
    // }
    // button3x3[8].addEventListener("click", player8);
    // function player8(): void {
    //     if (check8 == true) {
    //         button3x3[8].innerHTML = mensch;
    //         check8 = false;
    //         computertest();
    //         zug = true;
    //     }
    // }
});
//# sourceMappingURL=ttt-script.js.map