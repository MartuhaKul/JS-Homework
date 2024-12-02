
let button = document.getElementById('button-1');
button.onclick = function (e) {
    e.preventDefault();
    let form = document.forms.form;
    let nameValue = form.name.value;
    let surnameValue = form.surname.value;
    let ageValue = form.age.value;

    let obj = {
        nameValue,
        surnameValue,
        ageValue
    }
    let message = document.getElementById('message');
    message.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;

}

