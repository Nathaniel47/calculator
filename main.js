//Functions for the various arithmetic operations

const add = function (...numbers){
    return numbers.reduce((sum, number) => sum + number, 0);
}


const subtract = function (...numbers){
    return numbers.reduce((difference, number) => difference - number);
}

const multiply = function (...numbers){
    return numbers.reduce((product, number) => product * number, 1);
}

const divide = function (...numbers){
    return numbers.reduce((quotient, number) => quotient / number);
}

//Initialization of operator and operand variables
let firstNum = '';
let secondNum = '';
let operator;

//Function for arithmetic operation
const operate = function (operator, num1, num2){
    if (operator === "+"){
        return add(Number(num1), Number(num2))
    } 
    else if (operator === "-"){
        return subtract(Number(num1), Number(num2))
    }
    else if (operator === "*"){
        return multiply(Number(num1), Number(num2))
    } 
    else if (operator === "/"){
        return divide(Number(num1), Number(num2))
    };
};

let display = document.querySelector("#display");

//function to update operand variables when a button is clicked
function updateNumVariable(e){
    let val = e.target.value;

    if (operator == undefined || operator == '' ){
        if (firstNum === ''){
            if (val === "."){
                firstNum = '0.';
                display.value = firstNum;
            }
            else{
            firstNum = val;
            display.value = firstNum;
            }
        } 
        else{
            if (val === "."){
                if(!firstNum.includes(".")){
                    firstNum += val;
                    display.value = firstNum;
                }
            }
            else{
                firstNum += val;
                display.value = firstNum;
                }
            }
    }
    else {
        if (secondNum === ''){
            if (val === "."){
                secondNum = '0.';
                display.value = secondNum;
            }
            else{
                secondNum = val;
                display.value = secondNum;
            }
        }
        else{
            if (val === "."){
                if(!secondNum.includes(".")){
                    secondNum += val;
                    display.value = secondNum;
                }
            }
            else{
                secondNum += val;
                display.value = secondNum;
                }
            }

    }
    
};

let numberButtons = document.querySelectorAll(".numberBtn");
numberButtons.forEach(numberButton => numberButton.addEventListener("click", updateNumVariable));

function updateOperatorVariable(e){
    let val = e.target.value;
    let results;
    
   if (val !== "=")
   {
     if (operator === "+" || operator === "-" || operator === "*" || operator === "/")
      {
        results = operate(operator, Number(firstNum), Number(secondNum));
        display.value = results;
        firstNum = results;
        secondNum = '';
        operator = val;
      }  
     else 
      {
        operator = val;
      } 
   }
    else 
    { 
        if (operator === '')
      {
        alert("Wrong or no operator input. Input an operator.")
        secondNum = '';
        display.value = firstNum;
      } 
     else 
      {
        results = operate(operator, Number(firstNum), Number(secondNum));
        display.value = results;
        firstNum = '';
        secondNum = '';
        operator = '';
   
     }
    } 
};
let operatorButtons = document.querySelectorAll(".operatorBtn");
operatorButtons.forEach(operatorButton => operatorButton.addEventListener("click", updateOperatorVariable));

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => 
    {
        display.value = "";
        firstNum = '';
        secondNum = '';
        operator = '';
    })