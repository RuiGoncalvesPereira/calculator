//Created by Rui Goncalves Pereira

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    let input = display.value;
    let result = input.split(/(\+|\-|\*|\/|\%)/) // Operators
    let antwort = parseFloat(result[0]);

    for (let i = 1; i < result.length; i += 2) {
        let operator = result[i]; // Operator
        let nextNum = parseFloat(result[i + 1]); // Next number

        // Perform operation based on the operator
        switch (operator) {
            case "+":
                antwort += nextNum;
                break;
            case "-":
                antwort -= nextNum;
                break;
            case "*":
                antwort *= nextNum;
                break;
            case "/":
                antwort /= nextNum;
                break;
            case "%":
                antwort %= nextNum;
                break;
        }
    }

    return display.value = antwort;
}


function clearDisplay() {
    display.value = "";
}