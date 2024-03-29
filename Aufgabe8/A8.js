// tslint:disable-next-line: typedef
window.addEventListener("load", function () {
    // Drumpad - Button
    var nameBeat = ["../Aufgabe7/kick.mp3", "../Aufgabe7/hihat.mp3", "../Aufgabe7/snare.mp3", "../Aufgabe7/A.mp3", "../Aufgabe7/C.mp3", "../Aufgabe7/F.mp3", "../Aufgabe7/G.mp3", "../Aufgabe7/laugh-1.mp3", "../Aufgabe7/laugh-2.mp3"];
    document.querySelector("#eins").addEventListener("click", function () { playSample(nameBeat[0]); });
    document.querySelector("#zwei").addEventListener("click", function () { playSample(nameBeat[1]); });
    document.querySelector("#drei").addEventListener("click", function () { playSample(nameBeat[2]); });
    document.querySelector("#vier").addEventListener("click", function () { playSample(nameBeat[3]); });
    document.querySelector("#fuenf").addEventListener("click", function () { playSample(nameBeat[4]); });
    document.querySelector("#sechs").addEventListener("click", function () { playSample(nameBeat[5]); });
    document.querySelector("#sieben").addEventListener("click", function () { playSample(nameBeat[6]); });
    document.querySelector("#acht").addEventListener("click", function () { playSample(nameBeat[7]); });
    document.querySelector("#neun").addEventListener("click", function () { playSample(nameBeat[8]); });
    function playSample(sample) {
        var sound = new Audio(sample);
        sound.play();
    }
    // Beat abspielen mit Schleife
    var beat = [nameBeat[3], nameBeat[4], nameBeat[5], nameBeat[6]];
    var i = 0;
    document.querySelector("#pBut").addEventListener("click", function () {
        var soundplay = setInterval(function myInterval() {
            playSample(beat[i]);
            i += 1;
            if (i > 4) {
                i = 0;
            }
        }, 500);
        document.querySelector("#sBut").addEventListener("click", function () {
            clearInterval(soundplay);
        });
    });
    // Play-Knopf
    document.getElementById("pBut").addEventListener("click", function () {
        document.getElementById("pBut").classList.add("is-hidden");
        document.getElementById("sBut").classList.remove("is-hidden");
    });
    // Stop-Knopf
    document.getElementById("sBut").addEventListener("click", function () {
        document.getElementById("sBut").classList.add("is-hidden");
        document.getElementById("pBut").classList.remove("is-hidden");
    });
    // Trash-Knopf
    document.querySelector("#tBut").addEventListener("click", function () {
        beat = [];
        console.log("löschen");
    });
    // Mix-Knopf - Korrektur 
    document.querySelector("#mBut").addEventListener("click", mix);
    function mix() {
        beat.length = 0;
        for (var i_1 = 0; i_1 < 3; i_1++) {
            var index_1 = Math.floor(Math.random() * 9);
            playSample(nameBeat[index_1]);
        }
    }
});
// // Mix-Knopf - 1. Versuch
// var muell = document.getElementById("mBut");
// document.querySelector("#mBut").addEventListener("click", function (): void {
//     var muell: number = setInterval(function (): void {
//         playSample(
//             nameBeat[i]);
//         i = Math.floor(Math.random() * 9);
//         console.log(i);
//     },                              500);
// });
//# sourceMappingURL=A8.js.map