let time =+prompt('Enter Time 0-59');

if(time >= 0 && time < 15) {
    console.log('Перша частина години');
}else if(time >= 15 && time < 30) {
    console.log('Друга частина години');
}else if(time >= 30 && time < 45) {
    console.log('Третя частина години');
}else if (time >= 45 && time < 60) {
    console.log('Четверта частина години')
}else {
    console.log('Неправильний час')
}