let num = +localStorage.getItem('number');
num += 1;
localStorage.setItem('number', num);

let block = document.getElementById('numValue');
block.innerText = num;
