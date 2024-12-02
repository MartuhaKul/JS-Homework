
let message = document.createElement('div');
message.classList.add('message');
document.body.appendChild(message);

let button = document.getElementById('button-1');
button.onclick = function checkAge()
{
    let messageDiv = document.getElementsByClassName('message')[0];
    let age = document.getElementById('age');

    if ( !age.value || age.value < 0) {
        messageDiv.innerText = "Please enter a valid age.";

    }else if (age.value < 18){
        messageDiv.innerText = "You are under 18.";
    }else {
        messageDiv.innerText = "You are 18 or older.";
    }
}



