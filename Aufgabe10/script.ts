// Varriablen
var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

//interface
interface ToDos {
    todosText: string;
    todosChecked: boolean;
}

//Array
let toDoArray: ToDos[] = [
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

window.addEventListener("load", function (): void {
    
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();

    function drawListToDOM(): void {

        todosDOMElement.innerHTML = "";

        for (let index: number = 0; index < toDoArray.length; index++) {

            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");

            todo.innerHTML = "<span class='check " + toDoArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + toDoArray[index].todosText +
                "<span class='trash fas fa-trash-alt'></span>";

            todo.querySelector(".check").addEventListener("click", function (): void {
                toggleCheckState(index);
            });

            todo.querySelector(".trash").addEventListener("click", function (): void {
                deleteTodo(index);
            });

            todosDOMElement.appendChild(todo);
        }

        updateCounter();
    }

    function updateCounter(): void {
        counterDOMElement.innerHTML = toDoArray.length + " in total";
    }

    function addTodo(): void {

        if (inputDOMElement.value != "") {

            toDoArray.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false
            });

            inputDOMElement.value = "";

            drawListToDOM();
        }
    }

    function toggleCheckState(index: number): void {

        toDoArray[index].todosChecked = !toDoArray[index].todosChecked;

        drawListToDOM();
    }

    function deleteTodo(index: number): void {

        toDoArray.splice(index, 1);

        drawListToDOM();
    }
});