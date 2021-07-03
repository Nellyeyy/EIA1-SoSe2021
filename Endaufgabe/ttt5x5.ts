interface Spieler5x5 {
    x: string;
    o: string;
    [key: string]: string;
}
// Spielstand bekommt bekommt das X und O als Nummer mitgegeben (Kombination aus Spieler und Spielstand ergibt später Funktionen)
interface Spielstand5x5 {
    x: number;
    o: number;
    [key: string]: number;
}
// Rundenstand bekommt bekommt zwei Nummern (gesp. Runden und ges. Runden)
interface Runden5x5 {
    gespRunde5x5: number;
    gesRunden5x5: number;
    [key: string]: number;
}

// Spielboard bekomt alle relevanten Eigenschaften für das Spiel mit 
interface Spielboard5x5 {
    klick5x5(ausgelösterklick: (reihe5x5: number, feld5x5: number) => void): void;
    // tslint:disable-next-line: no-any - Auskomentiert, da Array jede Eigenschaft annehmen muss 
    createElement5x5(tag5x5: string, className?: string, dataset?: Array<any>): HTMLElement;
    getElement5x5(selector: string): HTMLElement;
    getAllElements5x5(selector: string): NodeList;
    getSpielfeld5x5(boardData5x5: Array<Array<string>>): void;
    updateSpielfeld5x5(reihe5x5: number, feld5x5: number, aktuellerSpieler5x5: string): void;
    neustart5x5(): void;
    punktestand5x5(punkte5x5: Spielstand5x5): void;
    addPunkte5x5(aktuellerPunktestand5x5: Spielstand5x5, aktuellerSpieler5x5: string): void;
    nachricht5x5(gewinner5x5?: string): void;
    clearNachricht5x5(): void;
    rundenstand5x5(tttrunde5x5: Runden5x5): void;
    gewinnerNachricht5x5(gewinner5x5?: string): void;
}

// Auswahl der Schwierigkeit Schweres Spiel
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
class Spiel5x5 implements Spielboard5x5 {
    //Durch klicken wir Spielfeld erzeugt und der Inhalt an Feld "gebunden"
    klick5x5(ausgelösterklick: (reihe5x5: number, feld5x5: number) => void): void {
        // Spielfeld5x5
        document.addEventListener("click", (event: Event) => {
            const geklickt: HTMLElement = <HTMLElement>event.target;
            const aufbau: boolean = geklickt.className === "feld5x5";
            // Inhalt
            if (aufbau) {
                const zelle: HTMLElement = geklickt;
                const reihe5x5: number = +zelle.parentElement!.dataset.reihe5x5!;
                const feld5x5: number = +zelle.dataset.feld5x5!;
                ausgelösterklick(reihe5x5, feld5x5);
            }
        });
    }
    // Element wird erstellt und eine classe und ein Datenset wird angewendet 
    // tslint:disable-next-line: no-any Auskomentiert, da Array jede Eigenschaft annehmen muss 
    createElement5x5 = (tag5x5: string, className?: string, dataset?: Array<any>): HTMLElement => {
        const element: HTMLElement = document.createElement(tag5x5);
        if (className) element.classList.add(className);
        if (dataset) element.dataset[dataset[0]] = dataset[1];

        return element;
    }
    // Abfragen aus DOM - Spiel erscheint und kann von Anfang bis Ende gespielt werden
    getElement5x5 = (selector: string): HTMLElement => <HTMLElement>document.querySelector(selector);
    getAllElements5x5 = (selector: string): NodeList => <NodeList>document.querySelectorAll(selector);
    // Das Spielfeld wird angezeigt und auf der Seite plaziert (html), das Spielfeld besteht aus einem Array im Array
    getSpielfeld5x5 = (boardData5x5: Array<Array<string>>): void => {
        const game: HTMLElement = this.getElement5x5("#game");
        const spielBoard: HTMLElement = this.createElement5x5("div", "board", undefined);

        game.append(spielBoard);

        boardData5x5.forEach((reihe5x5, i) => {
            const randzelle: HTMLElement = this.createElement5x5("div", "reihe5x5", ["reihe5x5", i]);
            spielBoard.append(randzelle);

            reihe5x5.forEach((feld5x5, j) => {
                const boeardFeld5x5: HTMLElement = this.createElement5x5("div", "feld5x5", ["feld5x5", j]);
                randzelle.append(boeardFeld5x5);
            });
        });
    }
    //Das Spielfeld wird aktualisiert sobald der aktuelle Spieler sein Zeichen setzt
    updateSpielfeld5x5 = (reihe5x5: number, feld5x5: number, aktuellerSpieler5x5: string): void => {
        const spieler: HTMLElement = this.createElement5x5("span", aktuellerSpieler5x5, undefined);
        spieler.textContent = aktuellerSpieler5x5;

        const randzelle: HTMLElement = this.getElement5x5(`[data-reihe5x5="${reihe5x5}"]`);
        const zelle: HTMLElement = <HTMLElement>randzelle.querySelector(`[data-feld5x5="${feld5x5}"]`);

        zelle.append(spieler);
    }
    //Bei Neustart des Spieles (als nach jeder Runde), werden die Felder geleert 
    neustart5x5 = (): void => {
        const einzelnefleder: NodeList = this.getAllElements5x5(".feld5x5");

        einzelnefleder.forEach(zelle => {
            zelle.textContent = "";
        });
    }
    // Punktestand wird erstellt und über dem Spielfeld platziert, Zuweisung welcher Spieler (O und X im Namen), welche Punkte bekommt
    punktestand5x5 = (punkte5x5: Spielstand5x5): void => {
        const game: HTMLElement = this.getElement5x5("#game");
        const punkteText: HTMLElement = this.createElement5x5("div", "score5x5");

        game.append(punkteText);

        const spielerXstand: HTMLElement = this.createElement5x5("div", "x");
        spielerXstand.textContent = `Player X: ${punkte5x5.x}`;
        spielerXstand.id = "score5x5-x";


        const playerOstand: HTMLElement = this.createElement5x5("div", "o");
        playerOstand.textContent = `Player O: ${punkte5x5.o}`;
        playerOstand.id = "score5x5-o";

        punkteText.append(spielerXstand, playerOstand);
    }
    //Gemachter Punt wird zum Punktestand hinzugefügt. Wenn der akteulle Spieler einen Punkt holt wird er zu seinem Punktestand gezählt
    addPunkte5x5 = (aktuellerPunktestand5x5: Spielstand5x5, aktuellerSpieler5x5: string): void => {
        const aktuellerSpieler5x5Score: HTMLElement = this.getElement5x5(`#score5x5-${aktuellerSpieler5x5}`);
        const player: "Player X" | "Player O" = aktuellerSpieler5x5 === "x" ? "Player X" : "Player O";
        const d: number = aktuellerPunktestand5x5[aktuellerSpieler5x5];
        aktuellerSpieler5x5Score.textContent = `${player}: ${d}`;
    }

