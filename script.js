// script.js
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            try {
                display.value = math.evaluate(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id == "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    });
});
