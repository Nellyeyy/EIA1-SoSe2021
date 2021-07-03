interface Spieler4x4 {
    x: string;
    o: string;
    [key: string]: string;
}
// Spielstand bekommt bekommt das X und O als Nummer mitgegeben (Kombination aus Spieler und Spielstand ergibt später Funktionen)
interface Spielstand4x4 {
    x: number;
    o: number;
    [key: string]: number;
}
// Rundenstand bekommt bekommt zwei Nummern (gesp. Runden und ges. Runden)
interface Runden4x4 {
    gespRunde4x4: number;
    gesRunden4x4: number;
    [key: string]: number;
}

// Spielboard bekomt alle relevanten Eigenschaften für das Spiel mit 
interface Spielboard4x4 {
    klick4x4(ausgelösterklick: (reihe4x4: number, feld4x4: number) => void): void;
    // tslint:disable-next-line: no-any - Auskomentiert, da Array jede Eigenschaft annehmen muss 
    createElement4x4(tag4x4: string, className?: string, dataset?: Array<any>): HTMLElement;
    getElement4x4(selector: string): HTMLElement;
    getAllElements4x4(selector: string): NodeList;
    getSpielfeld4x4(boardData4x4: Array<Array<string>>): void;
    updateSpielfeld4x4(reihe4x4: number, feld4x4: number, aktuellerSpieler4x4: string): void;
    neustart4x4(): void;
    punktestand4x4(punkte4x4: Spielstand4x4): void;
    addPunkte4x4(aktuellerPunktestand4x4: Spielstand4x4, aktuellerSpieler4x4: string): void;
    nachricht4x4(gewinner4x4?: string): void;
    clearNachricht4x4(): void;
    rundenstand4x4(tttrunde4x4: Runden4x4): void;
    gewinnerNachricht4x4(gewinner4x4?: string): void;
}

