// Variablen
var erklaeren: HTMLElement = document.getElementById("erklaerung");

var buttonleicht: HTMLElement = document.getElementById("leicht");
var buttonmittel: HTMLElement = document.getElementById("mittel");
var buttonschwer: HTMLElement = document.getElementById("schwer");

var l: HTMLElement = document.getElementById("l");
var m: HTMLElement = document.getElementById("m");
var s: HTMLElement = document.getElementById("s");

// Interface für Spieler & Spielstand & Rundenstand & Spielfeld
// Spieler bekommt bekommt das X und O als text (string) mitgegeben (Kombination aus Spieler und Spielstand ergibt später Funktionen)
interface Spieler {
    x: string;
    o: string;
    [key: string]: string;
}
// Spielstand bekommt bekommt das X und O als Nummer mitgegeben (Kombination aus Spieler und Spielstand ergibt später Funktionen)
interface Spielstand {
    x: number;
    o: number;
    [key: string]: number;
}
// Rundenstand bekommt bekommt zwei Nummern (gesp. Runden und ges. Runden)
interface Runden {
    gespRunde: number;
    gesRunden: number;
    [key: string]: number;
}
// Spielboard bekomt alle relevanten Eigenschaften für das Spiel mit 
interface Spielboard {
    klick(ausgelösterklick: (reihe: number, feld: number) => void): void;
    // tslint:disable-next-line: no-any - Auskomentiert, da Array jede Eigenschaft annehmen muss 
    createElement(tag: string, className?: string, dataset?: Array<any>): HTMLElement;
    getElement(selector: string): HTMLElement;
    getAllElements(selector: string): NodeList;
    getSpielfeld(boardData: Array<Array<string>>): void;
    updateSpielfeld(reihe: number, feld: number, aktuellerSpieler: string): void;
    neustart(): void;
    punktestand(punkte: Spielstand): void;
    addPunkte(aktuellerPunktestand: Spielstand, aktuellerSpieler: string): void;
    nachricht(gewinner?: string): void;
    clearNachricht(): void;
    rundenstand(round: Runden): void;
    // addRunde(tttrunde: Runden): void;
    gewinnerNachricht(gewinner?: string): void;
}

// Hilfebutton (Text ein und ausblenden), Bei Klick auf Button wird Erklär-text angezeigt, bei erneutem klicken, text ausgeblendet
hilfe.addEventListener("click", erklaerung);

function erklaerung(): void {
    if (erklaeren.getAttribute("class") == "ausblenden") {
        erklaeren.setAttribute("class", "");
    } else {
        erklaeren.setAttribute("class", "ausblenden");
    }
}

// Auswahl der Schwierigkeit
// 1. Leicht 
leicht.addEventListener("click", playleicht);

