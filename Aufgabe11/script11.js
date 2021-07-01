// Varriablen
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var counterDOMElementOpen;
var counterDOMElementDone;
var artyom = new Artyom();
//Array
var tDA = [
    {
        todosText: "Lorem",
        todosChecked: true
    },
    {
        todosText: "Ipsum",
        todosChecked: false
    },
    {
        todosText: "Dolor",
        todosChecked: false
    }
];
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    counterDOMElementOpen = document.querySelector("#open");
    counterDOMElementDone = document.querySelector("#done");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index_1) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + tDA[index_1].todosChecked + "'><i class='fas fa-check'></i></span>"
                + tDA[index_1].todosText +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index_1);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index_1);
            });
            todosDOMElement.appendChild(todo);
        };
        for (var index_1 = 0; index_1 < tDA.length; index_1++) {
            _loop_1(index_1);
        }
        updateCounter();
        updateOpen();
        updateDone();
    }
    function updateCounter() {
        counterDOMElement.innerHTML = tDA.length + " in total";
    }
    function updateOpen() {
        var open = 0;
        for (var index = 0; index < tDA.length; index++) {
            if (tDA[index].todosChecked == false)
                open++;
        }
        counterDOMElementOpen.innerHTML = open + " open,";
    }
    function updateDone() {
        var done = 0;
        for (var index = 0; index < tDA.length; index++) {
            if (tDA[index].todosChecked == true)
                done++;
        }
        counterDOMElementDone.innerHTML = done + " done";
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            tDA.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false
            });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        tDA[index].todosChecked = !tDA[index].todosChecked;
        drawListToDOM();
    }
    function deleteTodo(index) {
        tDA.splice(index, 1);
        drawListToDOM();
    }
    // Spracherkennung
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            tDA.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
        }
    });
});
//# sourceMappingURL=script11.js.map