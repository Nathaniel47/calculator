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


let firstNum;
let secomdNum;
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

console.log(operate("*",7,-5));