    // Nachricht erscheinen - Wer hat die Runde geholt oder ist es unentschieden? Passender Spieler wird herausgesucht
    nachricht5x5 = (gewinner5x5: string): void => {
        const info5x5: HTMLElement = this.createElement5x5("div", "info5x5");
        const player: "Player X" | "Player O" = gewinner5x5 === "x" ? "Player X" : "Player O";

        info5x5.textContent = gewinner5x5 ? `${player} hohlt Runde!` : "Kein Punkt diese Runde!";

        const game: HTMLElement = this.getElement5x5("#game");
        game.append(info5x5);
    }
    // Nachricht wider ausblenden, bei neuer Spielrunde 
    clearNachricht5x5 = (): void => {
        const info5x5: HTMLElement = this.getElement5x5(".info5x5");
        info5x5.remove();
    }
    // Rundenstand wird erstellt und über dem Spielfeld platziert, Hier werden die gespielten von den gesammten Spielständen gezählt
    rundenstand5x5 = (tttrunde5x5: Runden5x5): void => {
        const game: HTMLElement = this.getElement5x5("#game");
        const rundenText: HTMLElement = this.createElement5x5("div", "tttrunde5x5");

        game.append(rundenText);

        const rundenTextgespRunde5x5: HTMLElement = this.createElement5x5("div", "gespRunde5x5");
        rundenTextgespRunde5x5.textContent = `Es gibt `;
        rundenTextgespRunde5x5.id = "tttrunde5x5-gespRunde5x5";

        const rundenTextgesRunden: HTMLElement = this.createElement5x5("div", "gesRunden");
        rundenTextgesRunden.textContent = `${tttrunde5x5.gesRunden5x5} Runden`;
        rundenTextgesRunden.id = "tttrunde5x5-gesRunden";

        rundenText.append(rundenTextgespRunde5x5, rundenTextgesRunden);
    }

