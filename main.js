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

let display = document.querySelector("#display");

function updateNumVariable(e){
    let val = e.target.value;

    if (operator == undefined || operator == '' ){
        if (firstNum == 0){
            firstNum = val;
            display.value = firstNum;
        } else {
             firstNum += val;
             display.value = firstNum;
        }
       }
    else { 
        if (secondNum == 0){
            secondNum = val;
            display.value = secondNum;
        } else {
             secondNum += val;
             display.value = secondNum;
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
        secondNum = 0;
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
        secondNum = 0;
        display.value = firstNum;
      } 
     else 
      {
        results = operate(operator, Number(firstNum), Number(secondNum));
        display.value = results;
        firstNum = 0;
        secondNum = 0;
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
        firstNum = 0;
        secondNum = 0;
        operator = '';
    })