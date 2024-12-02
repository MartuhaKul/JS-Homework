// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main','Products','About us','Contacts'];

let menu = document.createElement('ul');
document.body.appendChild(menu);

for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);


}


