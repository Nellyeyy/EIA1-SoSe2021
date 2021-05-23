//Variablen
var tasks = document.querySelector("#Tasks");
var undone = document.querySelector(".fa-circle");
var done = document.querySelector(".fa-check-circle");
var inputTask = document.querySelector("#Input");
var i = 0;
//Aufgabe hinzufügen
document.querySelector(".fa-plus-circle").addEventListener("click", addAufgabe);
document.querySelector("#Input").addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        addAufgabe();
    }
});
function addAufgabe() {
    var li = document.createElement("li");
    var trash = document.createElement("i");
    trash.className = "far fa-trash-alt";
    var check = document.createElement("i");
    check.className = "far fa-circle";
    if (inputTask.value == "") {
        alert("Please write something");
    }
    else {
        tasks.appendChild(li);
        li.innerHTML = inputTask.value;
        li.appendChild(trash);
        li.appendChild(check);
        setTimeout(function () {
            inputTask.value = "";
        }, 200);
        aufgaben();
        go();
    }
}
//Anzahl Aufgaben
function aufgaben() {
    var zahl = document.getElementsByTagName("li").length;
    document.querySelector(".total").innerHTML = zahl + " Aufgaben";
}
//Abhacken & Löschen
var icons = document.getElementsByTagName("i");
function go() {
    for (i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", ready);
    }
}
function ready() {
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
//# sourceMappingURL=A9.js.map