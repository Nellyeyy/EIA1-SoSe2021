//Variablen
const tasks: HTMLElement = document.querySelector("#Tasks");

const undone: HTMLElement = document.querySelector(".fa-circle");
const done: HTMLElement = document.querySelector(".fa-check-circle");

var inputTask: HTMLInputElement = document.querySelector("#Input");
var i: number = 0;

//Aufgabe hinzufügen
document.querySelector(".fa-plus-circle").addEventListener("click", addAufgabe);
document.querySelector("#Input").addEventListener("keydown", function (e: KeyboardEvent): void {
    if (e.key == "Enter") {
        addAufgabe();
    }
});

function addAufgabe(): void {
    let li: HTMLElement = document.createElement("li");
    const trash: HTMLElement = document.createElement("i");
    trash.className = "far fa-trash-alt";
    const check: HTMLElement = document.createElement("i");
    check.className = "far fa-circle";

    if (inputTask.value == "") {
        alert("Please write something");
    }
    else {
        tasks.appendChild(li);
        li.innerHTML = inputTask.value;
        li.appendChild(trash);
        li.appendChild(check);
        setTimeout(function (): void {
            inputTask.value = "";
        },         200);
        aufgaben();
        go();
    }
}

//Anzahl Aufgaben
function aufgaben(): void {
    var zahl: number = document.getElementsByTagName("li").length;
    document.querySelector(".total").innerHTML = zahl + " Aufgaben";
}

//Abhacken & Löschen
var icons: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("i");
function go(): void {
    for (i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", ready);
    }
}

function ready(): void {
    if (this.classList.contains("fa-circle")) {
        this.classList.replace("fa-circle", "fa-check-circle");
        this.parentNode.classList.add("done");
    }

    else if (this.classList.contains("fa-trash-alt")) {
        this.parentElement.remove();
        aufgaben();
    }

    else {
        this.classList.replace("fa-check-circle", "fa-circle");
        this.parentNode.classList.remove("done");
    }
}
