/* When number is hit
    if operator is none
        display.textContent = display.textContent + this.textContent
        firstOperand = display.textContent
    if operator is something
        display.textContent = display.textContent + this.textContent
        secondOperand = display.textContent
When operator is hit
    if operator is none
        display.textContent = cleared (nothing)
        operator = times (or plus or minus or divide)
    if operator is something
        equals function
        operator = times (or plus or minus or equals)
If equals is hit
    equals function:
    if operator is none
        result = firstOperand
    if operator is something
        equals(firstOperand, secondOperand) {
            if operator is times, const result = number(firstOperand) * number(secondOperand)
            else if operator is plus, const result = number(firstOperand) + number(secondOperand)
            else if operator is minus, const result = number(firstOperand) - number(secondOperand)
            else if operator is divided-by, const result = number(firstOperand) / number(secondOperand)
            display.textContent = result
            firstOperand = result
            operator = none
    } 
    
    */

const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.getElementById("equals")
const clearButton = document.getElementById("clear")
let operator = "none"
