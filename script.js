const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Handle Enter key press
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Handle clicking on tasks and delete button
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data to local storage
function saveData() {
    localStorage.setItem("todoData", listContainer.innerHTML);
}

// Load data from local storage
function loadData() {
    listContainer.innerHTML = localStorage.getItem("todoData") || "";
}

// Load saved tasks when page loads
loadData();