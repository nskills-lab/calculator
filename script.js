let prevOperand = "";
let currentOperand = "";
let prevOperator = "";
let currentOperator = "";
let waitingForSecondOperand = true;
const displayWindow = document.querySelector("#result");
const decimal = document.querySelector("#decimal");

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "ERROR";
    }
    let result = Math.round(100 * (num1 / num2)) / 100;
    return result;
}

function operate(operator, num1, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);

    switch (operator) {
        case "add":
            prevOperand = add(number1, number2);
            break;
        case "subtract":
            prevOperand = subtract(number1, number2);
            break;
        case "divide":
            prevOperand = divide(number1, number2);
            break;
        case "multiply":
            prevOperand = multiply(number1, number2);
            break;
        default:
            console.log("Operator did not match.");
    }
    currentOperand = "";
    prevOperator = "";
    return prevOperand;

}

function updateDisplay(e) {

    let displayValue = this.textContent;

    if (displayWindow.textContent === "0" && displayValue !== ".") {
        displayWindow.textContent = displayValue;

    } else if (!Number.isInteger(Number(displayWindow.textContent)) && displayValue === ".") {
        displayValue = "";
    } else {
        displayWindow.textContent += displayValue;
    }

    if (prevOperand === "" && prevOperator === "") {
        prevOperand += displayValue;
    } else if (prevOperand !== "" && prevOperator === "") {
        prevOperand += displayValue;

    } else if (prevOperator !== "") {
        currentOperand += displayValue;
    }

}

function handleCalculation(operator) {

    if (prevOperator === "") {
        prevOperator = operator;
    } else {
        currentOperator = operator;
    }

    displayWindow.textContent = '';
    if (prevOperator !== "" && prevOperand === "") {
        displayWindow.textContent = "ERROR";
    } else if (prevOperator === "equal" && currentOperand === "") {
        displayWindow.textContent = "ERROR";
    } else if (currentOperator != "" && currentOperand != "") {
        displayWindow.textContent = operate(prevOperator, prevOperand, currentOperand);
    }
    if (decimal.disabled) {
        decimal.disabled = false;
    }

}

function clear() {
    if (displayWindow.textContent === "ERROR") {
        allClear();
    }
    if (displayWindow.textContent !== "0" && displayWindow.textContent.length !== 0) {
        if (prevOperator === "") {
            displayWindow.textContent = displayWindow.textContent.slice(0, -1);
            prevOperand = displayWindow.textContent;
        }
    }
}

function allClear() {
    prevOperand = "";
    currentOperand = "";
    prevOperator = "";
    currentOperator = "";
    displayWindow.textContent = "0";
}

function handleOperators(e) {
    let operator = this.getAttribute("value");
    if (operator === "a-clear") {
        allClear();
    } else if (operator === 'clear') {
        clear();
    } else {
        handleCalculation(operator);
    }
}


const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');

numbers.forEach((number) => {
    number.addEventListener('click', updateDisplay);
});

operators.forEach((operator) => {
    operator.addEventListener('click', handleOperators);
});