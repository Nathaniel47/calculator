const add = function (...numbers){
    return numbers.reduce((sum, number) => sum + number, 0);
}


const subtract = function (...numbers){
    return numbers.reduce((difference, number) => difference -number);
}

const multiply = function (...numbers){
    return numbers.reduce((product, number) => product * number, 1);
}

const divide = function (...numbers){
    return numbers.reduce((quotient, number) => quotient / number);
}


let firstNum = 0;
let secondNum = 0;
let operator;

const operate = function (operator, num1, num2){
    if (operator === "+"){
        return add(num1, num2)
    } 
    else if (operator === "-"){
        return subtract(num1, num2)
    }
    else if (operator === "*"){
        return multiply(num1, num2)
    } 
    else if (operator === "/"){
        return divide(num1, num2)
    };
};

let screen = document.querySelector("#display");

function updateNumVariable(){
    if (firstNum == 0){
        firstNum = button.value;
        screen.appendChild(firstNum);}
    else {
        secondNum = numberButtons.value;
        screen.appendChild(secondNum);
    }
};

let numberButtons = document.querySelectorAll(".numberBtn");
numberButtons.forEach(numberButton => numberButton.addEventListener(click, updateNumVariable));

function updateOperatorVariable(){
   operator = button.value;
   screen.appendChild(operator);
};
let operatorButtons = document.querySelectorAll(".operatorBtn");
operatorButtons.forEach(operatorButton => operatorButton.addEventListener(click, updateOperatorVariable));


console.log(operate("*",7,-5));