let input = "";
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((buttons) => {
    buttons.addEventListener("click", function () {
        const value = buttons.textContent.trim();

        if ( value === "=") {
            try {
                input = String(eval(input));
                display.value = input;
            } catch (error) {
                display.value = "error";
                input = "";
            }
            
        } else if ( value === "⌫") {
                input = input.slice(0,-1);
                display.value = input;
        } else if ( value === "AC") {
            input = "";
            display.value = "";
        } else  {
            input += value;
            display.value = input;
        }
    })
})