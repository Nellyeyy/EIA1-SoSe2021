// Variablen, welche für alle TS gelten
var leicht;
var mittel;
var schwer;
var hilfe;
var computer;
var mensch;
var erklaeren = document.getElementById("erklaerung");
var buttonleicht = document.getElementById("leicht");
var buttonmittel = document.getElementById("mittel");
var buttonschwer = document.getElementById("schwer");
var l = document.getElementById("l");
var m = document.getElementById("m");
var s = document.getElementById("s");
var rund = document.getElementById("rund");
var stand = ["1", "2", "3", "4", "5"];
var index = 0;
// Zuordnung der Variablen
leicht = document.querySelector("#leicht");
mittel = document.querySelector("#mittel");
schwer = document.querySelector("#schwer");
hilfe = document.querySelector("#hilfe");
computer = document.querySelector("#computer");
mensch = document.querySelector("#mensch2");
// Hilfebutton (Text ein und ausblenden), Bei Klick auf Button wird Erklär-text angezeigt, bei erneutem klicken, text ausgeblendet
hilfe.addEventListener("click", erklaerung);
function erklaerung() {
    if (erklaeren.getAttribute("class") == "ausblenden") {
        erklaeren.setAttribute("class", "");
    }
    else {
        erklaeren.setAttribute("class", "ausblenden");
    }
}
// Modus: Mensch gegen Mensch/ Mensch gegen Computer auswählen
mensch.addEventListener("click", switchPic);
function switchPic() {
    if (computer.getAttribute("class") == "active") {
        computer.setAttribute("class", "");
    }
}
// Auswahl der Schwierigkeit Leiches Spiel
leicht.addEventListener("click", playleicht);
function playleicht() {
    // Bei Auswahl des Buttons verschwindet dieser + die beiden anderen (und passendes Spielfeld erschein, durch Ts später)
    if (buttonleicht.getAttribute("class") == "active" && l.getAttribute("class") == "active") {
        buttonleicht.setAttribute("class", "");
        buttonmittel.setAttribute("class", "");
        buttonschwer.setAttribute("class", "");
        l.setAttribute("class", "");
        m.setAttribute("class", "");
        s.setAttribute("class", "");
    }
    else {
        buttonleicht.setAttribute("class", "active");
        buttonmittel.setAttribute("class", "active");
        buttonschwer.setAttribute("class", "active");
        l.setAttribute("class", "active");
        m.setAttribute("class", "active");
        s.setAttribute("class", "active");
    }
    // Bei aktivieren des Spieles wird automatisch die Erklärung ausgeblendet
    if (buttonleicht.getAttribute("class") == "active") {
        erklaeren.setAttribute("class", "ausblenden");
    }
    // Aktuelle Runde wird angezeit (Links, oben im Eck)
    if (buttonleicht.getAttribute("class") == "active") {
        rund.setAttribute("class", "");
        document.querySelector("#rund").innerHTML = stand[0];
    }
    // Wenn Schwierigkeit ausgewählt, kann der Spielmodus (Mensch vs. Mensch bzw. Mensch vs. Computer) nicht mehr ausgewählt werden
    if (buttonleicht.getAttribute("class") == "active" && computer.getAttribute("class") == "active") {
        computer.parentNode.removeChild(computer);
        mensch.setAttribute("class", "active");
    }
}
// Grundlegendes Spielfeld 3x3 wird erzeugt durch alle Zuweisungen in Klasse Spiel 
var Spiel = /** @class */ (function () {
    function Spiel() {
        var _this = this;
        // Element wird erstellt und eine classe und ein Datenset wird angewendet 
        // tslint:disable-next-line: no-any Auskomentiert, da Array jede Eigenschaft annehmen muss 
        this.createElement = function (tag, className, dataset) {
            var element = document.createElement(tag);
            if (className)
                element.classList.add(className);
            if (dataset)
                element.dataset[dataset[0]] = dataset[1];
            return element;
        };
        // Abfragen aus DOM - Spiel erscheint und kann von Anfang bis Ende gespielt werden
        this.getElement = function (selector) { return document.querySelector(selector); };
        this.getAllElements = function (selector) { return document.querySelectorAll(selector); };
        // Das Spielfeld wird angezeigt und auf der Seite plaziert (html), das Spielfeld besteht aus einem Array im Array
        this.getSpielfeld = function (boardData) {
            var game = _this.getElement("#game");
            var spielBoard = _this.createElement("div", "board", undefined);
            game.append(spielBoard);
            boardData.forEach(function (reihe, i) {
                var randzelle = _this.createElement("div", "reihe", ["reihe", i]);
                spielBoard.append(randzelle);
                reihe.forEach(function (feld, j) {
                    var boeardFeld = _this.createElement("div", "feld", ["feld", j]);
                    randzelle.append(boeardFeld);
                });
            });
        };
        //Das Spielfeld wird aktualisiert sobald der aktuelle Spieler sein Zeichen setzt
        this.updateSpielfeld = function (reihe, feld, aktuellerSpieler) {
            var spieler = _this.createElement("span", aktuellerSpieler, undefined);
            spieler.textContent = aktuellerSpieler;
            var randzelle = _this.getElement("[data-reihe=\"" + reihe + "\"]");
            var zelle = randzelle.querySelector("[data-feld=\"" + feld + "\"]");
            zelle.append(spieler);
        };
        //Bei Neustart des Spieles (als nach jeder Runde), werden die Felder geleert 
        this.neustart = function () {
            var einzelnefleder = _this.getAllElements(".feld");
            einzelnefleder.forEach(function (zelle) {
                zelle.textContent = "";
            });
        };
        // Punktestand wird erstellt und über dem Spielfeld platziert, Zuweisung welcher Spieler (O und X im Namen), welche Punkte bekommt
        this.punktestand = function (punkte) {
            var game = _this.getElement("#game");
            var punkteText = _this.createElement("div", "score");
            game.append(punkteText);
            var spielerXstand = _this.createElement("div", "x");
            spielerXstand.textContent = "Player X: " + punkte.x;
            spielerXstand.id = "score-x";
            var playerOstand = _this.createElement("div", "o");
            playerOstand.textContent = "Player O: " + punkte.o;
            playerOstand.id = "score-o";
            punkteText.append(spielerXstand, playerOstand);
        };
        //Gemachter Punt wird zum Punktestand hinzugefügt. Wenn der akteulle Spieler einen Punkt holt wird er zu seinem Punktestand gezählt
        this.addPunkte = function (aktuellerPunktestand, aktuellerSpieler) {
            var aktuellerSpielerScore = _this.getElement("#score-" + aktuellerSpieler);
            var player = aktuellerSpieler === "x" ? "Player X" : "Player O";
            var d = aktuellerPunktestand[aktuellerSpieler];
            aktuellerSpielerScore.textContent = player + ": " + d;
        };
        // Nachricht erscheinen - Wer hat die Runde geholt oder ist es unentschieden? Passender Spieler wird herausgesucht
        this.nachricht = function (gewinner) {
            var info = _this.createElement("div", "info");
            var player = gewinner === "x" ? "Player X" : "Player O";
            info.textContent = gewinner ? player + " hohlt Runde!" : "Kein Punkt diese Runde!";
            var game = _this.getElement("#game");
            game.append(info);
        };
        // Nachricht wider ausblenden, bei neuer Spielrunde 
        this.clearNachricht = function () {
            var info = _this.getElement(".info");
            info.remove();
        };
        // Rundenstand wird erstellt und über dem Spielfeld platziert, Hier werden die gespielten von den gesammten Spielständen gezählt
        this.rundenstand = function (tttrunde) {
            var game = _this.getElement("#game");
            var rundenText = _this.createElement("div", "tttrunde");
            game.append(rundenText);
            var rundenTextgespRunde = _this.createElement("div", "gespRunde");
            rundenTextgespRunde.textContent = "Es gibt ";
            rundenTextgespRunde.id = "tttrunde-gespRunde";
            var rundenTextgesRunden = _this.createElement("div", "gesRunden");
            rundenTextgesRunden.textContent = tttrunde.gesRunden + " Runden";
            rundenTextgesRunden.id = "tttrunde-gesRunden";
            rundenText.append(rundenTextgespRunde, rundenTextgesRunden);
        };
        // Gewinnernachricht wird erstellt bzw. Spieler ermittelt und Nachricht erstellt 
        this.gewinnerNachricht = function (gewinner) {
            var gewinnertext = _this.createElement("div", "gewinnertext");
            gewinnertext.textContent = "Das Spiel ist zu Ende! F\u00FCr neues Spiel: klicke Neustart :)";
            var game = _this.getElement("#game");
            game.append(gewinnertext);
        };
    }
    //Durch klicken wir Spielfeld erzeugt und der Inhalt an Feld "gebunden"
    Spiel.prototype.klick = function (ausgelösterklick) {
        // Spielfeld
        document.addEventListener("click", function (event) {
            var geklickt = event.target;
            var aufbau = geklickt.className === "feld";
            // Inhalt
            if (aufbau) {
                var zelle = geklickt;
                var reihe = +zelle.parentElement.dataset.reihe;
                var feld = +zelle.dataset.feld;
                ausgelösterklick(reihe, feld);
            }
        });
    };
    return Spiel;
}());
// Leichtes Spiel spielen
/* Klasse für Spiel 3x3 -> welches nach Abruf der Funktion ausgeführt wird (Spielboard, Spieler und Spielstand aus Interface),
Spielboard erhält die oben definierte Klasse Spiel*/
var TiTaTo3x3 = /** @class */ (function () {
    // Zuweisungen/ Inhalt für Klasse TiTaTo3x3
    function TiTaTo3x3(gesSpielfeld) {
        var _this = this;
        // Spielfeld 3x3 erstellen / Array mit freien Feldern (String), in diese später X und O gesetzt werden
        this.erstelleSpielfeld = function () { return [["", "", ""], ["", "", ""], ["", "", ""]]; };
        // Regeln, wann Spieler gewinnen kann, Für jeden Spieler (o und X) definiert
        this.gewonnen = function (reihe, feld) {
            if (
            // Horizontal gewinnen
            (_this.board[reihe][0] === _this.aktuellerSpieler &&
                _this.board[reihe][1] === _this.aktuellerSpieler &&
                _this.board[reihe][2] === _this.aktuellerSpieler) ||
                // Vertical gewinnen
                (_this.board[0][feld] === _this.aktuellerSpieler &&
                    _this.board[1][feld] === _this.aktuellerSpieler &&
                    _this.board[2][feld] === _this.aktuellerSpieler) ||
                // Diagonal gewinnen
                ((_this.board[0][0] === _this.aktuellerSpieler &&
                    _this.board[1][1] === _this.aktuellerSpieler &&
                    _this.board[2][2] === _this.aktuellerSpieler) ||
                    (_this.board[2][0] === _this.aktuellerSpieler &&
                        _this.board[1][1] === _this.aktuellerSpieler &&
                        _this.board[0][2] === _this.aktuellerSpieler)))
                return true;
            return false;
        };
        // Klick in ein Spielfeld: Wenn Spielzug möglich, kann aktueller Spieler Stein setzen 
        this.klick = function (reihe, feld) {
            var spielzugMoeglich = _this.board[reihe][feld] === "";
            if (spielzugMoeglich && !_this.verzug) {
                _this.board[reihe][feld] = _this.aktuellerSpieler;
                _this.gesSpielfeld.updateSpielfeld(reihe, feld, _this.aktuellerSpieler);
                // Festlegung was passiert, bei win und unentschieden
                var win = _this.gewonnen(reihe, feld);
                var unentschieden = _this.board
                    .map(function (reihe) { return reihe.filter(function (feld) { return feld === ""; }); })
                    .filter(function (reihe) { return reihe.length > 0; });
                if (!_this.verzug) {
                    if (win) {
                        _this.neuerScore();
                        _this.gesSpielfeld.addPunkte(_this.score, _this.aktuellerSpieler);
                        _this.spielEnde(_this.aktuellerSpieler);
                    }
                    else if (unentschieden.length < 1) {
                        _this.spielEnde();
                    }
                    else {
                        _this.tauschePlayer();
                    }
                }
            }
        };
        // // Bei Computer gegen Mensch wird dieser Teil ausgeführt VERSUCH
        // if (spielzugMoeglich && !this.verzug && computer.getAttribute("class") == "active") {
        //     this.board[reihe][feld] = this.aktuellerSpieler;
        //     this.gesSpielfeld.updateSpielfeld(reihe, feld, this.aktuellerSpieler);
        //     // Festlegung was passiert, bei win und unentschieden
        //     const win: boolean = this.gewonnen(reihe, feld);
        //     const unentschieden: string[][] = this.board
        //         .map(reihe => reihe.filter(feld => feld === ""))
        //         .filter(reihe => reihe.length > 0);
        //     if (!this.verzug) {
        //         if (win) {
        //             this.neuerScore();
        //             this.gesSpielfeld.addPunkte(this.score, this.aktuellerSpieler);
        //             this.spielEnde(this.aktuellerSpieler);
        //         } else if (unentschieden.length < 1) {
        //             this.spielEnde();
        //         } else {
        //             this.tauschePlayer();
        //         }
        //     }
        // }
        // Die Punktzahl des Gewinners werden in seinen Score eingetragen +1, Runden werden in Rundenanzeige ahtualisiert +1
        this.neuerScore = function () {
            _this.score[_this.aktuellerSpieler] += 1;
        };
        //Anzeigentafel wird erhöht, sodass Computer weiß, welche Runde es ist -> Wann ist Spielende
        this.neuerZeahler = function () {
            _this.tttrunde.gespRunde += 1;
            // Konsole für den Überblick
            if (_this.tttrunde.gespRunde <= 3) {
                console.log(_this.tttrunde.gespRunde);
            }
        };
        // Verzug der löschung nach Spielende, damit Nachricht gelesen werden kann 
        this.spielEnde = function (gewinner) {
            _this.verzug = true;
            _this.gesSpielfeld.nachricht(gewinner);
            if (_this.tttrunde.gespRunde == 3) {
                _this.gesSpielfeld.gewinnerNachricht(gewinner);
            }
            setTimeout(function () {
                _this.neustartSpielfeld();
                _this.verzug = false;
                // tslint:disable-next-line: align -> Formatierung verschiebt sich jedes mal, daher Auskommentiert
            }, _this.verzugzeit);
        };
        //Spieler nach jedem Zug tauschen
        this.tauschePlayer = function () {
            _this.aktuellerSpieler = _this.aktuellerSpieler === _this.spieler.x ? _this.spieler.o : _this.spieler.x;
        };
        // VERSUCH Computerzug
        // zugComputer = (): void => {
        //         // this.spieler.x =
        //         index = Math.floor(Math.random() * 9);
        //         console.log(index);
        //     }
        // Neustart nach Gewonnen, Verlohren oder Unentschieden, Nachricht wird gelöscht, Neustart Spiel
        this.neustartSpielfeld = function () {
            if (_this.tttrunde.gespRunde <= 2) {
                _this.gesSpielfeld.clearNachricht();
                _this.gesSpielfeld.neustart();
                _this.board = _this.erstelleSpielfeld();
                _this.neuerZeahler();
            }
            // Zählerstand wird erhöht (Links oben - Halbkreis)
            if (_this.tttrunde.gespRunde == 2) {
                document.querySelector("#rund").innerHTML = stand[1];
            }
            else if (_this.tttrunde.gespRunde == 3) {
                document.querySelector("#rund").innerHTML = stand[2];
            }
        };
        this.gesSpielfeld = gesSpielfeld;
        this.board = this.erstelleSpielfeld();
        this.spieler = { x: "x", o: "o" };
        this.score = { x: 0, o: 0 };
        this.tttrunde = { gespRunde: 1, gesRunden: 3 };
        this.aktuellerSpieler = this.spieler.x;
        this.gesSpielfeld.klick(this.klick);
        this.verzugzeit = 1000;
        this.verzug = false;
    }
    // Spielfeld und Punktestand positionieren
    TiTaTo3x3.prototype.startSpiel = function () {
        this.gesSpielfeld.punktestand(this.score);
        this.gesSpielfeld.getSpielfeld(this.board);
        this.gesSpielfeld.rundenstand(this.tttrunde);
    };
    return TiTaTo3x3;
}());
/* Spiel beginnen 3x3 (Funktion hinter Klasse, da diese erst deklariert werden muss bevor Nutzung),
Spielfeld angezeigt bzw. Spielbeginn erst nachdem Schwierigkeits-Button aktiviert. */
var ticTacToe = new TiTaTo3x3(new Spiel());
leicht.addEventListener("click", start3x3);
function start3x3() {
    // Nur wenn der Button aktiv ist, wird das (classe) TicTacToe-Spiel gestartet
    if (buttonleicht.getAttribute("class") == "active" && erklaeren.getAttribute("class") == "ausblenden") {
        ticTacToe.startSpiel();
    }
}
//# sourceMappingURL=TicTacToe-script.js.map