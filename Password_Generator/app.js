const passwordBox = document.getElementById("password");
const length = 8;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$&*?";
const allchars = uppercase + lowercase + number + symbol;

function create() {
    let password = "";


    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    passwordBox.value = password;
}

function copy() {
    passwordBox.select();
    document.execCommand("copy");
}
