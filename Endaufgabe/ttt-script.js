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
var runden;
var zaehlermensch;
// tslint:disable-next-line: no-any
var zahlmensch = 0;
var zaehlercomputer;
// tslint:disable-next-line: no-any
var zahlcomputer = 0;
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
    runden = document.querySelector(".runden");
    zaehlermensch = document.querySelector(".zaehlermensch");
    zaehlercomputer = document.querySelector(".zaehlercomputer");
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
        // Runden wechseln und Zählerstand einblenden
        runden.innerHTML = "3";
        zaehlermensch.innerHTML = zahlmensch;
        zaehlercomputer.innerHTML = zahlcomputer;
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
        // Runden wechseln
        runden.innerHTML = "4";
        zaehlermensch.innerHTML = zahlmensch;
        zaehlercomputer.innerHTML = zahlcomputer;
    }
    // Schweres Spiel
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
        // Runden wechseln
        runden.innerHTML = "5";
        zaehlermensch.innerHTML = zahlmensch;
        zaehlercomputer.innerHTML = zahlcomputer;
    }
    // Züge 3x3 / Kreis und Kreuz setzen
    var index = 0;
    var but = [
        {
            buttondiv: eins,
            buttoncheck: true
        },
        {
            buttondiv: zwei,
            buttoncheck: true
        },
        {
            buttondiv: drei,
            buttoncheck: true
        },
        {
            buttondiv: vier,
            buttoncheck: true
        },
        {
            buttondiv: fuenf,
            buttoncheck: true
        },
        {
            buttondiv: sechs,
            buttoncheck: true
        },
        {
            buttondiv: sieben,
            buttoncheck: true
        },
        {
            buttondiv: acht,
            buttoncheck: true
        },
        {
            buttondiv: neun,
            buttoncheck: true
        }
    ];
    // Erster Zug Computer
    leicht.addEventListener("click", computer);
    function computer() {
        if (buttonleicht.getAttribute("class") == "active") {
            index = Math.floor(Math.random() * but.length);
            but[index].buttondiv.innerHTML = maschine;
            but[index].buttoncheck = false;
        }
    }
    // Zug Mensch & Computer im Anschluss
    eins.addEventListener("click", function () {
        spielfeldclick(0);
    });
    zwei.addEventListener("click", function () {
        spielfeldclick(1);
    });
    drei.addEventListener("click", function () {
        spielfeldclick(2);
    });
    vier.addEventListener("click", function () {
        spielfeldclick(3);
    });
    fuenf.addEventListener("click", function () {
        spielfeldclick(4);
    });
    sechs.addEventListener("click", function () {
        spielfeldclick(5);
    });
    sieben.addEventListener("click", function () {
        spielfeldclick(6);
    });
    acht.addEventListener("click", function () {
        spielfeldclick(7);
    });
    neun.addEventListener("click", function () {
        spielfeldclick(8);
    });
    function spielfeldclick(i) {
        if (buttonleicht.getAttribute("class") == "active" && but[i].buttoncheck == true) {
            but[i].buttondiv.innerHTML = mensch;
            but[i].buttoncheck = false;
            index = Math.floor(Math.random() * but.length);
            if (but[index].buttoncheck == true) {
                but[index].buttondiv.innerHTML = maschine;
                but[index].buttoncheck = false;
            }
            else {
                index = Math.floor(Math.random() * but.length);
                if (but[index].buttoncheck == true) {
                    but[index].buttondiv.innerHTML = maschine;
                    but[index].buttoncheck = false;
                }
                else {
                    index = Math.floor(Math.random() * but.length);
                    if (but[index].buttoncheck == true) {
                        but[index].buttondiv.innerHTML = maschine;
                        but[index].buttoncheck = false;
                    }
                    else {
                        index = Math.floor(Math.random() * but.length);
                        if (but[index].buttoncheck == true) {
                            but[index].buttondiv.innerHTML = maschine;
                            but[index].buttoncheck = false;
                        }
                        else {
                            index = Math.floor(Math.random() * but.length);
                            if (but[index].buttoncheck == true) {
                                but[index].buttondiv.innerHTML = maschine;
                                but[index].buttoncheck = false;
                            }
                            else {
                                index = Math.floor(Math.random() * but.length);
                                if (but[index].buttoncheck == true) {
                                    but[index].buttondiv.innerHTML = maschine;
                                    but[index].buttoncheck = false;
                                }
                                else {
                                    index = Math.floor(Math.random() * but.length);
                                    if (but[index].buttoncheck == true) {
                                        but[index].buttondiv.innerHTML = maschine;
                                        but[index].buttoncheck = false;
                                    }
                                    else {
                                        index = Math.floor(Math.random() * but.length);
                                        if (but[index].buttoncheck == true) {
                                            but[index].buttondiv.innerHTML = maschine;
                                            but[index].buttoncheck = false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // Gewinnerregeln definiert & Zähler erhöht sich & neue Spielrunde
        if (eins.innerHTML == maschine && zwei.innerHTML == maschine && drei.innerHTML == maschine ||
            vier.innerHTML == maschine && fuenf.innerHTML == maschine && sechs.innerHTML == maschine ||
            sieben.innerHTML == maschine && acht.innerHTML == maschine && neun.innerHTML == maschine ||
            eins.innerHTML == maschine && vier.innerHTML == maschine && sieben.innerHTML == maschine ||
            zwei.innerHTML == maschine && fuenf.innerHTML == maschine && acht.innerHTML == maschine ||
            drei.innerHTML == maschine && sechs.innerHTML == maschine && neun.innerHTML == maschine ||
            eins.innerHTML == maschine && fuenf.innerHTML == maschine && neun.innerHTML == maschine ||
            drei.innerHTML == maschine && fuenf.innerHTML == maschine && sieben.innerHTML == maschine) {
            zaehlercomputer.innerHTML = zahlcomputer + 1;
            // but[1 && 2 && 3].buttondiv.innerHTML = "";
        }
        if (eins.innerHTML == mensch && zwei.innerHTML == mensch && drei.innerHTML == mensch ||
            vier.innerHTML == mensch && fuenf.innerHTML == mensch && sechs.innerHTML == mensch ||
            sieben.innerHTML == mensch && acht.innerHTML == mensch && neun.innerHTML == mensch ||
            eins.innerHTML == mensch && vier.innerHTML == mensch && sieben.innerHTML == mensch ||
            zwei.innerHTML == mensch && fuenf.innerHTML == mensch && acht.innerHTML == mensch ||
            drei.innerHTML == mensch && sechs.innerHTML == mensch && neun.innerHTML == mensch ||
            eins.innerHTML == mensch && fuenf.innerHTML == mensch && neun.innerHTML == mensch ||
            drei.innerHTML == mensch && fuenf.innerHTML == mensch && sieben.innerHTML == mensch) {
            zaehlermensch.innerHTML = zahlmensch + 1;
        }
    }
    // 4x4 Züge  setzen 
    var index4x4 = 0;
    var but4x4 = [
        {
            buttondiv4x4: eins,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: zwei,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: drei,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: vier,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: fuenf,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: sechs,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: sieben,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: acht,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: neun,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: zehn,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: elf,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: zwoelf,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: dreiz,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: vierz,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: fuenfz,
            buttoncheck4x4: true
        },
        {
            buttondiv4x4: sechsz,
            buttoncheck4x4: true
        }
    ];
    // Erster Zug Computer
    mittel.addEventListener("click", computer4x4);
    function computer4x4() {
        if (buttonmittel.getAttribute("class") == "active") {
            index4x4 = Math.floor(Math.random() * but4x4.length);
            but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
            but4x4[index4x4].buttoncheck4x4 = false;
        }
    }
    // Zug Mensch & Computer im Anschluss
    eins.addEventListener("click", function () {
        spielfeldclick4x4(0);
    });
    zwei.addEventListener("click", function () {
        spielfeldclick4x4(1);
    });
    drei.addEventListener("click", function () {
        spielfeldclick4x4(2);
    });
    vier.addEventListener("click", function () {
        spielfeldclick4x4(3);
    });
    fuenf.addEventListener("click", function () {
        spielfeldclick4x4(4);
    });
    sechs.addEventListener("click", function () {
        spielfeldclick4x4(5);
    });
    sieben.addEventListener("click", function () {
        spielfeldclick4x4(6);
    });
    acht.addEventListener("click", function () {
        spielfeldclick4x4(7);
    });
    neun.addEventListener("click", function () {
        spielfeldclick4x4(8);
    });
    zehn.addEventListener("click", function () {
        spielfeldclick4x4(9);
    });
    elf.addEventListener("click", function () {
        spielfeldclick4x4(10);
    });
    zwoelf.addEventListener("click", function () {
        spielfeldclick4x4(11);
    });
    dreiz.addEventListener("click", function () {
        spielfeldclick4x4(12);
    });
    vierz.addEventListener("click", function () {
        spielfeldclick4x4(13);
    });
    fuenfz.addEventListener("click", function () {
        spielfeldclick4x4(14);
    });
    sechsz.addEventListener("click", function () {
        spielfeldclick4x4(15);
    });
    function spielfeldclick4x4(i) {
        if (buttonmittel.getAttribute("class") == "active" && but4x4[i].buttoncheck4x4 == true) {
            but4x4[i].buttondiv4x4.innerHTML = mensch;
            but4x4[i].buttoncheck4x4 = false;
            index4x4 = Math.floor(Math.random() * but.length);
            if (but4x4[index4x4].buttoncheck4x4 == true) {
                but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
                but4x4[index4x4].buttoncheck4x4 = false;
            }
            else {
                index4x4 = Math.floor(Math.random() * but.length);
                if (but4x4[index4x4].buttoncheck4x4 == true) {
                    but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
                    but4x4[index4x4].buttoncheck4x4 = false;
                }
                else {
                    index4x4 = Math.floor(Math.random() * but.length);
                    if (but4x4[index4x4].buttoncheck4x4 == true) {
                        but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
                        but4x4[index4x4].buttoncheck4x4 = false;
                    }
                    else {
                        index4x4 = Math.floor(Math.random() * but.length);
                        if (but4x4[index4x4].buttoncheck4x4 == true) {
                            but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
                            but4x4[index4x4].buttoncheck4x4 = false;
                        }
                        else {
                            index4x4 = Math.floor(Math.random() * but.length);
                            if (but4x4[index4x4].buttoncheck4x4 == true) {
                                but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
                                but4x4[index4x4].buttoncheck4x4 = false;
                            }
                            else {
                                index4x4 = Math.floor(Math.random() * but.length);
                                if (but4x4[index4x4].buttoncheck4x4 == true) {
                                    but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
                                    but4x4[index4x4].buttoncheck4x4 = false;
                                }
                                else {
                                    index4x4 = Math.floor(Math.random() * but.length);
                                    if (but4x4[index4x4].buttoncheck4x4 == true) {
                                        but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
                                        but4x4[index4x4].buttoncheck4x4 = false;
                                    }
                                    else {
                                        index4x4 = Math.floor(Math.random() * but.length);
                                        if (but4x4[index4x4].buttoncheck4x4 == true) {
                                            but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
                                            but4x4[index4x4].buttoncheck4x4 = false;
                                        }
                                        else {
                                            index4x4 = Math.floor(Math.random() * but.length);
                                            if (but4x4[index4x4].buttoncheck4x4 == true) {
                                                but4x4[index4x4].buttondiv4x4.innerHTML = maschine;
                                                but4x4[index4x4].buttoncheck4x4 = false;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // 5x5 Züge  setzen 
    var index5x5 = 0;
    var but5x5 = [
        {
            buttondiv5x5: eins,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: zwei,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: drei,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: vier,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: fuenf,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: sechs,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: sieben,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: acht,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: neun,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: zehn,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: elf,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: zwoelf,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: dreiz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: vierz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: fuenfz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: sechsz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: siebz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: achz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: neunz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: z,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: ez,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: zz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: dz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: vz,
            buttoncheck5x5: true
        },
        {
            buttondiv5x5: fz,
            buttoncheck5x5: true
        }
    ];
    // Erster Zug Computer
    schwer.addEventListener("click", computer5x5);
    function computer5x5() {
        if (buttonschwer.getAttribute("class") == "active") {
            index5x5 = Math.floor(Math.random() * but5x5.length);
            but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
            but5x5[index5x5].buttoncheck5x5 = false;
        }
    }
    // Zug Mensch & Computer im Anschluss
    eins.addEventListener("click", function () {
        spielfeldclick5x5(0);
    });
    zwei.addEventListener("click", function () {
        spielfeldclick5x5(1);
    });
    drei.addEventListener("click", function () {
        spielfeldclick5x5(2);
    });
    vier.addEventListener("click", function () {
        spielfeldclick5x5(3);
    });
    fuenf.addEventListener("click", function () {
        spielfeldclick5x5(4);
    });
    sechs.addEventListener("click", function () {
        spielfeldclick5x5(5);
    });
    sieben.addEventListener("click", function () {
        spielfeldclick5x5(6);
    });
    acht.addEventListener("click", function () {
        spielfeldclick5x5(7);
    });
    neun.addEventListener("click", function () {
        spielfeldclick5x5(8);
    });
    zehn.addEventListener("click", function () {
        spielfeldclick5x5(9);
    });
    elf.addEventListener("click", function () {
        spielfeldclick5x5(10);
    });
    zwoelf.addEventListener("click", function () {
        spielfeldclick5x5(11);
    });
    dreiz.addEventListener("click", function () {
        spielfeldclick5x5(12);
    });
    vierz.addEventListener("click", function () {
        spielfeldclick5x5(13);
    });
    fuenfz.addEventListener("click", function () {
        spielfeldclick5x5(14);
    });
    sechsz.addEventListener("click", function () {
        spielfeldclick5x5(15);
    });
    siebz.addEventListener("click", function () {
        spielfeldclick5x5(16);
    });
    achz.addEventListener("click", function () {
        spielfeldclick5x5(17);
    });
    neunz.addEventListener("click", function () {
        spielfeldclick5x5(18);
    });
    z.addEventListener("click", function () {
        spielfeldclick5x5(19);
    });
    ez.addEventListener("click", function () {
        spielfeldclick5x5(20);
    });
    zz.addEventListener("click", function () {
        spielfeldclick5x5(21);
    });
    dz.addEventListener("click", function () {
        spielfeldclick5x5(22);
    });
    vz.addEventListener("click", function () {
        spielfeldclick5x5(23);
    });
    fz.addEventListener("click", function () {
        spielfeldclick5x5(24);
    });
    function spielfeldclick5x5(i) {
        if (buttonschwer.getAttribute("class") == "active" && but5x5[i].buttoncheck5x5 == true) {
            but5x5[i].buttondiv5x5.innerHTML = mensch;
            but5x5[i].buttoncheck5x5 = false;
            index5x5 = Math.floor(Math.random() * but.length);
            if (but5x5[index5x5].buttoncheck5x5 == true) {
                but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
                but5x5[index5x5].buttoncheck5x5 = false;
            }
            else {
                index5x5 = Math.floor(Math.random() * but.length);
                if (but5x5[index5x5].buttoncheck5x5 == true) {
                    but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
                    but5x5[index5x5].buttoncheck5x5 = false;
                }
                else {
                    index5x5 = Math.floor(Math.random() * but.length);
                    if (but5x5[index5x5].buttoncheck5x5 == true) {
                        but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
                        but5x5[index5x5].buttoncheck5x5 = false;
                    }
                    else {
                        index5x5 = Math.floor(Math.random() * but.length);
                        if (but5x5[index5x5].buttoncheck5x5 == true) {
                            but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
                            but5x5[index5x5].buttoncheck5x5 = false;
                        }
                        else {
                            index5x5 = Math.floor(Math.random() * but.length);
                            if (but5x5[index5x5].buttoncheck5x5 == true) {
                                but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
                                but5x5[index5x5].buttoncheck5x5 = false;
                            }
                            else {
                                index5x5 = Math.floor(Math.random() * but.length);
                                if (but5x5[index5x5].buttoncheck5x5 == true) {
                                    but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
                                    but5x5[index5x5].buttoncheck5x5 = false;
                                }
                                else {
                                    index5x5 = Math.floor(Math.random() * but.length);
                                    if (but5x5[index5x5].buttoncheck5x5 == true) {
                                        but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
                                        but5x5[index5x5].buttoncheck5x5 = false;
                                    }
                                    else {
                                        index5x5 = Math.floor(Math.random() * but.length);
                                        if (but5x5[index5x5].buttoncheck5x5 == true) {
                                            but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
                                            but5x5[index5x5].buttoncheck5x5 = false;
                                        }
                                        else {
                                            index5x5 = Math.floor(Math.random() * but.length);
                                            if (but5x5[index5x5].buttoncheck5x5 == true) {
                                                but5x5[index5x5].buttondiv5x5.innerHTML = maschine;
                                                but5x5[index5x5].buttoncheck5x5 = false;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
//# sourceMappingURL=ttt-script.js.map