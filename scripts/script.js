const todoArray = [];

function inputTodo() {
    let inputValue = document.querySelector("#input-task").value;
    todoArray.push(inputValue);
    document.querySelector("#input-task").value = "";
    displayTodo();
}

function displayTodo() {
    let HTML = "";
    for (let i = 0; i < todoArray.length; i++) {
        HTML += `<li class="tasks">
            <input type="checkbox" id="check-done-${i}" />
    
            <label for="check-done-${i}" class="custom-checkbox">
                <i class="fa-solid fa-check"></i>
            </label>
    
            <label for="check-done-${i}" class="task-description"
                >${todoArray[i]}
            </label>
    
            <button class="del-btn" onclick = "deleteTodo(${i});">
                <i class="fa-solid fa-trash"></i>
            </button>
            </li>`;
    }

    document.querySelector(".todoList").innerHTML = HTML;
}

function deleteTodo(i) {
    todoArray.splice(i, 1);
    displayTodo();
}
