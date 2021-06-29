// Variablen
var hilfe: HTMLElement;

var leicht: HTMLElement;
var mittel: HTMLElement;
var schwer: HTMLElement;

var spielfeld: HTMLInputElement;
var spielfeld4x4: HTMLInputElement;
var spielfeld5x5: HTMLInputElement;

var eins: HTMLDivElement;
var zwei: HTMLDivElement;
var drei: HTMLDivElement;
var vier: HTMLDivElement;
var fuenf: HTMLDivElement;
var sechs: HTMLDivElement;
var sieben: HTMLDivElement;
var acht: HTMLDivElement;
var neun: HTMLDivElement;
var zehn: HTMLDivElement;
var elf: HTMLDivElement;
var zwoelf: HTMLDivElement;
var dreiz: HTMLDivElement;
var vierz: HTMLDivElement;
var fuenfz: HTMLDivElement;
var sechsz: HTMLDivElement;
var siebz: HTMLDivElement;
var achz: HTMLDivElement;
var neunz: HTMLDivElement;
var z: HTMLDivElement;
var ez: HTMLDivElement;
var zz: HTMLDivElement;
var dz: HTMLDivElement;
var vz: HTMLDivElement;
var fz: HTMLDivElement;

var maschine: string = "X";
var mensch: string = "O";

window.addEventListener("load", function (): void {

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
    var buttonleicht: HTMLElement = document.getElementById("leicht");
    var buttonmittel: HTMLElement = document.getElementById("mittel");
    var buttonschwer: HTMLElement = document.getElementById("schwer");

    var activeeins: HTMLElement = document.getElementById("spielfeld4x4");
    var activezwei: HTMLElement = document.getElementById("spielfeld5x5");
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

    // Züge 3x3 / Kreis und Kreuz setzen
    // let i: number = 0;

    // interface Button {
    //     buttondiv: HTMLDivElement;
    //     buttoncheck: boolean;
    //     buttontext: string;
    // }

    // let but: Button[] = [
    //     {
    //         buttondiv: eins,
    //         buttoncheck: true,
    //         buttontext: "" 
    //     },
    //     {
    //         buttondiv: zwei,
    //         buttoncheck: true,
    //         buttontext: ""  
    //     },
    //     {
    //         buttondiv: drei,
    //         buttoncheck: true,
    //         buttontext: ""  
    //     },
    //     {
    //         buttondiv: vier,
    //         buttoncheck: true,
    //         buttontext: ""  
    //     },
    //     {
    //         buttondiv: fuenf,
    //         buttoncheck: true,
    //         buttontext: ""  
    //     },
    //     {
    //         buttondiv: sechs,
    //         buttoncheck: true,
    //         buttontext: "" 
    //     },
    //     {
    //         buttondiv: sieben,
    //         buttoncheck: true,
    //         buttontext: ""  
    //     },
    //     {
    //         buttondiv: acht,
    //         buttoncheck: true,
    //         buttontext: ""  
    //     },
    //     {
    //         buttondiv: neun,
    //         buttoncheck: true,
    //         buttontext: ""  
    //     }
    // ];

    // let button3x3: HTMLDivElement[] = [eins, zwei, drei, vier, fuenf, sechs, sieben, acht, neun];

    // leicht.addEventListener("click", computer);
    // function computer(): void {
    //     if (buttonleicht.getAttribute("class") == "active") {
    //         i = Math.floor(Math.random() * but.length);
    //         but[i].innerHTML = maschine;
    //         but.buttoncheck == false;
    //     }
    // }

    // Züge 3x3 / Kreis und Kreuz setzen
    let i: number = 0;
    var zug: boolean = true;

    let check0: boolean = true;
    let check1: boolean = true;
    let check2: boolean = true;
    let check3: boolean = true;
    let check4: boolean = true;
    let check5: boolean = true;
    let check6: boolean = true;
    let check7: boolean = true;
    let check8: boolean = true;

    let button3x3: HTMLDivElement[] = [eins, zwei, drei, vier, fuenf, sechs, sieben, acht, neun];

    // Erster Zug Computer bei klick auf Leicht
    leicht.addEventListener("click", computer);
    function computer(): void {
        if (buttonleicht.getAttribute("class") == "active") {
            i = Math.floor(Math.random() * button3x3.length);
            button3x3[i].innerHTML = maschine;
            zug = false;
            console.log(zug);
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
    function player0(): void {
        if (buttonleicht.getAttribute("class") == "active" && check0 == true ) {
            button3x3[0].innerHTML = mensch;
            check0 = false;
            i = Math.floor(Math.random() * button3x3.length);
            button3x3[i].innerHTML = maschine;
            zug = false;
        }
        // if (check0 == false) {
        //     button3x3[i].innerHTML = maschine;
        // }

    }

    button3x3[1].addEventListener("click", player1);
    function player1(): void {
        if (check1 == true) {
            button3x3[1].innerHTML = mensch;
            check1 = false;
            if (check1 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }

    button3x3[2].addEventListener("click", player2);
    function player2(): void {
        if (check2 == true) {
            button3x3[2].innerHTML = mensch;
            check2 = false;
            if (check2 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }

    button3x3[3].addEventListener("click", player3);
    function player3(): void {
        if (check3 == true) {
            button3x3[3].innerHTML = mensch;
            check3 = false;
            if (check3 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }

    button3x3[4].addEventListener("click", player4);
    function player4(): void {
        if (check4 == true) {
            button3x3[4].innerHTML = mensch;
            check4 = false;
            if (check4 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }

    button3x3[5].addEventListener("click", player5);
    function player5(): void {
        if (check5 == true) {
            button3x3[5].innerHTML = mensch;
            check5 = false;
            if (check5 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }

    button3x3[6].addEventListener("click", player6);
    function player6(): void {
        if (check6 == true) {
            button3x3[6].innerHTML = mensch;
            check6 = false;
            if (check6 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }

    button3x3[7].addEventListener("click", player7);
    function player7(): void {
        if (check7 == true) {
            button3x3[7].innerHTML = mensch;
            check7 = false;
            if (check7 == false) {
                button3x3[i].innerHTML = maschine;
            }
        }
    }

    button3x3[8].addEventListener("click", player8);
    function player8(): void {
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




