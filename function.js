let equal_pressed = 0;
let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");


window.onload = () => {
    input.value = "";
};


button_input.forEach((button) => {
    button.addEventListener("click", () => {

        if (equal_pressed === 1) {
            input.value = "";
            equal_pressed = 0;
        }


        let button_value = button.value;
        let last_char = input.value.slice(-1);


        if (
            ["*", "/", "+", "-"].includes(button_value) && 
            (input.value === "" || ["*", "/", "+", "-"].includes(last_char)) 
        ) {
            return; 
        }

        input.value += button_value;
    });
});


equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;

    try {
        let solution = eval(inp_val);
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        alert("Entrada inválida");
    }
});


clear.addEventListener("click", () => {
    input.value = "";
});


erase.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});