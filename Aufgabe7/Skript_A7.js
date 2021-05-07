// Aufgabe 7.1
var nameBeat = ['kick.mp3', 'hihat.mp3', 'snare.mp3', 'A.mp3', 'C.mp3', 'F.mp3', 'G.mp3', 'laugh-1.mp3', 'laugh-2.mp3'];
window.addEventListener('load', function () {
    document.querySelector('#eins').addEventListener('click', function () { playSample(nameBeat[0]); });
    document.querySelector('#zwei').addEventListener('click', function () { playSample(nameBeat[1]); });
    document.querySelector('#drei').addEventListener('click', function () { playSample(nameBeat[2]); });
    document.querySelector('#vier').addEventListener('click', function () { playSample(nameBeat[3]); });
    document.querySelector('#fuenf').addEventListener('click', function () { playSample(nameBeat[4]); });
    document.querySelector('#sechs').addEventListener('click', function () { playSample(nameBeat[5]); });
    document.querySelector('#sieben').addEventListener('click', function () { playSample(nameBeat[6]); });
    document.querySelector('#acht').addEventListener('click', function () { playSample(nameBeat[7]); });
    document.querySelector('#neun').addEventListener('click', function () { playSample(nameBeat[8]); });
});
function playSample(sample) {
    var sound = new Audio(sample);
    sound.play();
}
// Aufgabe 7.2
window.addEventListener('load', function () {
    document.querySelector("#playBut").addEventListener('click', function () { playbeat(); });
});
function playbeat() {
    setTimeout(function () {
        playSample(nameBeat[3]);
    }, 500);
    setTimeout(function () {
        playSample(nameBeat[4]);
    }, 1000);
    setTimeout(function () {
        playSample(nameBeat[5]);
    }, 1500);
    setTimeout(function () {
        playSample(nameBeat[6]);
    }, 2000);
    setTimeout(function () {
        playSample(nameBeat[3]);
    }, 2500);
}
//# sourceMappingURL=Skript_A7.js.map