function playleicht(): void {
    // Bei Auswahl des Buttons verschwindet dieser + die beiden anderen (und passendes Spielfeld erschein, durch Ts später)
    if (buttonleicht.getAttribute("class") == "active" && l.getAttribute("class") == "active") {
        buttonleicht.setAttribute("class", "");
        buttonmittel.setAttribute("class", "");
        buttonschwer.setAttribute("class", "");
        l.setAttribute("class", "");
        m.setAttribute("class", "");
        s.setAttribute("class", "");
    } else {
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
}
// 2. Mittleres Spiel
mittel.addEventListener("click", playmittel);

function playmittel(): void {
    // Bei Auswahl des Buttons verschwindet dieser + die beiden anderen (und passendes Spielfeld erschein, durch Ts später)
    if (buttonmittel.getAttribute("class") == "active" && m.getAttribute("class") == "active") {
        buttonmittel.setAttribute("class", "");
        buttonleicht.setAttribute("class", "");
        buttonschwer.setAttribute("class", "");
        m.setAttribute("class", "");
        l.setAttribute("class", "");
        s.setAttribute("class", "");
    } else {
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
}
// Schweres Spiel
schwer.addEventListener("click", playschwer);

function playschwer(): void {
    // Bei Auswahl des Buttons verschwindet dieser + die beiden anderen (und passendes Spielfeld erschein, durch Ts später)
    if (buttonschwer.getAttribute("class") == "active" && s.getAttribute("class") == "active") {
        buttonschwer.setAttribute("class", "");
        buttonleicht.setAttribute("class", "");
        buttonmittel.setAttribute("class", "");
        s.setAttribute("class", "");
        l.setAttribute("class", "");
        m.setAttribute("class", "");
    } else {
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
}

// Grundlegendes Spielfeld wird erzeugt durch alle Zuweisungen in Klasse Spiel 
class Spiel implements Spielboard {
    //Durch klicken wir Spielfeld erzeugt und der Inhalt an Feld "gebunden"
    klick(ausgelösterklick: (reihe: number, feld: number) => void): void {
        // Spielfeld
        document.addEventListener("click", (event: Event) => {
            const geklickt: HTMLElement = <HTMLElement>event.target;
            const aufbau: boolean = geklickt.className === "feld";
            // Inhalt
            if (aufbau) {
                const zelle: HTMLElement = geklickt;
                const reihe: number = +zelle.parentElement!.dataset.reihe!;
                const feld: number = +zelle.dataset.feld!;

                ausgelösterklick(reihe, feld);
            }
        });
    }
    // Element wird erstellt und eine classe und ein Datenset wird angewendet 
    // tslint:disable-next-line: no-any Auskomentiert, da Array jede Eigenschaft annehmen muss 
    createElement = (tag: string, className?: string, dataset?: Array<any>): HTMLElement => {
        const element: HTMLElement = document.createElement(tag);
        if (className) element.classList.add(className);
        if (dataset) element.dataset[dataset[0]] = dataset[1];

        return element;
    }
    // Abfragen aus DOM - Spiel erscheint und kann von Anfang bis Ende gespielt werden
    getElement = (selector: string): HTMLElement => <HTMLElement>document.querySelector(selector);
    getAllElements = (selector: string): NodeList => <NodeList>document.querySelectorAll(selector);
    // Das Spielfeld wird angezeigt und auf der Seite plaziert (html), das Spielfeld besteht aus einem Array im Array
    getSpielfeld = (boardData: Array<Array<string>>): void => {
        const game: HTMLElement = this.getElement("#game");
        const spielBoard: HTMLElement = this.createElement("div", "board", undefined);

        game.append(spielBoard);

        boardData.forEach((reihe, i) => {
            const randzelle: HTMLElement = this.createElement("div", "reihe", ["reihe", i]);
            spielBoard.append(randzelle);

            reihe.forEach((feld, j) => {
                const boeardFeld: HTMLElement = this.createElement("div", "feld", ["feld", j]);
                randzelle.append(boeardFeld);
            });
        });
    }
    //Das Spielfeld wird aktualisiert sobald der aktuelle Spieler sein Zeichen setzt
    updateSpielfeld = (reihe: number, feld: number, aktuellerSpieler: string): void => {
        const spieler: HTMLElement = this.createElement("span", aktuellerSpieler, undefined);
        spieler.textContent = aktuellerSpieler;

        const randzelle: HTMLElement = this.getElement(`[data-reihe="${reihe}"]`);
        const zelle: HTMLElement = <HTMLElement>randzelle.querySelector(`[data-feld="${feld}"]`);

        zelle.append(spieler);
    }
    //Bei Neustart des Spieles (als nach jeder Runde), werden die Felder geleert 
    neustart = (): void => {
        const einzelnefleder: NodeList = this.getAllElements(".feld");

        einzelnefleder.forEach(zelle => {
            zelle.textContent = "";
        });
    }
    // Punktestand wird erstellt und über dem Spielfeld platziert, Zuweisung welcher Spieler (O und X im Namen), welche Punkte bekommt
    punktestand = (punkte: Spielstand): void => {
        const game: HTMLElement = this.getElement("#game");
        const punkteText: HTMLElement = this.createElement("div", "score");

        game.append(punkteText);

        const spielerXstand: HTMLElement = this.createElement("div", "x");
        spielerXstand.textContent = `Player X: ${punkte.x}`;
        spielerXstand.id = "score-x";

        const playerOstand: HTMLElement = this.createElement("div", "o");
        playerOstand.textContent = `Player O: ${punkte.o}`;
        playerOstand.id = "score-o";

        punkteText.append(spielerXstand, playerOstand);
    }
    //Gemachter Punt wird zum Punktestand hinzugefügt. Wenn der akteulle Spieler einen Punkt holt wird er zu seinem Punktestand gezählt
    addPunkte = (aktuellerPunktestand: Spielstand, aktuellerSpieler: string): void => {
        const aktuellerSpielerScore: HTMLElement = this.getElement(`#score-${aktuellerSpieler}`);
        const player: "Player X" | "Player O" = aktuellerSpieler === "x" ? "Player X" : "Player O";
        const d: number = aktuellerPunktestand[aktuellerSpieler];
        aktuellerSpielerScore.textContent = `${player}: ${d}`;
    }

    // Nachricht erscheinen - Wer hat die Runde geholt oder ist es unentschieden? Passender Spieler wird herausgesucht
    nachricht = (gewinner: string): void => {
        const info: HTMLElement = this.createElement("div", "info");
        const player: "Player X" | "Player O" = gewinner === "x" ? "Player X" : "Player O";

        info.textContent = gewinner ? `${player} hohlt Runde!` : "Kein Punkt diese Runde!";

        const game: HTMLElement = this.getElement("#game");
        game.append(info);
    }
    // Nachricht wider ausblenden, bei neuer Spielrunde 
    clearNachricht = (): void => {
        const info: HTMLElement = this.getElement(".info");
        info.remove();
    }
    // Rundenstand wird erstellt und über dem Spielfeld platziert, Hier werden die gespielten von den gesammten Spielständen gezählt
    rundenstand = (round: Runden): void => {
        const game: HTMLElement = this.getElement("#game");
        const rundenText: HTMLElement = this.createElement("div", "tttrunde");

        game.append(rundenText);

        const rundenTextgespRunde: HTMLElement = this.createElement("div", "gespRunde");
        rundenTextgespRunde.textContent = `${round.gespRunde} von `;
        rundenTextgespRunde.id = "tttrunde-gespRunde";

        const rundenTextgesRunden: HTMLElement = this.createElement("div", "gesRunden");
        rundenTextgesRunden.textContent = `${round.gesRunden} Runden`;
        rundenTextgesRunden.id = "tttrunde-gesRunden";

        rundenText.append(rundenTextgespRunde, rundenTextgesRunden);
    }
    // Versuch die Runden zu addieren -> Runde wird aber in der Console erhöht
    // addPunkte = (tttrunde: Runden): void => {
    //     const newRound: HTMLElement = this.getElement(`${tttrunde}`);
    //     const i: number = tttrunde.gespRunde;
    //     newRound.textContent = `${i}`;
    // }

    // Gewinnernachricht wird erstellt bzw. Spieler ermittelt und Nachricht erstellt 
    gewinnerNachricht = (gewinner: string): void => {
        const gewinnertext: HTMLElement = this.createElement("div", "gewinnertext");
        const player: "Player X" | "Player O" = gewinner === "x" ? "Player X" : "Player O";

        gewinnertext.textContent = gewinner ? `${player} hat gewonnen` : "X und O haben gewonnen";

        const game: HTMLElement = this.getElement("#game");
        game.append(gewinnertext);
    }
}

// Leichtes Spiel spielen
/* Klasse für Spiel 3x3 -> welches nach Abruf der Funktion ausgeführt wird (Spielboard, Spieler und Spielstand aus Interface), 
Spielboard erhält die oben definierte Klasse Spiel*/
class TiTaTo3x3 {
    gesSpielfeld: Spielboard;
    spieler: Spieler;
    score: Spielstand;
    tttrunde: Runden;
    board: Array<Array<string>>;
    aktuellerSpieler: string;
    // Verzug, damit Nachricht lesbar und Enspielstand gesehen werden kann 
    verzugzeit: number;
    verzug: boolean;
    // Zuweisungen/ Inhalt für Klasse TiTaTo3x3
    constructor(gesSpielfeld: Spielboard) {
        this.gesSpielfeld = gesSpielfeld;
        this.board = this.erstelleSpielfeld();
        this.spieler = { x: "x", o: "o" };
        this.score = { x: 0, o: 0 };
        this.tttrunde = { gespRunde: 1, gesRunden: 3 };
        this.aktuellerSpieler = this.spieler.o;
        this.gesSpielfeld.klick(this.klick);
        this.verzugzeit = 1000;
        this.verzug = false;
    }
    // Spielfeld 3x3 erstellen / Array mit freien Feldern (String), in diese später X und O gesetzt werden
    erstelleSpielfeld = (): Array<Array<string>> => [["", "", ""], ["", "", ""], ["", "", ""]];
    // Regeln, wann Spieler gewinnen kann
    gewonnen = (reihe: number, feld: number): boolean => {
        if (
            // Horizontal gewinnen
            (this.board[reihe][0] === this.aktuellerSpieler &&
                this.board[reihe][1] === this.aktuellerSpieler &&
                this.board[reihe][2] === this.aktuellerSpieler) ||
            // Vertical gewinnen
            (this.board[0][feld] === this.aktuellerSpieler &&
                this.board[1][feld] === this.aktuellerSpieler &&
                this.board[2][feld] === this.aktuellerSpieler) ||
            // Diagonal gewinnen
            ((this.board[0][0] === this.aktuellerSpieler &&
                this.board[1][1] === this.aktuellerSpieler &&
                this.board[2][2] === this.aktuellerSpieler) ||
                (this.board[2][0] === this.aktuellerSpieler &&
                    this.board[1][1] === this.aktuellerSpieler &&
                    this.board[0][2] === this.aktuellerSpieler))
        )
            return true;
        return false;
    }
    // Spielfeld und Punktestand positionieren
    startSpiel(): void {
        this.gesSpielfeld.punktestand(this.score);
        this.gesSpielfeld.getSpielfeld(this.board);
        this.gesSpielfeld.rundenstand(this.tttrunde);
    }
    // Klick in ein Spielfeld: Wenn Spielzug möglich, kann aktueller Spieler Stein setzen 
    klick = (reihe: number, feld: number) => {
        const spielzugMoeglich: boolean = this.board[reihe][feld] === "";

        if (spielzugMoeglich && !this.verzug) {
            this.board[reihe][feld] = this.aktuellerSpieler;
            this.gesSpielfeld.updateSpielfeld(reihe, feld, this.aktuellerSpieler);

            // Festlegung was passiert, bei win und unentschieden
            const win: boolean = this.gewonnen(reihe, feld);
            const unentschieden: string[][] = this.board
                .map(reihe => reihe.filter(feld => feld === ""))
                .filter(reihe => reihe.length > 0);
            if (!this.verzug) {
                if (win) {
                    this.neuerScore();
                    this.gesSpielfeld.addPunkte(this.score, this.aktuellerSpieler);
                    this.spielEnde(this.aktuellerSpieler);
                } else if (unentschieden.length < 1) {
                    this.spielEnde();
                } else {
                    this.tauschePlayer();
                }
            }
        }
    }
    // Die Punktzahl des Gewinners werden in seinen Score eingetragen +1, Runden werden in Rundenanzeige ahtualisiert +1
    neuerScore = (): void => {
        this.score[this.aktuellerSpieler] += 1;

    }

    // Versuch die Anzeigentafel immer um eine zu erhöhen -> Cosole wird jedoch Runde angezeigt 
    neuerZeahler = (): void => {
        this.tttrunde.gespRunde += 1;
        if (this.tttrunde.gespRunde <= 3) {
            console.log(this.tttrunde.gespRunde);
        }
    }

    // Verzug der löschung nach Spielende, damit Nachricht gelesen werden kann 
    spielEnde = (gewinner?: string) => {
        this.verzug = true;
        this.gesSpielfeld.nachricht(gewinner);
        if (this.tttrunde.gespRunde == 3) {
            this.gesSpielfeld.gewinnerNachricht(gewinner);
        }

        setTimeout(() => {
            this.neustartSpielfeld();
            this.verzug = false;
            // tslint:disable-next-line: align -> Formatierung verschiebt sich jedes mal, daher Auskommentiert
        }, this.verzugzeit);


    }
    //Spieler wird nach jeder Runde gewechselt, je nachdem wer gewonnen hat (gewinner beginnt)
    tauschePlayer = (): void => {
        this.aktuellerSpieler = this.aktuellerSpieler === this.spieler.x ? this.spieler.o : this.spieler.x;
    }
    // Neustart nach Gewonnen, Verlohren oder Unentschieden, Nachricht wird gelöscht, Neustart Spiel
    neustartSpielfeld = (): void => {
        if (this.tttrunde.gespRunde <= 2) {
            this.gesSpielfeld.clearNachricht();
            this.gesSpielfeld.neustart();
            this.board = this.erstelleSpielfeld();
            this.neuerZeahler();
        }
    }
}

/* Spiel beginnen 3x3 (Funktion hinter Klasse, da diese erst deklariert werden muss bevor Nutzung),
Spielfeld angezeigt bzw. Spielbeginn erst nachdem Schwierigkeits-Button aktiviert. */
var ticTacToe: TiTaTo3x3 = new TiTaTo3x3(new Spiel());

leicht.addEventListener("click", start3x3);

function start3x3(): void {
    // Nur wenn der Button aktiv ist, wird das (classe) TicTacToe-Spiel gestartet
    if (buttonleicht.getAttribute("class") == "active" && erklaeren.getAttribute("class") == "ausblenden") {
        ticTacToe.startSpiel();
    }
}































// // Mittleres Spiel
// /* Klasse für Spiel 4x4 -> welches nach Abruf der Funktion ausgeführt wird (Spielboard, Spieler und Spielstand aus Interface), 
// Spielboard erhält die oben definierte Klasse Spiel*/
// class TiTaTo4x4 {
//     gesSpielfeld: Spielboard;
//     board: Array<Array<string>>;
//     spieler: Spieler;
//     score: Spielstand;
//     tttrunde: Runden;
//     aktuellerSpieler: string;
//     // Verzug, damit Nachricht lesbar und Enspielstand gesehen werden kann 
//     verzugzeit: number;
//     verzug: boolean;

//     // Zuweisungen/ Inhalt für Klasse TiTaTo4x4
//     constructor(gesSpielfeld: Spielboard) {
//         this.gesSpielfeld = gesSpielfeld;
//         this.board = this.erstelleSpielfeld4x4();
//         this.spieler = { x: "x", o: "o" };
//         this.score = { x: 0, o: 0 };
//         this.tttrunde = {x: 0, o: 0};
//         this.aktuellerSpieler = this.spieler.x;
//         this.gesSpielfeld.klick(this.klick);
//         this.verzugzeit = 1000;
//         this.verzug = false;
//     }


//     // Spielfeld 4x4 erstellen / Array mit freien Feldern (String), in diese später X und O gesetzt werden
//     erstelleSpielfeld4x4 = (): Array<Array<string>> => [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];

//     // Regeln wann Spieler gewinnen kann
//     gewonnen = (reihe: number, feld: number): boolean => {
//         if (
//             // Horizontal gewinnen [Nummern][der Zeilen]
//             (this.board[reihe][0] === this.aktuellerSpieler &&
//                 this.board[reihe][1] === this.aktuellerSpieler &&
//                 this.board[reihe][2] === this.aktuellerSpieler &&
//                 this.board[reihe][3] === this.aktuellerSpieler) ||
//             // Vertical gewinnen [Nummern][der Spalten]
//             (this.board[0][feld] === this.aktuellerSpieler &&
//                 this.board[1][feld] === this.aktuellerSpieler &&
//                 this.board[2][feld] === this.aktuellerSpieler &&
//                 this.board[3][feld] === this.aktuellerSpieler) ||
//             // Diagonal gewinnen [Zeile][Spalte]
//             ((this.board[0][0] === this.aktuellerSpieler &&
//                 this.board[1][1] === this.aktuellerSpieler &&
//                 this.board[2][2] === this.aktuellerSpieler &&
//                 this.board[3][3] === this.aktuellerSpieler) ||
//                 (this.board[3][0] === this.aktuellerSpieler &&
//                     this.board[2][1] === this.aktuellerSpieler &&
//                     this.board[1][2] === this.aktuellerSpieler &&
//                     this.board[0][3] === this.aktuellerSpieler))
//         )
//             return true;
//         return false;
//     }

//     // Spielfeld und Punktestand positionieren
//     startSpiel(): void {
//         this.gesSpielfeld.punktestand(this.score);
//         this.gesSpielfeld.getSpielfeld(this.board);
//     }

//     // Klick in ein Spielfeld: Wenn Spielzug möglich, kann aktueller Spieler Stein setzen 
//     klick = (reihe: number, feld: number) => {
//         const spielzugMoeglich: boolean = this.board[reihe][feld] === "";

//         if (spielzugMoeglich && !this.verzug) {
//             this.board[reihe][feld] = this.aktuellerSpieler;
//             this.gesSpielfeld.updateSpielfeld(reihe, feld, this.aktuellerSpieler);

//             // Festlegung was passiert, bei win und unentschieden
//             const win: boolean = this.gewonnen(reihe, feld);
//             const unentschieden: string[][] = this.board
//                 .map(reihe => reihe.filter(feld => feld === ""))
//                 .filter(reihe => reihe.length > 0);
//             if (!this.verzug) {
//                 if (win) {
//                     this.neuerScore();
//                     this.gesSpielfeld.addPunkte(this.score, this.aktuellerSpieler);
//                     this.spielEnde(this.aktuellerSpieler);
//                 } else if (unentschieden.length < 1) {
//                     this.spielEnde();
//                 } else {
//                     this.tauschePlayer();
//                 }
//             }
//         }
//     }

//     // Gewinner Punktezahl erhöhen
//     neuerScore = (): void => {
//         this.score[this.aktuellerSpieler] += 1;
//     }
//     spielEnde = (gewinner?: string) => {
//         this.verzug = true;
//         this.gesSpielfeld.nachricht(gewinner);
//         setTimeout(() => {
//             this.neustartSpielfeld();
//             this.verzug = false;
//         }, this.verzugzeit);
//     }

//     //Spieler nach jeder Runde wechseln 
//     tauschePlayer = (): void => {
//         this.aktuellerSpieler = this.aktuellerSpieler === this.spieler.x ? this.spieler.o : this.spieler.x;
//     }

//     // Neustart nach Gewonnen, Verlohren oder Unentschieden
//     neustartSpielfeld = (): void => {
//         this.gesSpielfeld.clearNachricht();
//         this.gesSpielfeld.neustart();
//         this.board = this.erstelleSpielfeld4x4();
//     }
// }

// /* Spiel beginnen 4x4 (Funktion hinter Klasse, da diese erst deklariert werden muss bevor Nutzung),
// Spielfeld angezeigt bzw. Spielbeginn erst nachdem Schwierigkeits-Button aktiviert. */
// mittel.addEventListener("click", start4x4);

// function start4x4(): void {
//     // Nur wenn der Button aktiv ist, wird das (classe) TicTacToe-Spiel gestartet
//     if (buttonmittel.getAttribute("class") == "active" && erklaeren.getAttribute("class") == "ausblenden") {
//         const ticTacToe: TiTaTo4x4 = new TiTaTo4x4(new Spiel());
//         ticTacToe.startSpiel();
//     }
// }

// // Schweres Spiel spielen
// /* Klasse für Spiel 5x5 -> welches nach Abruf der Funktion ausgeführt wird (Spielboard, Spieler und Spielstand aus Interface), 
// Spielboard erhält die oben definierte Klasse Spiel*/
// class TiTaTo5x5 {
//     gesSpielfeld: Spielboard;
//     board: Array<Array<string>>;
//     spieler: Spieler;
//     score: Spielstand;
//     aktuellerSpieler: string;
//     // Verzug, damit Nachricht lesbar und Enspielstand gesehen werden kann 
//     verzugzeit: number;
//     verzug: boolean;

//     // Zuweisungen/ Inhalt für Klasse TiTaTo5x5
//     constructor(gesSpielfeld: Spielboard) {
//         this.gesSpielfeld = gesSpielfeld;
//         this.board = this.erstelleSpielfeld5x5();
//         this.spieler = { x: "x", o: "o" };
//         this.score = { x: 0, o: 0 };
//         this.aktuellerSpieler = this.spieler.x;
//         this.gesSpielfeld.klick(this.klick);
//         this.verzugzeit = 1000;
//         this.verzug = false;
//     }

//     // Spielfeld 5x5 erstellen / Array mit freien Feldern (String), in diese später X und O gesetzt werden
//     erstelleSpielfeld5x5 = (): Array<Array<string>> => [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]];

//     // Regeln wann Spieler gewinnen kann
//     gewonnen = (reihe: number, feld: number): boolean => {
//         if (
//             // Horizontal gewinnen [Nummern][der Zeilen]
//             (this.board[reihe][0] === this.aktuellerSpieler &&
//                 this.board[reihe][1] === this.aktuellerSpieler &&
//                 this.board[reihe][2] === this.aktuellerSpieler &&
//                 this.board[reihe][3] === this.aktuellerSpieler) ||
//             // Vertical gewinnen [Nummern][der Spalten]
//             (this.board[0][feld] === this.aktuellerSpieler &&
//                 this.board[1][feld] === this.aktuellerSpieler &&
//                 this.board[2][feld] === this.aktuellerSpieler &&
//                 this.board[3][feld] === this.aktuellerSpieler) ||
//             // Diagonal gewinnen [Zeile][Spalte]
//             ((this.board[0][0] === this.aktuellerSpieler &&
//                 this.board[1][1] === this.aktuellerSpieler &&
//                 this.board[2][2] === this.aktuellerSpieler &&
//                 this.board[3][3] === this.aktuellerSpieler) ||
//                 (this.board[3][0] === this.aktuellerSpieler &&
//                     this.board[2][1] === this.aktuellerSpieler &&
//                     this.board[1][2] === this.aktuellerSpieler &&
//                     this.board[0][3] === this.aktuellerSpieler))
//         )
//             return true;
//         return false;
//     }

//     // Spielfeld und Punktestand positionieren
//     startSpiel(): void {
//         this.gesSpielfeld.punktestand(this.score);
//         this.gesSpielfeld.getSpielfeld(this.board);
//         // this.gesSpielfeld.rundenstand(this.score);
//     }

//     // Klick in ein Spielfeld: Wenn Spielzug möglich, kann aktueller Spieler Stein setzen 
//     klick = (reihe: number, feld: number) => {
//         const spielzugMoeglich: boolean = this.board[reihe][feld] === "";

//         if (spielzugMoeglich && !this.verzug) {
//             this.board[reihe][feld] = this.aktuellerSpieler;
//             this.gesSpielfeld.updateSpielfeld(reihe, feld, this.aktuellerSpieler);

//             // Festlegung was passiert, bei win und unentschieden
//             const win: boolean = this.gewonnen(reihe, feld);
//             const unentschieden: string[][] = this.board
//                 .map(reihe => reihe.filter(feld => feld === ""))
//                 .filter(reihe => reihe.length > 0);
//             if (!this.verzug) {
//                 if (win) {
//                     this.neuerScore();
//                     this.gesSpielfeld.addPunkte(this.score, this.aktuellerSpieler);
//                     this.spielEnde(this.aktuellerSpieler);
//                 } else if (unentschieden.length < 1) {
//                     this.spielEnde();
//                 } else {
//                     this.tauschePlayer();
//                 }
//             }
//         }
//     }

//     // Gewinner Punktezahl erhöhen
//     neuerScore = (): void => {
//         this.score[this.aktuellerSpieler] += 1;
//     }
//     spielEnde = (gewinner?: string) => {
//         this.verzug = true;
//         this.gesSpielfeld.nachricht(gewinner);
//         setTimeout(() => {
//             this.neustartSpielfeld();
//             this.verzug = false;
//         }, this.verzugzeit);
//     }
//     //Spieler nach jeder Runde wechseln 
//     tauschePlayer = (): void => {
//         this.aktuellerSpieler = this.aktuellerSpieler === this.spieler.x ? this.spieler.o : this.spieler.x;
//     }

//     // Neustart nach Gewonnen, Verlohren oder Unentschieden
//     neustartSpielfeld = (): void => {
//         this.gesSpielfeld.clearNachricht();
//         this.gesSpielfeld.neustart();
//         this.board = this.erstelleSpielfeld5x5();
//     }
// }

// /* Spiel beginnen 5x5 (Funktion hinter Klasse, da diese erst deklariert werden muss bevor Nutzung),
// Spielfeld angezeigt bzw. Spielbeginn erst nachdem Schwierigkeits-Button aktiviert. */
// schwer.addEventListener("click", start5x5);
// function start5x5(): void {
//     // Nur wenn der Button aktiv ist, wird das (classe) TicTacToe-Spiel gestartet
//     if (buttonschwer.getAttribute("class") == "active" && erklaeren.getAttribute("class") == "ausblenden") {
//         const ticTacToe: TiTaTo5x5 = new TiTaTo5x5(new Spiel());
//         ticTacToe.startSpiel();
//     }
// }
