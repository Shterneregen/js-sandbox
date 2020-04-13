import "./style.css";

const Sorting = {
    RECORDS_ASC: {id: 0, name: "Text (Asc)"},
    RECORDS_DESC: {id: 1, name: "Text (Desc)"},
    CREATION_DATE_ASC: {id: 2, name: "Date creation (Asc)"},
    CREATION_DATE_DESC: {id: 3, name: "Date creation (Desc)"}
};

const Status = {
    OPEN: {state: false, name: "Open"},
    DONE: {state: true, name: "Done"}
};

let tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
let currentTaskId = tasksList.length !== 0 ? Math.max(...tasksList.map(i => i.id)) || 0 : 0;

let currentOpenTasksSorting = localStorage.getItem("currentOpenTasksSorting") || Sorting.RECORDS_ASC.id;
let currentDoneTasksSorting = localStorage.getItem("currentDoneTasksSorting") || Sorting.RECORDS_ASC.id;

let newTaskText = document.getElementById("newTaskText");

let addNewTaskButton = document.getElementById("addNewTaskButton");
addNewTaskButton.addEventListener("click", addNewTask);
newTaskText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addNewTask()
    }
});

let openTasksBlock = document.getElementById("openTasksBlock");
let doneTasksBlock = document.getElementById("doneTasksBlock");

let headerSearchField = document.getElementById("headerSearchField");
headerSearchField.addEventListener("input", () => loadAllTasks(headerSearchField.value));

window.onload = () => {
    loadAllTasks();
};

let loadTasks = (taskList, tasksBlock, status) => {
    if (taskList.length === 0) {
        tasksBlock.innerHTML = "";
        return;
    }

    let dataHtml = "";
    let editableClass = "editable" + status.name;
    let clearButtonId = "clear-button" + status.name;
    let checkboxClass = "checkbox" + status.name;
    let trashCanIconClass = "trash-can-icon" + status.name;
    let orderSelectorId = "orderSelector" + status.name;

    dataHtml += `
<div class="sortingBlock">
<span>${status.name}</span>
<select id="${orderSelectorId}" class="sorting"></select>
</div>
`;

    for (let task of taskList) {

        dataHtml += `
<div class="taskBlock">
<span id="${task.id}" style="display:none;"></span>
<input type="checkbox" class="css-checkbox ${checkboxClass}">
<div class="editable ${editableClass}">${task.text}</div>
`;
        dataHtml += `
<div class="timeBlock">
<span>${formatAMPM(task.creationDate)}</span>`;
        if (task.dueDate) {
            dataHtml += `<span>${formatAMPM(task.dueDate)}</span>`;
        }
        dataHtml += `
</div>

<div class="trash-can-icon-block">
<svg class="trash-can-icon ${trashCanIconClass}"></svg>
</div>
</div>`;
    }

    dataHtml += `
<a id="${clearButtonId}" class="clearButton">Clear "${status.name}" list</a>
<br/><br/>`;
    tasksBlock.innerHTML = dataHtml;

    let checkboxes = document.getElementsByClassName(checkboxClass);
    Array.from(checkboxes).forEach((el) => {
        el.checked = status.state;
        el.addEventListener("click", () => {
            let currentTaskId = el.parentElement.firstElementChild.id;
            let currentTask = taskList.find(x => x.id === parseInt(currentTaskId));
            currentTask.status = !currentTask.status;
            if (currentTask.status) {
                currentTask.dueDate = new Date();
            } else {
                currentTask.dueDate = undefined;
            }
            loadAllTasks();
        })
    });

    let clearButton = document.getElementById(clearButtonId);
    clearButton.addEventListener("click", () => {
        if (confirm(`Are you sure you want to clear "${status.name}" list?`)) {
            clearList(status.state)
        }
    });

    let editableTexts = document.getElementsByClassName(editableClass);
    Array.from(editableTexts).forEach((el) => {
        el.addEventListener("dblclick", () => {
            el.contentEditable = "true";
            el.setAttribute("style", "border-bottom: 1px solid #e0e0e0");
        });
        el.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                let currentTaskId = el.parentElement.firstElementChild.id;
                let currentTask = taskList.find(x => x.id === parseInt(currentTaskId));
                currentTask.text = el.innerHTML;
                loadAllTasks();
            }
        });
        el.addEventListener("keydown", (e) => {
            if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27 || e.key === 27) {
                loadAllTasks();
            }
        });
    });

    let trashCans = document.getElementsByClassName(trashCanIconClass);
    Array.from(trashCans).forEach((el) => {
        el.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete the task?")) {
                let currentTaskId = el.parentElement.parentElement.firstElementChild.id;
                deleteTask(parseInt(currentTaskId));
            }
        })
    });

    let orderSelector = document.getElementById(orderSelectorId);
    for (let sortItem in Sorting) {
        let sort = Sorting[sortItem];
        let opt = document.createElement("option");
        opt.innerHTML = sort.name;
        opt.value = sort.id;
        switch (status) {
            case Status.OPEN:
                opt.selected = opt.value === currentOpenTasksSorting;
                break;
            case Status.DONE:
                opt.selected = opt.value === currentDoneTasksSorting;
                break;
        }
        orderSelector.appendChild(opt);
    }
    orderSelector.onchange = () => {
        switch (status) {
            case Status.OPEN:
                currentOpenTasksSorting = orderSelector.value;
                localStorage.setItem("currentOpenTasksSorting", orderSelector.value);
                loadOpenTasks();
                break;
            case Status.DONE:
                currentDoneTasksSorting = orderSelector.value;
                localStorage.setItem("currentDoneTasksSorting", orderSelector.value);
                loadDoneTasks();
                break
        }
    };
};

