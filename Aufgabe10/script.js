// Varriablen
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
//Array
var toDoArray = [
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
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index_1) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + toDoArray[index_1].todosChecked + "'><i class='fas fa-check'></i></span>"
                + toDoArray[index_1].todosText +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index_1);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index_1);
            });
            todosDOMElement.appendChild(todo);
        };
        for (var index_1 = 0; index_1 < toDoArray.length; index_1++) {
            _loop_1(index_1);
        }
        updateCounter();
    }
    function updateCounter() {
        counterDOMElement.innerHTML = toDoArray.length + " in total";
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            toDoArray.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false
            });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        toDoArray[index].todosChecked = !toDoArray[index].todosChecked;
        drawListToDOM();
    }
    function deleteTodo(index) {
        toDoArray.splice(index, 1);
        drawListToDOM();
    }
});
//# sourceMappingURL=script.js.map