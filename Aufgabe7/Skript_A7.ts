// Aufgabe 7.1

window.addEventListener('load', function()  {
    document.querySelector('#eins').addEventListener('click', function (){playSample('../Aufgabe7/kick.mp3')})
    document.querySelector('#zwei').addEventListener('click', function (){playSample('../Aufgabe7/hihat.mp3')})
    document.querySelector('#drei').addEventListener('click', function (){playSample('../Aufgabe7/snare.mp3')})
    document.querySelector('#vier').addEventListener('click', function (){playSample('../Aufgabe7/A.mp3')})
    document.querySelector('#fuenf').addEventListener('click', function (){playSample('../Aufgabe7/C.mp3')})
    document.querySelector('#sechs').addEventListener('click', function (){playSample('../Aufgabe7/F.mp3')})
    document.querySelector('#sieben').addEventListener('click', function (){playSample('../Aufgabe7/G.mp3')})
    document.querySelector('#acht').addEventListener('click', function (){playSample('../Aufgabe7/laugh-1.mp3')})
    document.querySelector('#neun').addEventListener('click', function (){playSample('../Aufgabe7/laugh-2.mp3')})
})

function playSample(sample: string): void{
    var sound: HTMLAudioElement = new Audio (sample);
    sound.play();
}

// Aufgabe 7.2

// function playButton () {

// }
// window.addEventListener ('load', function (){
//     document.querySelector('#playBut').addEventListener('click', function(){setInterval( '../Aufgabe7/play-button.png', 500)})
// })

// var playButton: string [] = ['../Aufgabe7/kick.mp3', '../Aufgabe7/snare.mp3', '../Aufgabe7/hihat.mp3']


// function Play () {
//     var Kick = setInterval(party, 300);
//     var Beat: string [] = [".../Aufgabe7/kick.mp3", ".../Aufgabe7/hihat.mp3", ".../Aufgabe7/snare.mp3",".../Aufgabe7/hihat.mp3",];
//     var index:number = 0;
//     function party (){
//     var sequence:HTMLAudioElement = new Audio(Beat [index]);
//     sequence.play();
//     index += 1;
//     if (index>3) index=0;
//     };};
        

    // setInterval(function() { // Anweisungen }, 500);