function addNewTask() {
    let taskText = newTaskText.value;
    if (!taskText) {
        return;
    }
    tasksList.push(new TaskRecord(++currentTaskId, taskText, new Date(), Status.OPEN.state));
    newTaskText.value = "";
    loadAllTasks();
}

function deleteTask(taskId) {
    tasksList = tasksList.filter(i => i.id !== taskId);
    loadAllTasks();
}

function clearList(status) {
    tasksList = tasksList.filter(i => i.status !== status);
    loadAllTasks();
}

function loadOpenTasks(searchText) {
    let openTasksList = tasksList.filter(i => i.status === Status.OPEN.state);
    openTasksList = sortTasks(openTasksList, currentOpenTasksSorting);
    if (searchText) {
        openTasksList = openTasksList.filter(task => task.text.toUpperCase().indexOf(searchText.toUpperCase()) >= 0)
    }
    loadTasks(openTasksList, openTasksBlock, Status.OPEN);
}

function loadDoneTasks(searchText) {
    let doneTasksList = tasksList.filter(i => i.status === Status.DONE.state);
    doneTasksList = sortTasks(doneTasksList, currentDoneTasksSorting);
    if (searchText) {
        doneTasksList = doneTasksList.filter(task => task.text.toUpperCase().indexOf(searchText.toUpperCase()) >= 0)
    }
    loadTasks(doneTasksList, doneTasksBlock, Status.DONE);
}

function loadAllTasks(searchText) {
    loadOpenTasks(searchText);
    loadDoneTasks(searchText);
    localStorage.setItem("tasks", JSON.stringify(tasksList));
}

function sortTasks(tasks, currentTasksSorting) {
    let sortedOpenTasksList = tasks;
    switch (parseInt(currentTasksSorting)) {
        case Sorting.CREATION_DATE_ASC.id:
            sortedOpenTasksList = tasks.sort(compareValues("creationDate"));
            break;
        case Sorting.CREATION_DATE_DESC.id:
            sortedOpenTasksList = tasks.sort(compareValues("creationDate", "desc"));
            break;
        case Sorting.RECORDS_ASC.id:
            sortedOpenTasksList = tasks.sort(compareValues("text"));
            break;
        case Sorting.RECORDS_DESC.id:
            sortedOpenTasksList = tasks.sort(compareValues("text", "desc"));
            break;
    }
    return sortedOpenTasksList;
}

function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            console.log(`property ${key} doesn't exist on either object`);
            return 0;
        }

        const varA = (typeof a[key] === "string") ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === "string") ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === "desc") ? (comparison * -1) : comparison
        );
    };
}

function formatAMPM(date) {
    date = new Date(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour "0" should be "12"
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
}

function TaskRecord(id, text, creationDate, status, dueDate) {
    this.id = id;
    this.text = text;
    this.creationDate = creationDate;
    this.status = status;
    this.dueDate = dueDate;
}

