let arrayOfUsers = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.username} ${user.age}</div>`);
    }
};

arrayOfUsers([
    { id: 1, username: 'kokosik', age: 12 },
    { id: 2, username: 'pepsi', age: 10 },
    { id: 3, username: 'lapka', age: 15 },
    { id: 4, username: 'bysya', age: 12 },
    { id: 5, username: 'pechenka', age: 11 }
]);