// Grundlegendes Spielfeld wird erzeugt durch alle Zuweisungen in Klasse Spiel 
class Spiel4x4 implements Spielboard4x4 {
    //Durch klicken wir Spielfeld erzeugt und der Inhalt an Feld "gebunden"
    klick4x4(ausgelösterklick: (reihe4x4: number, feld4x4: number) => void): void {
        // Spielfeld4x4
        document.addEventListener("click", (event: Event) => {
            const geklickt: HTMLElement = <HTMLElement>event.target;
            const aufbau: boolean = geklickt.className === "feld4x4";
            // Inhalt
            if (aufbau) {
                const zelle: HTMLElement = geklickt;
                const reihe4x4: number = +zelle.parentElement!.dataset.reihe4x4!;
                const feld4x4: number = +zelle.dataset.feld4x4!;
                ausgelösterklick(reihe4x4, feld4x4);
            }
        });
    }
    // Element wird erstellt und eine classe und ein Datenset wird angewendet 
    // tslint:disable-next-line: no-any Auskomentiert, da Array jede Eigenschaft annehmen muss 
    createElement4x4 = (tag4x4: string, className?: string, dataset?: Array<any>): HTMLElement => {
        const element: HTMLElement = document.createElement(tag4x4);
        if (className) element.classList.add(className);
        if (dataset) element.dataset[dataset[0]] = dataset[1];

        return element;
    }
    // Abfragen aus DOM - Spiel erscheint und kann von Anfang bis Ende gespielt werden
    getElement4x4 = (selector: string): HTMLElement => <HTMLElement>document.querySelector(selector);
    getAllElements4x4 = (selector: string): NodeList => <NodeList>document.querySelectorAll(selector);
    // Das Spielfeld wird angezeigt und auf der Seite plaziert (html), das Spielfeld besteht aus einem Array im Array
    getSpielfeld4x4 = (boardData4x4: Array<Array<string>>): void => {
        const game: HTMLElement = this.getElement4x4("#game");
        const spielBoard: HTMLElement = this.createElement4x4("div", "board", undefined);

        game.append(spielBoard);

        boardData4x4.forEach((reihe4x4, i) => {
            const randzelle: HTMLElement = this.createElement4x4("div", "reihe4x4", ["reihe4x4", i]);
            spielBoard.append(randzelle);

            reihe4x4.forEach((feld4x4, j) => {
                const boeardFeld4x4: HTMLElement = this.createElement4x4("div", "feld4x4", ["feld4x4", j]);
                randzelle.append(boeardFeld4x4);
            });
        });
    }
    //Das Spielfeld wird aktualisiert sobald der aktuelle Spieler sein Zeichen setzt
    updateSpielfeld4x4 = (reihe4x4: number, feld4x4: number, aktuellerSpieler4x4: string): void => {
        const spieler: HTMLElement = this.createElement4x4("span", aktuellerSpieler4x4, undefined);
        spieler.textContent = aktuellerSpieler4x4;

        const randzelle: HTMLElement = this.getElement4x4(`[data-reihe4x4="${reihe4x4}"]`);
        const zelle: HTMLElement = <HTMLElement>randzelle.querySelector(`[data-feld4x4="${feld4x4}"]`);

        zelle.append(spieler);
    }
    //Bei Neustart des Spieles (als nach jeder Runde), werden die Felder geleert 
    neustart4x4 = (): void => {
        const einzelnefleder: NodeList = this.getAllElements4x4(".feld4x4");

        einzelnefleder.forEach(zelle => {
            zelle.textContent = "";
        });
    }
    // Punktestand wird erstellt und über dem Spielfeld platziert, Zuweisung welcher Spieler (O und X im Namen), welche Punkte bekommt
    punktestand4x4 = (punkte4x4: Spielstand4x4): void => {
        const game: HTMLElement = this.getElement4x4("#game");
        const punkteText: HTMLElement = this.createElement4x4("div", "score4x4");

        game.append(punkteText);

        const spielerXstand: HTMLElement = this.createElement4x4("div", "x");
        spielerXstand.textContent = `Player X: ${punkte4x4.x}`;
        spielerXstand.id = "score4x4-x";


        const playerOstand: HTMLElement = this.createElement4x4("div", "o");
        playerOstand.textContent = `Player O: ${punkte4x4.o}`;
        playerOstand.id = "score4x4-o";

        punkteText.append(spielerXstand, playerOstand);
    }
    //Gemachter Punt wird zum Punktestand hinzugefügt. Wenn der akteulle Spieler einen Punkt holt wird er zu seinem Punktestand gezählt
    addPunkte4x4 = (aktuellerPunktestand4x4: Spielstand4x4, aktuellerSpieler4x4: string): void => {
        const aktuellerSpieler4x4Score: HTMLElement = this.getElement4x4(`#score4x4-${aktuellerSpieler4x4}`);
        const player: "Player X" | "Player O" = aktuellerSpieler4x4 === "x" ? "Player X" : "Player O";
        const d: number = aktuellerPunktestand4x4[aktuellerSpieler4x4];
        aktuellerSpieler4x4Score.textContent = `${player}: ${d}`;
    }

    // Nachricht erscheinen - Wer hat die Runde geholt oder ist es unentschieden? Passender Spieler wird herausgesucht
    nachricht4x4 = (gewinner4x4: string): void => {
        const info4x4: HTMLElement = this.createElement4x4("div", "info4x4");
        const player: "Player X" | "Player O" = gewinner4x4 === "x" ? "Player X" : "Player O";

        info4x4.textContent = gewinner4x4 ? `${player} hohlt Runde!` : "Kein Punkt diese Runde!";

        const game: HTMLElement = this.getElement4x4("#game");
        game.append(info4x4);
    }
    // Nachricht wider ausblenden, bei neuer Spielrunde 
    clearNachricht4x4 = (): void => {
        const info4x4: HTMLElement = this.getElement4x4(".info4x4");
        info4x4.remove();
    }
    // Rundenstand wird erstellt und über dem Spielfeld platziert, Hier werden die gespielten von den gesammten Spielständen gezählt
    rundenstand4x4 = (tttrunde4x4: Runden4x4): void => {
        const game: HTMLElement = this.getElement4x4("#game");
        const rundenText: HTMLElement = this.createElement4x4("div", "tttrunde4x4");

        game.append(rundenText);

        const rundenTextgespRunde4x4: HTMLElement = this.createElement4x4("div", "gespRunde4x4");
        rundenTextgespRunde4x4.textContent = `Es gibt `;
        rundenTextgespRunde4x4.id = "tttrunde4x4-gespRunde4x4";

        const rundenTextgesRunden: HTMLElement = this.createElement4x4("div", "gesRunden");
        rundenTextgesRunden.textContent = `${tttrunde4x4.gesRunden4x4} Runden`;
        rundenTextgesRunden.id = "tttrunde4x4-gesRunden";

        rundenText.append(rundenTextgespRunde4x4, rundenTextgesRunden);
    }

