const todoArray = JSON.parse(localStorage.getItem("storedTodo"));
displayTodo();

//this part prevents the default form submission and page refreshing.
formElem = document.querySelector("form");
formElem.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
});

formElem.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        inputTodo();
    }
});

function inputTodo() {
    let inputValue = document.querySelector("#input-task").value;

    const todoObject = {
        name: inputValue,
        completed: false,
    };

    if (inputValue) {
        todoArray.push(todoObject);
        document.querySelector("#input-task").value = "";
        displayTodo();
        localStorage.setItem("storedTodo", JSON.stringify(todoArray));
    }
}

function displayTodo() {
    let HTML = "";
    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].completed === false) {
            HTML += `<li class="tasks">
            <input type="checkbox" id="check-done-${i}" />
    
            <label for="check-done-${i}" class="custom-checkbox" onclick="markComplete(${i});">
                <i class="fa-solid fa-check"></i>
            </label>
    
            <label for="check-done-${i}" class="task-description"  onclick="markComplete(${i});"
                >${todoArray[i].name}
            </label>
    
            <button class="del-btn" onclick = "deleteTodo(${i});">
                <i class="fa-solid fa-trash"></i>
            </button>
            </li>`;
        } else if (todoArray[i].completed === true) {
            HTML += `<li class="tasks">
            <input type="checkbox" id="check-done-${i}" class="new-class" checked/>
    
            <label for="check-done-${i}" class="custom-checkbox" onclick="markComplete(${i});">
                <i class="fa-solid fa-check"></i>
            </label>
    
            <label for="check-done-${i}" class="task-description"  onclick="markComplete(${i});"
                >${todoArray[i].name}
            </label>
    
            <button class="del-btn" onclick = "deleteTodo(${i});">
                <i class="fa-solid fa-trash"></i>
            </button>
            </li>`;
        }
    }

    document.querySelector(".todoList").innerHTML = HTML;
}

function deleteTodo(i) {
    todoArray.splice(i, 1);
    displayTodo();
    localStorage.setItem("storedTodo", JSON.stringify(todoArray));
}

function markComplete(i) {
    let checkbox = document.querySelector(`#check-done-${i}`);
    //this part works when the checkbox is unchecked
    if (checkbox.checked) {
        checkbox.classList.remove("new-class");
        todoArray[i].completed = false;
    }

    //this part works when checkbox is checked
    else if (!checkbox.checked) {
        checkbox.classList.add("new-class");
        todoArray[i].completed = true;
    }

    localStorage.setItem("storedTodo", JSON.stringify(todoArray));
}
