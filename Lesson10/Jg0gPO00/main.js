let input = document.getElementById('convert');
let resultDiv = document.getElementById('result');

input.oninput = function () {
    resultDiv.innerText = +this.value * 2.2;
}