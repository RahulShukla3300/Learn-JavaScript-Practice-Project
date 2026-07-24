const button = document.getElementById("button");
const passwordField = document.getElementById("password");

let passwordClearTimer;

button.addEventListener('click', () => {
    clearTimeout(passwordClearTimer);
    

    let text = "RahulShukla@-=12345678973@#$%&*oplkjhgfdsazxcbnloiuhgggffghhjkoplkjjhmnb45789632541125896";
    let password = "";

    for (let i = 0; i < 8; i++) {
        let random = Math.floor(Math.random() * text.length);
        password += text[random];
    }

    passwordField.value = password;

    passwordClearTimer = setTimeout(() => {
        passwordField.value = "";
    }, 5000);
});
