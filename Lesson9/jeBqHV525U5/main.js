let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('wrap');
    document.body.append(div);

    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerText = item.title;
    p.innerText = item.monthDuration;
    div.append(h2, p);

}