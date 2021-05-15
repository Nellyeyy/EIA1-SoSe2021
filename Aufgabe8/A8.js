// tslint:disable-next-line: typedef
window.addEventListener("load", function () {
    // Drumpad - Button
    var nameBeat = ["kick.mp3", "hihat.mp3", "snare.mp3", "A.mp3", "C.mp3", "F.mp3", "G.mp3", "laugh-1.mp3", "laugh-2.mp3"];
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
    var beat = [nameBeat[3], nameBeat[4], nameBeat[5], nameBeat[6], nameBeat[3]];
    var i = 0;
    var interval;
    var knopf = document.querySelector(".knoepfe");
    var play = document.getElementById("pBut");
    var stop = document.getElementById("sBut");
    var muell = document.getElementById("mBut");
    document.querySelector("#pBut").addEventListener("click", function () {
        var drumMachine = setInterval(function myInterval() {
            playSample(beat[i]);
            i += 1;
            if (i > 4) {
                i = 0;
            }
            console.log("play");
            console.log(i);
        }, 500);
        document.querySelector("#sBut").addEventListener("click", function () {
            clearInterval(drumMachine);
            console.log("stop");
        });
    });
    // Play-Knopf
    document.querySelector("#pBut").addEventListener("click", function () {
        document.querySelector("#pBut").classList.add("is-hidden");
        document.querySelector("#sBut").classList.remove("is-hidden");
    });
    // Stop-Knopf
    document.querySelector("#sBut").addEventListener("click", function () {
        document.querySelector("#sBut").classList.add("is-hidden");
        document.querySelector("#pBut").classList.remove("is-hidden");
    });
    // Trash-Knopf
    document.querySelector("#tBut").addEventListener("click", function () {
        beat = [];
        console.log("löschen");
    });
    // Mix-Knopf
    document.querySelector("#mBut").addEventListener("click", function () {
        var muell = setInterval(function () {
            playSample(nameBeat[i]);
            i = Math.floor(Math.random() * 9);
            console.log(i);
        }, 500);
    });
});
// // Aufgabe 7.2
// window.addEventListener('load', function () {
//     document.querySelector("#playBut").addEventListener('click', function () { playbeat() }
//     )
// })
// function playbeat() {
//     setTimeout(function () {
//         playSample(nameBeat[3]);
//     }, 500)
//     setTimeout(function () {
//         playSample(nameBeat[4]);
//     }, 1000)
//     setTimeout(function () {
//         playSample(nameBeat[5]);
//     }, 1500)
//     setTimeout(function () {
//         playSample(nameBeat[6]);
//     }, 2000)
//     setTimeout(function () {
//         playSample(nameBeat[3]);
//     }, 2500)
// }
//# sourceMappingURL=A8.js.map