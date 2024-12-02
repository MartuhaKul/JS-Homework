let block = document.createElement('div');
// - створити блок,

// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');

let cloneBlock = block.cloneNode(true);
document.body.append(block, cloneBlock);

