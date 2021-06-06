// Varriablen
var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var counterDOMElementOpen: HTMLElement;
var counterDOMElementDone: HTMLElement;

declare var Artyom: any;
const artyom: any = new Artyom();

//interface
interface ToDos {
    todosText: string;
    todosChecked: boolean;
}

//Array
let tDA: ToDos[] = [
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
    counterDOMElementOpen = document.querySelector("#open");
    counterDOMElementDone = document.querySelector("#done");


    addButtonDOMElement.addEventListener("click", addTodo);


    drawListToDOM();


    function drawListToDOM(): void {

        todosDOMElement.innerHTML = "";


        for (let index: number = 0; index < tDA.length; index++) {


            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");

            todo.innerHTML = "<span class='check " + tDA[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + tDA[index].todosText +
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
        updateOpen();
        updateDone();

    }

    function updateCounter(): void {
        counterDOMElement.innerHTML = tDA.length + " in total";
    }

    function updateOpen(): void {
        let open: number = 0;
        for (var index: number = 0; index < tDA.length; index++) {
            if (tDA[index].todosChecked == false)
                open++;
        }
        counterDOMElementOpen.innerHTML = open + " open,";


    }

    function updateDone(): void {
        let done: number = 0;
        for (var index: number = 0; index < tDA.length; index++) {
            if (tDA[index].todosChecked == true)
                done++;
        }
        counterDOMElementDone.innerHTML = done + " done";


    }

    function addTodo(): void {

        if (inputDOMElement.value != "") {

            tDA.unshift({

                todosText: inputDOMElement.value,


                todosChecked: false
            });

            inputDOMElement.value = "";

            drawListToDOM();
        }
    }

    function toggleCheckState(index: number): void {

        tDA[index].todosChecked = !tDA[index].todosChecked;

        drawListToDOM();
    }

    function deleteTodo(index: number): void {

        tDA.splice(index, 1);

        drawListToDOM();
    }

    // Spracherkennung

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            tDA.unshift({
                todosText: wildcard,
                todosChecked: false
            });

            function startContinuousArtyom(): void {
                artyom.fatality();

                setTimeout(
                    function (): void {
                        artyom.initialize({
                            lang: "de-DE",
                            continuous: true,
                            listen: true,
                            interimResults: true,
                            debug: true
                        }).then(function (): void {
                            console.log("Ready!");
                        });
                    },
                    250);
            }

            startContinuousArtyom();
            
});