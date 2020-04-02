let sortDirection = false;
let tableData = [
    new Person(1, "John", "Doe", 25),
    new Person(2, "James", "Doe", 24),
    new Person(3, "Judy", "Doe", 19),
];
let currentId = Math.max(...tableData.map(i => i.id)) || 0;
let editableCells;

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => addRow());

let checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", () => console.log(tableData));

window.onload = () => {
    loadTableData(tableData);
};

let loadTableData = (tableData) => {
    const tableBody = document.getElementById("tableData");
    let dataHtml = "";

    for (let person of tableData) {
        dataHtml += `
<tr>
<td id="${person.id}" style="display:none;"></td>
<td class="editable name">${person.name}</td>
<td class="editable surname">${person.surname}</td>
<td class="editable age">${person.age}</td>
<td class="actionColumn" onclick="deleteRow(${person.id})"><i class="fa fa-trash"></i></td>
</tr>`;
    }
    tableBody.innerHTML = dataHtml;

    editableCells = document.getElementsByClassName("editable");
    Array.from(editableCells).forEach((el) => {
        el.addEventListener("dblclick", () => {
            el.contentEditable = "true";
        });
        el.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                el.contentEditable = "false";
                let personId = el.parentElement.firstElementChild.id;
                let currentPerson = tableData.find(x => x.id === parseInt(personId));
                currentPerson[el.classList.item(1)] = el.innerHTML;
            }
        });
    });
};

let sortColumn = (columnName) => {
    const dataType = typeof tableData[0][columnName];
    sortDirection = !sortDirection;
    switch (dataType) {
        case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
    }
    loadTableData(tableData);
};

let sortNumberColumn = (sort, columnName) => {
    tableData = tableData.sort((p1, p2) => {
        return sort
            ? p1[columnName] - p2[columnName]
            : p2[columnName] - p2[columnName]
    });
};

let addRow = () => {
    tableData.push(new Person(++currentId, "", "", ""));
    loadTableData(tableData);
};

let deleteRow = (id) => {
    tableData = tableData.filter(i => i.id !== id);
    loadTableData(tableData);
};

function Person(id, name, surname, age) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
}