    // Gewinnernachricht wird erstellt bzw. Spieler ermittelt und Nachricht erstellt 
    gewinnerNachricht5x5 = (gewinner5x5: string): void => {
        const gewinnertext5x5: HTMLElement = this.createElement5x5("div", "gewinnertext5x5");

        gewinnertext5x5.textContent = `Das Spiel ist zu Ende! Für neues Spiel: klicke Neustart :)`;

        const game: HTMLElement = this.getElement5x5("#game");
        game.append(gewinnertext5x5);
    }
}

// Mittleres Spiel spielen
/* Klasse für Spiel 5x5 -> welches nach Abruf der Funktion ausgeführt wird (Spielboard, Spieler und Spielstand aus Interface), 
Spielboard erhält die oben definierte Klasse Spiel*/
class TiTaTo5x5 {
    gesSpielfeld5x5: Spielboard5x5;
    spieler5x5: Spieler5x5;
    score5x5: Spielstand5x5;
    tttrunde5x5: Runden5x5;
    board5x5: Array<Array<string>>;
    aktuellerSpieler5x5: string;
    // Verzug, damit Nachricht lesbar und Enspielstand gesehen werden kann 
    verzugzeit: number;
    verzug: boolean;
    // Zuweisungen/ Inhalt für Klasse TiTaTo5x5
    constructor(gesSpielfeld5x5: Spielboard5x5) {
        this.gesSpielfeld5x5 = gesSpielfeld5x5;
        this.board5x5 = this.erstelleSpielfeld5x5();
        this.spieler5x5 = { x: "x", o: "o" };
        this.score5x5 = { x: 0, o: 0 };
        this.tttrunde5x5 = {gespRunde5x5: 1, gesRunden5x5: 5};
        this.aktuellerSpieler5x5 = this.spieler5x5.x;
        this.gesSpielfeld5x5.klick5x5(this.klick5x5);
        this.verzugzeit = 1000;
        this.verzug = false;
    }
    // Spielfeld 5x5 erstellen / Array mit freien Feldern (String), in diese später X und O gesetzt werden
    erstelleSpielfeld5x5 = (): Array<Array<string>> => [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]];

    // Regeln, wann Spieler gewinnen kann, Für jeden Spieler (o und X) definiert
    gewonnen5x5 = (reihe5x5: number, feld5x5: number): boolean => {
        if (
            // Horizontal gewinnen
            (this.board5x5[reihe5x5][0] === this.aktuellerSpieler5x5 &&
                this.board5x5[reihe5x5][1] === this.aktuellerSpieler5x5 &&
                this.board5x5[reihe5x5][2] === this.aktuellerSpieler5x5 &&
                this.board5x5[reihe5x5][3] === this.aktuellerSpieler5x5 &&
                this.board5x5[reihe5x5][4] === this.aktuellerSpieler5x5) ||
            // Vertical gewinnen
            (this.board5x5[0][feld5x5] === this.aktuellerSpieler5x5 &&
                this.board5x5[1][feld5x5] === this.aktuellerSpieler5x5 &&
                this.board5x5[2][feld5x5] === this.aktuellerSpieler5x5 &&
                this.board5x5[3][feld5x5] === this.aktuellerSpieler5x5 &&
                this.board5x5[4][feld5x5] === this.aktuellerSpieler5x5) ||
            // Diagonal gewinnen
            ((this.board5x5[0][0] === this.aktuellerSpieler5x5 &&
                this.board5x5[1][1] === this.aktuellerSpieler5x5 &&
                this.board5x5[2][2] === this.aktuellerSpieler5x5 &&
                this.board5x5[3][3] === this.aktuellerSpieler5x5 &&
                this.board5x5[4][4] === this.aktuellerSpieler5x5) ||
                (this.board5x5[4][0] === this.aktuellerSpieler5x5 &&
                    this.board5x5[3][1] === this.aktuellerSpieler5x5 &&
                    this.board5x5[2][2] === this.aktuellerSpieler5x5 &&
                    this.board5x5[1][3] === this.aktuellerSpieler5x5 &&
                    this.board5x5[0][4] === this.aktuellerSpieler5x5))
        )
            return true;
        return false;
    }
    // Spielfeld und Punktestand positionieren
    startSpiel5x5(): void {
        this.gesSpielfeld5x5.punktestand5x5(this.score5x5);
        this.gesSpielfeld5x5.getSpielfeld5x5(this.board5x5);
        this.gesSpielfeld5x5.rundenstand5x5(this.tttrunde5x5);
    }
    // Klick in ein Spielfeld: Wenn Spielzug möglich, kann aktueller Spieler Stein setzen 
    klick5x5 = (reihe5x5: number, feld5x5: number) => {
        const spielzugMoeglich: boolean = this.board5x5[reihe5x5][feld5x5] === "";

        if (spielzugMoeglich && !this.verzug) {
            this.board5x5[reihe5x5][feld5x5] = this.aktuellerSpieler5x5;
            this.gesSpielfeld5x5.updateSpielfeld5x5(reihe5x5, feld5x5, this.aktuellerSpieler5x5);

            // Festlegung was passiert, bei win und unentschieden
            const win: boolean = this.gewonnen5x5(reihe5x5, feld5x5);
            const unentschieden: string[][] = this.board5x5
                .map(reihe5x5 => reihe5x5.filter(feld5x5 => feld5x5 === ""))
                .filter(reihe5x5 => reihe5x5.length > 0);
            if (!this.verzug) {
                if (win) {
                    this.neuerScore5x5();
                    this.gesSpielfeld5x5.addPunkte5x5(this.score5x5, this.aktuellerSpieler5x5);
                    this.spielEnde5x5(this.aktuellerSpieler5x5);
                } else if (unentschieden.length < 1) {
                    this.spielEnde5x5();
                } else {
                    this.tauschePlayer5x5();
                }
            }
        }
    }
    // Die Punktzahl des Gewinners werden in seinen Score eingetragen +1, Runden werden in Rundenanzeige ahtualisiert +1
    neuerScore5x5 = (): void => {
        this.score5x5[this.aktuellerSpieler5x5] += 1;
    }
    //Anzeigentafel wird erhöht, sodass Computer weiß, welche Runde es ist -> Wann ist Spielende
    neuerZeahler5x5 = (): void => {
        this.tttrunde5x5.gespRunde5x5 += 1;
        // Konsole für den Überblick
        if (this.tttrunde5x5.gespRunde5x5 <= 5) {
            console.log(this.tttrunde5x5.gespRunde5x5);
        }
    }
    // Verzug der löschung nach Spielende, damit Nachricht gelesen werden kann 
    spielEnde5x5 = (gewinner5x5?: string) => {
        this.verzug = true;
        this.gesSpielfeld5x5.nachricht5x5(gewinner5x5);
        if (this.tttrunde5x5.gespRunde5x5 == 5) {
            this.gesSpielfeld5x5.gewinnerNachricht5x5(gewinner5x5);
        }
        setTimeout(() => {
            this.neustartSpielfeld5x5();
            this.verzug = false;
            // tslint:disable-next-line: align -> Formatierung verschiebt sich jedes mal, daher Auskommentiert
        }, this.verzugzeit);
    }
    //Spieler nach jedem Zug tauschen
    tauschePlayer5x5 = (): void => {
        this.aktuellerSpieler5x5 = this.aktuellerSpieler5x5 === this.spieler5x5.x ? this.spieler5x5.o : this.spieler5x5.x;
    }

    // Neustart nach Gewonnen, Verlohren oder Unentschieden, Nachricht wird gelöscht, Neustart Spiel
    neustartSpielfeld5x5 = (): void => {
        if (this.tttrunde5x5.gespRunde5x5 <= 4) {
            this.gesSpielfeld5x5.clearNachricht5x5();
            this.gesSpielfeld5x5.neustart5x5();
            this.board5x5 = this.erstelleSpielfeld5x5();
            this.neuerZeahler5x5();
        }
        // Zählerstand wird erhöht (Links oben - Halbkreis)
        if (this.tttrunde5x5.gespRunde5x5 == 2) {
            document.querySelector("#rund").innerHTML = stand[1];
        } else if (this.tttrunde5x5.gespRunde5x5 == 3) {
            document.querySelector("#rund").innerHTML = stand[2];
        } else if (this.tttrunde5x5.gespRunde5x5 == 4) {
            document.querySelector("#rund").innerHTML = stand[3];
        } else if (this.tttrunde5x5.gespRunde5x5 == 5) {
            document.querySelector("#rund").innerHTML = stand[4];
        }
    }
}

/* Spiel beginnen 5x5 (Funktion hinter Klasse, da diese erst deklariert werden muss bevor Nutzung),
Spielfeld angezeigt bzw. Spielbeginn erst nachdem Schwierigkeits-Button aktiviert. */
var ticTacToe5: TiTaTo5x5 = new TiTaTo5x5(new Spiel5x5());

schwer.addEventListener("click", start5x5);

function start5x5(): void {
    // Nur wenn der Button aktiv ist, wird das (classe) TicTacToe-Spiel gestartet
    if (buttonschwer.getAttribute("class") == "active" && erklaeren.getAttribute("class") == "ausblenden") {
        ticTacToe5.startSpiel5x5();
    }
}