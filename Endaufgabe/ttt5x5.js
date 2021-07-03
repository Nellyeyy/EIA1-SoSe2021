// Auswahl der Schwierigkeit Schweres Spiel
schwer.addEventListener("click", playschwer);
function playschwer() {
    // Bei Auswahl des Buttons verschwindet dieser + die beiden anderen (und passendes Spielfeld erschein, durch Ts später)
    if (buttonschwer.getAttribute("class") == "active" && s.getAttribute("class") == "active") {
        buttonschwer.setAttribute("class", "");
        buttonleicht.setAttribute("class", "");
        buttonmittel.setAttribute("class", "");
        s.setAttribute("class", "");
        l.setAttribute("class", "");
        m.setAttribute("class", "");
    }
    else {
        buttonschwer.setAttribute("class", "active");
        buttonleicht.setAttribute("class", "active");
        buttonmittel.setAttribute("class", "active");
        s.setAttribute("class", "active");
        l.setAttribute("class", "active");
        m.setAttribute("class", "active");
    }
    // Bei aktivieren des Spieles wird automatisch die Erklärung ausgeblendet
    if (buttonschwer.getAttribute("class") == "active") {
        erklaeren.setAttribute("class", "ausblenden");
    }
    // Aktuelle Runde wird angezeit (Links, oben im Eck)
    if (buttonschwer.getAttribute("class") == "active") {
        rund.setAttribute("class", "");
        document.querySelector("#rund").innerHTML = stand[0];
    }
    // Wenn Schwierigkeit ausgewählt, kann der Spielmodus (Mensch vs. Mensch bzw. Mensch vs. Computer) nicht mehr ausgewählt werden
    if (buttonschwer.getAttribute("class") == "active" && computer.getAttribute("class") == "active") {
        computer.parentNode.removeChild(computer);
        mensch.setAttribute("class", "active");
    }
}
// Grundlegendes Spielfeld wird erzeugt durch alle Zuweisungen in Klasse Spiel 
var Spiel5x5 = /** @class */ (function () {
    function Spiel5x5() {
        var _this = this;
        // Element wird erstellt und eine classe und ein Datenset wird angewendet 
        // tslint:disable-next-line: no-any Auskomentiert, da Array jede Eigenschaft annehmen muss 
        this.createElement5x5 = function (tag5x5, className, dataset) {
            var element = document.createElement(tag5x5);
            if (className)
                element.classList.add(className);
            if (dataset)
                element.dataset[dataset[0]] = dataset[1];
            return element;
        };
        // Abfragen aus DOM - Spiel erscheint und kann von Anfang bis Ende gespielt werden
        this.getElement5x5 = function (selector) { return document.querySelector(selector); };
        this.getAllElements5x5 = function (selector) { return document.querySelectorAll(selector); };
        // Das Spielfeld wird angezeigt und auf der Seite plaziert (html), das Spielfeld besteht aus einem Array im Array
        this.getSpielfeld5x5 = function (boardData5x5) {
            var game = _this.getElement5x5("#game");
            var spielBoard = _this.createElement5x5("div", "board", undefined);
            game.append(spielBoard);
            boardData5x5.forEach(function (reihe5x5, i) {
                var randzelle = _this.createElement5x5("div", "reihe5x5", ["reihe5x5", i]);
                spielBoard.append(randzelle);
                reihe5x5.forEach(function (feld5x5, j) {
                    var boeardFeld5x5 = _this.createElement5x5("div", "feld5x5", ["feld5x5", j]);
                    randzelle.append(boeardFeld5x5);
                });
            });
        };
        //Das Spielfeld wird aktualisiert sobald der aktuelle Spieler sein Zeichen setzt
        this.updateSpielfeld5x5 = function (reihe5x5, feld5x5, aktuellerSpieler5x5) {
            var spieler = _this.createElement5x5("span", aktuellerSpieler5x5, undefined);
            spieler.textContent = aktuellerSpieler5x5;
            var randzelle = _this.getElement5x5("[data-reihe5x5=\"" + reihe5x5 + "\"]");
            var zelle = randzelle.querySelector("[data-feld5x5=\"" + feld5x5 + "\"]");
            zelle.append(spieler);
        };
        //Bei Neustart des Spieles (als nach jeder Runde), werden die Felder geleert 
        this.neustart5x5 = function () {
            var einzelnefleder = _this.getAllElements5x5(".feld5x5");
            einzelnefleder.forEach(function (zelle) {
                zelle.textContent = "";
            });
        };
        // Punktestand wird erstellt und über dem Spielfeld platziert, Zuweisung welcher Spieler (O und X im Namen), welche Punkte bekommt
        this.punktestand5x5 = function (punkte5x5) {
            var game = _this.getElement5x5("#game");
            var punkteText = _this.createElement5x5("div", "score5x5");
            game.append(punkteText);
            var spielerXstand = _this.createElement5x5("div", "x");
            spielerXstand.textContent = "Player X: " + punkte5x5.x;
            spielerXstand.id = "score5x5-x";
            var playerOstand = _this.createElement5x5("div", "o");
            playerOstand.textContent = "Player O: " + punkte5x5.o;
            playerOstand.id = "score5x5-o";
            punkteText.append(spielerXstand, playerOstand);
        };
        //Gemachter Punt wird zum Punktestand hinzugefügt. Wenn der akteulle Spieler einen Punkt holt wird er zu seinem Punktestand gezählt
        this.addPunkte5x5 = function (aktuellerPunktestand5x5, aktuellerSpieler5x5) {
            var aktuellerSpieler5x5Score = _this.getElement5x5("#score5x5-" + aktuellerSpieler5x5);
            var player = aktuellerSpieler5x5 === "x" ? "Player X" : "Player O";
            var d = aktuellerPunktestand5x5[aktuellerSpieler5x5];
            aktuellerSpieler5x5Score.textContent = player + ": " + d;
        };
        // Nachricht erscheinen - Wer hat die Runde geholt oder ist es unentschieden? Passender Spieler wird herausgesucht
        this.nachricht5x5 = function (gewinner5x5) {
            var info5x5 = _this.createElement5x5("div", "info5x5");
            var player = gewinner5x5 === "x" ? "Player X" : "Player O";
            info5x5.textContent = gewinner5x5 ? player + " hohlt Runde!" : "Kein Punkt diese Runde!";
            var game = _this.getElement5x5("#game");
            game.append(info5x5);
        };
        // Nachricht wider ausblenden, bei neuer Spielrunde 
        this.clearNachricht5x5 = function () {
            var info5x5 = _this.getElement5x5(".info5x5");
            info5x5.remove();
        };
        // Rundenstand wird erstellt und über dem Spielfeld platziert, Hier werden die gespielten von den gesammten Spielständen gezählt
        this.rundenstand5x5 = function (tttrunde5x5) {
            var game = _this.getElement5x5("#game");
            var rundenText = _this.createElement5x5("div", "tttrunde5x5");
            game.append(rundenText);
            var rundenTextgespRunde5x5 = _this.createElement5x5("div", "gespRunde5x5");
            rundenTextgespRunde5x5.textContent = "Es gibt ";
            rundenTextgespRunde5x5.id = "tttrunde5x5-gespRunde5x5";
            var rundenTextgesRunden = _this.createElement5x5("div", "gesRunden");
            rundenTextgesRunden.textContent = tttrunde5x5.gesRunden5x5 + " Runden";
            rundenTextgesRunden.id = "tttrunde5x5-gesRunden";
            rundenText.append(rundenTextgespRunde5x5, rundenTextgesRunden);
        };
        // Gewinnernachricht wird erstellt bzw. Spieler ermittelt und Nachricht erstellt 
        this.gewinnerNachricht5x5 = function (gewinner5x5) {
            var gewinnertext5x5 = _this.createElement5x5("div", "gewinnertext5x5");
            gewinnertext5x5.textContent = "Das Spiel ist zu Ende! F\u00FCr neues Spiel: klicke Neustart :)";
            var game = _this.getElement5x5("#game");
            game.append(gewinnertext5x5);
        };
    }
    //Durch klicken wir Spielfeld erzeugt und der Inhalt an Feld "gebunden"
    Spiel5x5.prototype.klick5x5 = function (ausgelösterklick) {
        // Spielfeld5x5
        document.addEventListener("click", function (event) {
            var geklickt = event.target;
            var aufbau = geklickt.className === "feld5x5";
            // Inhalt
            if (aufbau) {
                var zelle = geklickt;
                var reihe5x5 = +zelle.parentElement.dataset.reihe5x5;
                var feld5x5 = +zelle.dataset.feld5x5;
                ausgelösterklick(reihe5x5, feld5x5);
            }
        });
    };
    return Spiel5x5;
}());
// Mittleres Spiel spielen
/* Klasse für Spiel 5x5 -> welches nach Abruf der Funktion ausgeführt wird (Spielboard, Spieler und Spielstand aus Interface),
Spielboard erhält die oben definierte Klasse Spiel*/
var TiTaTo5x5 = /** @class */ (function () {
    // Zuweisungen/ Inhalt für Klasse TiTaTo5x5
    function TiTaTo5x5(gesSpielfeld5x5) {
        var _this = this;
        // Spielfeld 5x5 erstellen / Array mit freien Feldern (String), in diese später X und O gesetzt werden
        this.erstelleSpielfeld5x5 = function () { return [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]; };
        // Regeln, wann Spieler gewinnen kann, Für jeden Spieler (o und X) definiert
        this.gewonnen5x5 = function (reihe5x5, feld5x5) {
            if (
            // Horizontal gewinnen
            (_this.board5x5[reihe5x5][0] === _this.aktuellerSpieler5x5 &&
                _this.board5x5[reihe5x5][1] === _this.aktuellerSpieler5x5 &&
                _this.board5x5[reihe5x5][2] === _this.aktuellerSpieler5x5 &&
                _this.board5x5[reihe5x5][3] === _this.aktuellerSpieler5x5 &&
                _this.board5x5[reihe5x5][4] === _this.aktuellerSpieler5x5) ||
                // Vertical gewinnen
                (_this.board5x5[0][feld5x5] === _this.aktuellerSpieler5x5 &&
                    _this.board5x5[1][feld5x5] === _this.aktuellerSpieler5x5 &&
                    _this.board5x5[2][feld5x5] === _this.aktuellerSpieler5x5 &&
                    _this.board5x5[3][feld5x5] === _this.aktuellerSpieler5x5 &&
                    _this.board5x5[4][feld5x5] === _this.aktuellerSpieler5x5) ||
                // Diagonal gewinnen
                ((_this.board5x5[0][0] === _this.aktuellerSpieler5x5 &&
                    _this.board5x5[1][1] === _this.aktuellerSpieler5x5 &&
                    _this.board5x5[2][2] === _this.aktuellerSpieler5x5 &&
                    _this.board5x5[3][3] === _this.aktuellerSpieler5x5 &&
                    _this.board5x5[4][4] === _this.aktuellerSpieler5x5) ||
                    (_this.board5x5[4][0] === _this.aktuellerSpieler5x5 &&
                        _this.board5x5[3][1] === _this.aktuellerSpieler5x5 &&
                        _this.board5x5[2][2] === _this.aktuellerSpieler5x5 &&
                        _this.board5x5[1][3] === _this.aktuellerSpieler5x5 &&
                        _this.board5x5[0][4] === _this.aktuellerSpieler5x5)))
                return true;
            return false;
        };
        // Klick in ein Spielfeld: Wenn Spielzug möglich, kann aktueller Spieler Stein setzen 
        this.klick5x5 = function (reihe5x5, feld5x5) {
            var spielzugMoeglich = _this.board5x5[reihe5x5][feld5x5] === "";
            if (spielzugMoeglich && !_this.verzug) {
                _this.board5x5[reihe5x5][feld5x5] = _this.aktuellerSpieler5x5;
                _this.gesSpielfeld5x5.updateSpielfeld5x5(reihe5x5, feld5x5, _this.aktuellerSpieler5x5);
                // Festlegung was passiert, bei win und unentschieden
                var win = _this.gewonnen5x5(reihe5x5, feld5x5);
                var unentschieden = _this.board5x5
                    .map(function (reihe5x5) { return reihe5x5.filter(function (feld5x5) { return feld5x5 === ""; }); })
                    .filter(function (reihe5x5) { return reihe5x5.length > 0; });
                if (!_this.verzug) {
                    if (win) {
                        _this.neuerScore5x5();
                        _this.gesSpielfeld5x5.addPunkte5x5(_this.score5x5, _this.aktuellerSpieler5x5);
                        _this.spielEnde5x5(_this.aktuellerSpieler5x5);
                    }
                    else if (unentschieden.length < 1) {
                        _this.spielEnde5x5();
                    }
                    else {
                        _this.tauschePlayer5x5();
                    }
                }
            }
        };
        // Die Punktzahl des Gewinners werden in seinen Score eingetragen +1, Runden werden in Rundenanzeige ahtualisiert +1
        this.neuerScore5x5 = function () {
            _this.score5x5[_this.aktuellerSpieler5x5] += 1;
        };
        //Anzeigentafel wird erhöht, sodass Computer weiß, welche Runde es ist -> Wann ist Spielende
        this.neuerZeahler5x5 = function () {
            _this.tttrunde5x5.gespRunde5x5 += 1;
            // Konsole für den Überblick
            if (_this.tttrunde5x5.gespRunde5x5 <= 5) {
                console.log(_this.tttrunde5x5.gespRunde5x5);
            }
        };
        // Verzug der löschung nach Spielende, damit Nachricht gelesen werden kann 
        this.spielEnde5x5 = function (gewinner5x5) {
            _this.verzug = true;
            _this.gesSpielfeld5x5.nachricht5x5(gewinner5x5);
            if (_this.tttrunde5x5.gespRunde5x5 == 5) {
                _this.gesSpielfeld5x5.gewinnerNachricht5x5(gewinner5x5);
            }
            setTimeout(function () {
                _this.neustartSpielfeld5x5();
                _this.verzug = false;
                // tslint:disable-next-line: align -> Formatierung verschiebt sich jedes mal, daher Auskommentiert
            }, _this.verzugzeit);
        };
        //Spieler nach jedem Zug tauschen
        this.tauschePlayer5x5 = function () {
            _this.aktuellerSpieler5x5 = _this.aktuellerSpieler5x5 === _this.spieler5x5.x ? _this.spieler5x5.o : _this.spieler5x5.x;
        };
        // Neustart nach Gewonnen, Verlohren oder Unentschieden, Nachricht wird gelöscht, Neustart Spiel
        this.neustartSpielfeld5x5 = function () {
            if (_this.tttrunde5x5.gespRunde5x5 <= 4) {
                _this.gesSpielfeld5x5.clearNachricht5x5();
                _this.gesSpielfeld5x5.neustart5x5();
                _this.board5x5 = _this.erstelleSpielfeld5x5();
                _this.neuerZeahler5x5();
            }
            // Zählerstand wird erhöht (Links oben - Halbkreis)
            if (_this.tttrunde5x5.gespRunde5x5 == 2) {
                document.querySelector("#rund").innerHTML = stand[1];
            }
            else if (_this.tttrunde5x5.gespRunde5x5 == 3) {
                document.querySelector("#rund").innerHTML = stand[2];
            }
            else if (_this.tttrunde5x5.gespRunde5x5 == 4) {
                document.querySelector("#rund").innerHTML = stand[3];
            }
            else if (_this.tttrunde5x5.gespRunde5x5 == 5) {
                document.querySelector("#rund").innerHTML = stand[4];
            }
        };
        this.gesSpielfeld5x5 = gesSpielfeld5x5;
        this.board5x5 = this.erstelleSpielfeld5x5();
        this.spieler5x5 = { x: "x", o: "o" };
        this.score5x5 = { x: 0, o: 0 };
        this.tttrunde5x5 = { gespRunde5x5: 1, gesRunden5x5: 5 };
        this.aktuellerSpieler5x5 = this.spieler5x5.x;
        this.gesSpielfeld5x5.klick5x5(this.klick5x5);
        this.verzugzeit = 1000;
        this.verzug = false;
    }
    // Spielfeld und Punktestand positionieren
    TiTaTo5x5.prototype.startSpiel5x5 = function () {
        this.gesSpielfeld5x5.punktestand5x5(this.score5x5);
        this.gesSpielfeld5x5.getSpielfeld5x5(this.board5x5);
        this.gesSpielfeld5x5.rundenstand5x5(this.tttrunde5x5);
    };
    return TiTaTo5x5;
}());
/* Spiel beginnen 5x5 (Funktion hinter Klasse, da diese erst deklariert werden muss bevor Nutzung),
Spielfeld angezeigt bzw. Spielbeginn erst nachdem Schwierigkeits-Button aktiviert. */
var ticTacToe5 = new TiTaTo5x5(new Spiel5x5());
schwer.addEventListener("click", start5x5);
function start5x5() {
    // Nur wenn der Button aktiv ist, wird das (classe) TicTacToe-Spiel gestartet
    if (buttonschwer.getAttribute("class") == "active" && erklaeren.getAttribute("class") == "ausblenden") {
        ticTacToe5.startSpiel5x5();
    }
}
//# sourceMappingURL=ttt5x5.js.map