// Auswahl der Schwierigkeit Mittleres Spiel
mittel.addEventListener("click", playmittel);
function playmittel() {
    // Bei Auswahl des Buttons verschwindet dieser + die beiden anderen (und passendes Spielfeld erschein, durch Ts später)
    if (buttonmittel.getAttribute("class") == "active" && m.getAttribute("class") == "active") {
        buttonmittel.setAttribute("class", "");
        buttonleicht.setAttribute("class", "");
        buttonschwer.setAttribute("class", "");
        m.setAttribute("class", "");
        l.setAttribute("class", "");
        s.setAttribute("class", "");
    }
    else {
        buttonmittel.setAttribute("class", "active");
        buttonleicht.setAttribute("class", "active");
        buttonschwer.setAttribute("class", "active");
        m.setAttribute("class", "active");
        l.setAttribute("class", "active");
        s.setAttribute("class", "active");
    }
    // Bei aktivieren des Spieles wird automatisch die Erklärung ausgeblendet
    if (buttonmittel.getAttribute("class") == "active") {
        erklaeren.setAttribute("class", "ausblenden");
    }
    // Aktuelle Runde wird angezeit (Links, oben im Eck)
    if (buttonmittel.getAttribute("class") == "active") {
        rund.setAttribute("class", "");
        document.querySelector("#rund").innerHTML = stand[0];
    }
    // Wenn Schwierigkeit ausgewählt, kann der Spielmodus (Mensch vs. Mensch bzw. Mensch vs. Computer) nicht mehr ausgewählt werden
    if (buttonmittel.getAttribute("class") == "active" && computer.getAttribute("class") == "active") {
        computer.parentNode.removeChild(computer);
        mensch.setAttribute("class", "active");
    }
}
// Grundlegendes Spielfeld wird erzeugt durch alle Zuweisungen in Klasse Spiel 
var Spiel4x4 = /** @class */ (function () {
    function Spiel4x4() {
        var _this = this;
        // Element wird erstellt und eine classe und ein Datenset wird angewendet 
        // tslint:disable-next-line: no-any Auskomentiert, da Array jede Eigenschaft annehmen muss 
        this.createElement4x4 = function (tag4x4, className, dataset) {
            var element = document.createElement(tag4x4);
            if (className)
                element.classList.add(className);
            if (dataset)
                element.dataset[dataset[0]] = dataset[1];
            return element;
        };
        // Abfragen aus DOM - Spiel erscheint und kann von Anfang bis Ende gespielt werden
        this.getElement4x4 = function (selector) { return document.querySelector(selector); };
        this.getAllElements4x4 = function (selector) { return document.querySelectorAll(selector); };
        // Das Spielfeld wird angezeigt und auf der Seite plaziert (html), das Spielfeld besteht aus einem Array im Array
        this.getSpielfeld4x4 = function (boardData4x4) {
            var game = _this.getElement4x4("#game");
            var spielBoard = _this.createElement4x4("div", "board", undefined);
            game.append(spielBoard);
            boardData4x4.forEach(function (reihe4x4, i) {
                var randzelle = _this.createElement4x4("div", "reihe4x4", ["reihe4x4", i]);
                spielBoard.append(randzelle);
                reihe4x4.forEach(function (feld4x4, j) {
                    var boeardFeld4x4 = _this.createElement4x4("div", "feld4x4", ["feld4x4", j]);
                    randzelle.append(boeardFeld4x4);
                });
            });
        };
        //Das Spielfeld wird aktualisiert sobald der aktuelle Spieler sein Zeichen setzt
        this.updateSpielfeld4x4 = function (reihe4x4, feld4x4, aktuellerSpieler4x4) {
            var spieler = _this.createElement4x4("span", aktuellerSpieler4x4, undefined);
            spieler.textContent = aktuellerSpieler4x4;
            var randzelle = _this.getElement4x4("[data-reihe4x4=\"" + reihe4x4 + "\"]");
            var zelle = randzelle.querySelector("[data-feld4x4=\"" + feld4x4 + "\"]");
            zelle.append(spieler);
        };
        //Bei Neustart des Spieles (als nach jeder Runde), werden die Felder geleert 
        this.neustart4x4 = function () {
            var einzelnefleder = _this.getAllElements4x4(".feld4x4");
            einzelnefleder.forEach(function (zelle) {
                zelle.textContent = "";
            });
        };
        // Punktestand wird erstellt und über dem Spielfeld platziert, Zuweisung welcher Spieler (O und X im Namen), welche Punkte bekommt
        this.punktestand4x4 = function (punkte4x4) {
            var game = _this.getElement4x4("#game");
            var punkteText = _this.createElement4x4("div", "score4x4");
            game.append(punkteText);
            var spielerXstand = _this.createElement4x4("div", "x");
            spielerXstand.textContent = "Player X: " + punkte4x4.x;
            spielerXstand.id = "score4x4-x";
            var playerOstand = _this.createElement4x4("div", "o");
            playerOstand.textContent = "Player O: " + punkte4x4.o;
            playerOstand.id = "score4x4-o";
            punkteText.append(spielerXstand, playerOstand);
        };
        //Gemachter Punt wird zum Punktestand hinzugefügt. Wenn der akteulle Spieler einen Punkt holt wird er zu seinem Punktestand gezählt
        this.addPunkte4x4 = function (aktuellerPunktestand4x4, aktuellerSpieler4x4) {
            var aktuellerSpieler4x4Score = _this.getElement4x4("#score4x4-" + aktuellerSpieler4x4);
            var player = aktuellerSpieler4x4 === "x" ? "Player X" : "Player O";
            var d = aktuellerPunktestand4x4[aktuellerSpieler4x4];
            aktuellerSpieler4x4Score.textContent = player + ": " + d;
        };
        // Nachricht erscheinen - Wer hat die Runde geholt oder ist es unentschieden? Passender Spieler wird herausgesucht
        this.nachricht4x4 = function (gewinner4x4) {
            var info4x4 = _this.createElement4x4("div", "info4x4");
            var player = gewinner4x4 === "x" ? "Player X" : "Player O";
            info4x4.textContent = gewinner4x4 ? player + " hohlt Runde!" : "Kein Punkt diese Runde!";
            var game = _this.getElement4x4("#game");
            game.append(info4x4);
        };
        // Nachricht wider ausblenden, bei neuer Spielrunde 
        this.clearNachricht4x4 = function () {
            var info4x4 = _this.getElement4x4(".info4x4");
            info4x4.remove();
        };
        // Rundenstand wird erstellt und über dem Spielfeld platziert, Hier werden die gespielten von den gesammten Spielständen gezählt
        this.rundenstand4x4 = function (tttrunde4x4) {
            var game = _this.getElement4x4("#game");
            var rundenText = _this.createElement4x4("div", "tttrunde4x4");
            game.append(rundenText);
            var rundenTextgespRunde4x4 = _this.createElement4x4("div", "gespRunde4x4");
            rundenTextgespRunde4x4.textContent = "Es gibt ";
            rundenTextgespRunde4x4.id = "tttrunde4x4-gespRunde4x4";
            var rundenTextgesRunden = _this.createElement4x4("div", "gesRunden");
            rundenTextgesRunden.textContent = tttrunde4x4.gesRunden4x4 + " Runden";
            rundenTextgesRunden.id = "tttrunde4x4-gesRunden";
            rundenText.append(rundenTextgespRunde4x4, rundenTextgesRunden);
        };
        // Gewinnernachricht wird erstellt bzw. Spieler ermittelt und Nachricht erstellt 
        this.gewinnerNachricht4x4 = function (gewinner4x4) {
            var gewinnertext4x4 = _this.createElement4x4("div", "gewinnertext4x4");
            gewinnertext4x4.textContent = "Das Spiel ist zu Ende! F\u00FCr neues Spiel: klicke Neustart :)";
            var game = _this.getElement4x4("#game");
            game.append(gewinnertext4x4);
        };
    }
    //Durch klicken wir Spielfeld erzeugt und der Inhalt an Feld "gebunden"
    Spiel4x4.prototype.klick4x4 = function (ausgelösterklick) {
        // Spielfeld4x4
        document.addEventListener("click", function (event) {
            var geklickt = event.target;
            var aufbau = geklickt.className === "feld4x4";
            // Inhalt
            if (aufbau) {
                var zelle = geklickt;
                var reihe4x4 = +zelle.parentElement.dataset.reihe4x4;
                var feld4x4 = +zelle.dataset.feld4x4;
                ausgelösterklick(reihe4x4, feld4x4);
            }
        });
    };
    return Spiel4x4;
}());
// Mittleres Spiel spielen
/* Klasse für Spiel 4x4 -> welches nach Abruf der Funktion ausgeführt wird (Spielboard, Spieler und Spielstand aus Interface),
Spielboard erhält die oben definierte Klasse Spiel*/
var TiTaTo4x4 = /** @class */ (function () {
    // Zuweisungen/ Inhalt für Klasse TiTaTo4x4
    function TiTaTo4x4(gesSpielfeld4x4) {
        var _this = this;
        // Spielfeld 4x4 erstellen / Array mit freien Feldern (String), in diese später X und O gesetzt werden
        this.erstelleSpielfeld4x4 = function () { return [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]]; };
        // Regeln, wann Spieler gewinnen kann, Für jeden Spieler (o und X) definiert
        this.gewonnen4x4 = function (reihe4x4, feld4x4) {
            if (
            // Horizontal gewinnen
            (_this.board4x4[reihe4x4][0] === _this.aktuellerSpieler4x4 &&
                _this.board4x4[reihe4x4][1] === _this.aktuellerSpieler4x4 &&
                _this.board4x4[reihe4x4][2] === _this.aktuellerSpieler4x4 &&
                _this.board4x4[reihe4x4][3] === _this.aktuellerSpieler4x4) ||
                // Vertical gewinnen
                (_this.board4x4[0][feld4x4] === _this.aktuellerSpieler4x4 &&
                    _this.board4x4[1][feld4x4] === _this.aktuellerSpieler4x4 &&
                    _this.board4x4[2][feld4x4] === _this.aktuellerSpieler4x4 &&
                    _this.board4x4[3][feld4x4] === _this.aktuellerSpieler4x4) ||
                // Diagonal gewinnen
                ((_this.board4x4[0][0] === _this.aktuellerSpieler4x4 &&
                    _this.board4x4[1][1] === _this.aktuellerSpieler4x4 &&
                    _this.board4x4[2][2] === _this.aktuellerSpieler4x4 &&
                    _this.board4x4[3][3] === _this.aktuellerSpieler4x4) ||
                    (_this.board4x4[3][0] === _this.aktuellerSpieler4x4 &&
                        _this.board4x4[1][2] === _this.aktuellerSpieler4x4 &&
                        _this.board4x4[2][1] === _this.aktuellerSpieler4x4 &&
                        _this.board4x4[0][3] === _this.aktuellerSpieler4x4)))
                return true;
            return false;
        };
        // Klick in ein Spielfeld: Wenn Spielzug möglich, kann aktueller Spieler Stein setzen 
        this.klick4x4 = function (reihe4x4, feld4x4) {
            var spielzugMoeglich = _this.board4x4[reihe4x4][feld4x4] === "";
            if (spielzugMoeglich && !_this.verzug) {
                _this.board4x4[reihe4x4][feld4x4] = _this.aktuellerSpieler4x4;
                _this.gesSpielfeld4x4.updateSpielfeld4x4(reihe4x4, feld4x4, _this.aktuellerSpieler4x4);
                // Festlegung was passiert, bei win und unentschieden
                var win = _this.gewonnen4x4(reihe4x4, feld4x4);
                var unentschieden = _this.board4x4
                    .map(function (reihe4x4) { return reihe4x4.filter(function (feld4x4) { return feld4x4 === ""; }); })
                    .filter(function (reihe4x4) { return reihe4x4.length > 0; });
                if (!_this.verzug) {
                    if (win) {
                        _this.neuerScore4x4();
                        _this.gesSpielfeld4x4.addPunkte4x4(_this.score4x4, _this.aktuellerSpieler4x4);
                        _this.spielEnde4x4(_this.aktuellerSpieler4x4);
                    }
                    else if (unentschieden.length < 1) {
                        _this.spielEnde4x4();
                    }
                    else {
                        _this.tauschePlayer4x4();
                    }
                }
            }
        };
        // Die Punktzahl des Gewinners werden in seinen Score eingetragen +1, Runden werden in Rundenanzeige ahtualisiert +1
        this.neuerScore4x4 = function () {
            _this.score4x4[_this.aktuellerSpieler4x4] += 1;
        };
        //Anzeigentafel wird erhöht, sodass Computer weiß, welche Runde es ist -> Wann ist Spielende
        this.neuerZeahler4x4 = function () {
            _this.tttrunde4x4.gespRunde4x4 += 1;
            // Konsole für den Überblick
            if (_this.tttrunde4x4.gespRunde4x4 <= 4) {
                console.log(_this.tttrunde4x4.gespRunde4x4);
            }
        };
        // Verzug der löschung nach Spielende, damit Nachricht gelesen werden kann 
        this.spielEnde4x4 = function (gewinner4x4) {
            _this.verzug = true;
            _this.gesSpielfeld4x4.nachricht4x4(gewinner4x4);
            if (_this.tttrunde4x4.gespRunde4x4 == 4) {
                _this.gesSpielfeld4x4.gewinnerNachricht4x4(gewinner4x4);
            }
            setTimeout(function () {
                _this.neustartSpielfeld4x4();
                _this.verzug = false;
                // tslint:disable-next-line: align -> Formatierung verschiebt sich jedes mal, daher Auskommentiert
            }, _this.verzugzeit);
        };
        //Spieler nach jedem Zug tauschen
        this.tauschePlayer4x4 = function () {
            _this.aktuellerSpieler4x4 = _this.aktuellerSpieler4x4 === _this.spieler4x4.x ? _this.spieler4x4.o : _this.spieler4x4.x;
        };
        // Neustart nach Gewonnen, Verlohren oder Unentschieden, Nachricht wird gelöscht, Neustart Spiel
        this.neustartSpielfeld4x4 = function () {
            if (_this.tttrunde4x4.gespRunde4x4 <= 3) {
                _this.gesSpielfeld4x4.clearNachricht4x4();
                _this.gesSpielfeld4x4.neustart4x4();
                _this.board4x4 = _this.erstelleSpielfeld4x4();
                _this.neuerZeahler4x4();
            }
            // Zählerstand wird erhöht (Links oben - Halbkreis)
            if (_this.tttrunde4x4.gespRunde4x4 == 2) {
                document.querySelector("#rund").innerHTML = stand[1];
            }
            else if (_this.tttrunde4x4.gespRunde4x4 == 3) {
                document.querySelector("#rund").innerHTML = stand[2];
            }
            else if (_this.tttrunde4x4.gespRunde4x4 == 4) {
                document.querySelector("#rund").innerHTML = stand[3];
            }
        };
        this.gesSpielfeld4x4 = gesSpielfeld4x4;
        this.board4x4 = this.erstelleSpielfeld4x4();
        this.spieler4x4 = { x: "x", o: "o" };
        this.score4x4 = { x: 0, o: 0 };
        this.tttrunde4x4 = { gespRunde4x4: 1, gesRunden4x4: 4 };
        this.aktuellerSpieler4x4 = this.spieler4x4.x;
        this.gesSpielfeld4x4.klick4x4(this.klick4x4);
        this.verzugzeit = 1000;
        this.verzug = false;
    }
    // Spielfeld und Punktestand positionieren
    TiTaTo4x4.prototype.startSpiel4x4 = function () {
        this.gesSpielfeld4x4.punktestand4x4(this.score4x4);
        this.gesSpielfeld4x4.getSpielfeld4x4(this.board4x4);
        this.gesSpielfeld4x4.rundenstand4x4(this.tttrunde4x4);
    };
    return TiTaTo4x4;
}());
/* Spiel beginnen 4x4 (Funktion hinter Klasse, da diese erst deklariert werden muss bevor Nutzung),
Spielfeld angezeigt bzw. Spielbeginn erst nachdem Schwierigkeits-Button aktiviert. */
var ticTacToe4 = new TiTaTo4x4(new Spiel4x4());
mittel.addEventListener("click", start4x4);
function start4x4() {
    // Nur wenn der Button aktiv ist, wird das (classe) TicTacToe-Spiel gestartet
    if (buttonmittel.getAttribute("class") == "active" && erklaeren.getAttribute("class") == "ausblenden") {
        ticTacToe4.startSpiel4x4();
    }
}
//# sourceMappingURL=ttt4x4.js.map