let num1 = 0;
let num2 = 0;
let displayWindow = document.querySelector('#display');

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
        return 'ERROR';
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {

    switch (operator) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'divide':
            return divide(num1, num2);
        case 'multiply':
            return multiply(num1, num2);

    }

}

function display(e) {

    let displayValue = this.textContent;
    displayWindow.textContent += displayValue;

}
const numbers = document.querySelectorAll('.numbers');
console.log(numbers);
numbers.forEach((number) => {
    console.log('in display method');
    number.addEventListener('click', display);
})