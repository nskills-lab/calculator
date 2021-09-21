let prevOperand = "";
let currentOperand = "";
let prevOperator = "";
let currentOperator = "";
let waitingForSecondOperand = true;
let numbersArr = [];
let displayWindow = document.querySelector('#display');


function add(num1, num2) {
    let result = num1 + num2;
    console.log(result)
    return result;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'ERROR';
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    console.log(number1);
    console.log(number2);

    switch (operator) {
        case 'add':
            prevOperand = add(number1, number2);
            break;
        case 'subtract':
            prevOperand = subtract(number1, number2);
            break;
        case 'divide':
            prevOperand = divide(number1, number2);
            break;
        case 'multiply':
            prevOperand = multiply(number1, number2);
            break;
        default:
            console.log("Operator did not match");

    }
    currentOperand = "";
    prevOperator = "";
    console.log(prevOperand);
    return prevOperand;

}

function display(e) {

    let displayValue = this.textContent;
    // if (operator === "equal" && (prevOperand === "" || prevOperand === "")) {
    //     displayWindow.textContent = "ERROR";
    // }

    if (displayWindow.textContent === '0') {
        displayWindow.textContent = displayValue;
    } else {
        displayWindow.textContent += displayValue;
    }

    if (prevOperand === "" && currentOperator === "") {
        prevOperand = displayWindow.textContent;
    } else {
        currentOperand = displayWindow.textContent
    }

}

function handleOperation(e) {

    if (prevOperator === "") {
        prevOperator = this.getAttribute('value');

    } else {
        currentOperator = this.getAttribute('value');

    }



    displayWindow.textContent = '';
    console.log(currentOperand);
    console.log(prevOperand);
    if (currentOperator !== "" && currentOperand !== "") {
        displayWindow.textContent = operate(prevOperator, prevOperand, currentOperand);
        console.log(displayWindow.textContent);

    }


}
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');

numbers.forEach((number) => {
    number.addEventListener('click', display);
})

operators.forEach((operator) => {
    operator.addEventListener('click', handleOperation);
});