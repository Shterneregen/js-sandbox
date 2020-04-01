let addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => addRow());

let sortDirection = false;
let tableData = [
    {id: 1, name: "John", surname: "Doe", age: 25},
    {id: 2, name: "James", surname: "Doe", age: 24},
    {id: 3, name: "Judy", surname: "Doe", age: 19},
];
let currentId = Math.max(...tableData.map(i => i.id)) || 0;

window.onload = () => {
    loadTableData(tableData);
};

let loadTableData = (tableData) => {
    const tableBody = document.getElementById("tableData");
    let dataHtml = "";

    for (let data of tableData) {
        dataHtml += `
<tr>
<td>${data.name}</td>
<td>${data.surname}</td>
<td>${data.age}</td>
<td class="actionColumn" onclick="deleteRow(${data.id})"><i class="fa fa-trash"></i></td>
</tr>`;
    }
    tableBody.innerHTML = dataHtml;
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
    console.log(tableData)
};

let addRow = () => {
    tableData.push({id: currentId++, name: "", surname: "", age: 0});
    loadTableData(tableData);
};

let deleteRow = (id) => {
    tableData = tableData.filter(i => i.id !== id);
    loadTableData(tableData);
};