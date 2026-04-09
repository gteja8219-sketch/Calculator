const screen = document.querySelector("#screen-top");
const buttons = document.querySelectorAll("#btn button");

let input = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        if (value === "c") {
            input = "";
            screen.innerText = "0";
        }
        else if (value === "=") {
            try {
                input = eval(input);
                screen.innerText = input;
            } catch {
                screen.innerText = "Error";
                input = "";
            }
        }
        else {
            input += value;
            screen.innerText = input;
        }
    });
});