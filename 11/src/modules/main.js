function getPassword() {
    const question = prompt('Tell me the password, please!');
    const password = 'mypassword';
    if(question === password) {
        alert("It's ok :3");
    } else {
        getPassword();
    }
}

getPassword();