    // Gewinnernachricht wird erstellt bzw. Spieler ermittelt und Nachricht erstellt 
    gewinnerNachricht4x4 = (gewinner4x4: string): void => {
        const gewinnertext4x4: HTMLElement = this.createElement4x4("div", "gewinnertext4x4");

        gewinnertext4x4.textContent = `Das Spiel ist zu Ende! Für neues Spiel: klicke Neustart :)`;

        const game: HTMLElement = this.getElement4x4("#game");
        game.append(gewinnertext4x4);
    }
}

// Mittleres Spiel spielen
/* Klasse für Spiel 4x4 -> welches nach Abruf der Funktion ausgeführt wird (Spielboard, Spieler und Spielstand aus Interface), 
Spielboard erhält die oben definierte Klasse Spiel*/
class TiTaTo4x4 {
    gesSpielfeld4x4: Spielboard4x4;
    spieler4x4: Spieler4x4;
    score4x4: Spielstand4x4;
    tttrunde4x4: Runden4x4;
    board4x4: Array<Array<string>>;
    aktuellerSpieler4x4: string;
    // Verzug, damit Nachricht lesbar und Enspielstand gesehen werden kann 
    verzugzeit: number;
    verzug: boolean;
    // Zuweisungen/ Inhalt für Klasse TiTaTo4x4
    constructor(gesSpielfeld4x4: Spielboard4x4) {
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
    // Spielfeld 4x4 erstellen / Array mit freien Feldern (String), in diese später X und O gesetzt werden
    erstelleSpielfeld4x4 = (): Array<Array<string>> => [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];

    // Regeln, wann Spieler gewinnen kann, Für jeden Spieler (o und X) definiert
    gewonnen4x4 = (reihe4x4: number, feld4x4: number): boolean => {
        if (
            // Horizontal gewinnen
            (this.board4x4[reihe4x4][0] === this.aktuellerSpieler4x4 &&
                this.board4x4[reihe4x4][1] === this.aktuellerSpieler4x4 &&
                this.board4x4[reihe4x4][2] === this.aktuellerSpieler4x4 &&
                this.board4x4[reihe4x4][3] === this.aktuellerSpieler4x4) ||
            // Vertical gewinnen
            (this.board4x4[0][feld4x4] === this.aktuellerSpieler4x4 &&
                this.board4x4[1][feld4x4] === this.aktuellerSpieler4x4 &&
                this.board4x4[2][feld4x4] === this.aktuellerSpieler4x4 &&
                this.board4x4[3][feld4x4] === this.aktuellerSpieler4x4) ||
            // Diagonal gewinnen
            ((this.board4x4[0][0] === this.aktuellerSpieler4x4 &&
                this.board4x4[1][1] === this.aktuellerSpieler4x4 &&
                this.board4x4[2][2] === this.aktuellerSpieler4x4 &&
                this.board4x4[3][3] === this.aktuellerSpieler4x4) ||
                (this.board4x4[3][0] === this.aktuellerSpieler4x4 &&
                    this.board4x4[1][2] === this.aktuellerSpieler4x4 &&
                    this.board4x4[2][1] === this.aktuellerSpieler4x4 &&
                    this.board4x4[0][3] === this.aktuellerSpieler4x4))
        )
            return true;
        return false;
    }
    // Spielfeld und Punktestand positionieren
    startSpiel4x4(): void {
        this.gesSpielfeld4x4.punktestand4x4(this.score4x4);
        this.gesSpielfeld4x4.getSpielfeld4x4(this.board4x4);
        this.gesSpielfeld4x4.rundenstand4x4(this.tttrunde4x4);
    }
    // Klick in ein Spielfeld: Wenn Spielzug möglich, kann aktueller Spieler Stein setzen 
    klick4x4 = (reihe4x4: number, feld4x4: number) => {
        const spielzugMoeglich: boolean = this.board4x4[reihe4x4][feld4x4] === "";

        if (spielzugMoeglich && !this.verzug) {
            this.board4x4[reihe4x4][feld4x4] = this.aktuellerSpieler4x4;
            this.gesSpielfeld4x4.updateSpielfeld4x4(reihe4x4, feld4x4, this.aktuellerSpieler4x4);

            // Festlegung was passiert, bei win und unentschieden
            const win: boolean = this.gewonnen4x4(reihe4x4, feld4x4);
            const unentschieden: string[][] = this.board4x4
                .map(reihe4x4 => reihe4x4.filter(feld4x4 => feld4x4 === ""))
                .filter(reihe4x4 => reihe4x4.length > 0);
            if (!this.verzug) {
                if (win) {
                    this.neuerScore4x4();
                    this.gesSpielfeld4x4.addPunkte4x4(this.score4x4, this.aktuellerSpieler4x4);
                    this.spielEnde4x4(this.aktuellerSpieler4x4);
                } else if (unentschieden.length < 1) {
                    this.spielEnde4x4();
                } else {
                    this.tauschePlayer4x4();
                }
            }
        }
    }
    // Die Punktzahl des Gewinners werden in seinen Score eingetragen +1, Runden werden in Rundenanzeige ahtualisiert +1
    neuerScore4x4 = (): void => {
        this.score4x4[this.aktuellerSpieler4x4] += 1;
    }
    //Anzeigentafel wird erhöht, sodass Computer weiß, welche Runde es ist -> Wann ist Spielende
    neuerZeahler4x4 = (): void => {
        this.tttrunde4x4.gespRunde4x4 += 1;
        // Konsole für den Überblick
        if (this.tttrunde4x4.gespRunde4x4 <= 4) {
            console.log(this.tttrunde4x4.gespRunde4x4);
        }
    }
    // Verzug der löschung nach Spielende, damit Nachricht gelesen werden kann 
    spielEnde4x4 = (gewinner4x4?: string) => {
        this.verzug = true;
        this.gesSpielfeld4x4.nachricht4x4(gewinner4x4);
        if (this.tttrunde4x4.gespRunde4x4 == 4) {
            this.gesSpielfeld4x4.gewinnerNachricht4x4(gewinner4x4);
        }
        setTimeout(() => {
            this.neustartSpielfeld4x4();
            this.verzug = false;
            // tslint:disable-next-line: align -> Formatierung verschiebt sich jedes mal, daher Auskommentiert
        }, this.verzugzeit);
    }
    //Spieler nach jedem Zug tauschen
    tauschePlayer4x4 = (): void => {
        this.aktuellerSpieler4x4 = this.aktuellerSpieler4x4 === this.spieler4x4.x ? this.spieler4x4.o : this.spieler4x4.x;
    }

    // Neustart nach Gewonnen, Verlohren oder Unentschieden, Nachricht wird gelöscht, Neustart Spiel
    neustartSpielfeld4x4 = (): void => {
        if (this.tttrunde4x4.gespRunde4x4 <= 3) {
            this.gesSpielfeld4x4.clearNachricht4x4();
            this.gesSpielfeld4x4.neustart4x4();
            this.board4x4 = this.erstelleSpielfeld4x4();
            this.neuerZeahler4x4();
        }
        // Zählerstand wird erhöht (Links oben - Halbkreis)
        if (this.tttrunde4x4.gespRunde4x4 == 2) {
            document.querySelector("#rund").innerHTML = stand[1];
        } else if (this.tttrunde4x4.gespRunde4x4 == 3) {
            document.querySelector("#rund").innerHTML = stand[2];
        }
        else if (this.tttrunde4x4.gespRunde4x4 == 4) {
            document.querySelector("#rund").innerHTML = stand[3];
        }
    }
}

/* Spiel beginnen 4x4 (Funktion hinter Klasse, da diese erst deklariert werden muss bevor Nutzung),
Spielfeld angezeigt bzw. Spielbeginn erst nachdem Schwierigkeits-Button aktiviert. */
var ticTacToe4: TiTaTo4x4 = new TiTaTo4x4(new Spiel4x4());

mittel.addEventListener("click", start4x4);

function start4x4(): void {
    // Nur wenn der Button aktiv ist, wird das (classe) TicTacToe-Spiel gestartet
    if (buttonmittel.getAttribute("class") == "active" && erklaeren.getAttribute("class") == "ausblenden") {
        ticTacToe4.startSpiel4x4();
    }
}


