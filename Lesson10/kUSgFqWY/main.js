// Створити 3 інпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let table = document.getElementById('table');
let tableForms = document.forms['tableForms'];

tableForms.onsubmit = function (e) {
    e.preventDefault();
    let linesValue = +tableForms.lines.value;
    let cellsValue = +tableForms.cells.value;
    let textValue = tableForms.text.value;

    for (let i = 0; i < linesValue; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            let td = document.createElement('td');
            td.innerText = textValue;
            tr.appendChild(td);

        }

        table.appendChild(tr);

    }

};


