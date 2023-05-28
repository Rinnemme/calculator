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
let firstOperand = ""
let secondOperand = ""
let result = ""

function solve(a,b) {
    if (operator === "none") {
        result = firstOperand
        display.textContent = result
    }
    if (operator === "+") {
        console.log(firstOperand + " " + operator + " " + secondOperand)
        result = +a + +b
    } else if(operator === "-") {
        console.log(firstOperand + " " + operator + " " + secondOperand)
        result = +a - +b
    } else if(operator === "x") {
        console.log(firstOperand + " " + operator + " " + secondOperand)
        result = +a * +b
    } else if(operator === "/") {
        console.log(firstOperand + " " + operator + " " + secondOperand)
        result = +a / +b
    }
    display.textContent = Math.round(result*10000000)/10000000
    firstOperand = result
    operator = "none"
    secondOperand=""
}

function clearCalculator() {
    operator = "none"
    display.textContent = ""
    firstOperand = ""
    secondOperand = ""
}

numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        if(operator === "none") {
            display.textContent = display.textContent + button.textContent
            firstOperand = firstOperand + button.textContent
        } else {
            display.textContent = display.textContent + button.textContent
            secondOperand = secondOperand + button.textContent
        }
        if (display.textContent.length>21) {
            display.textContent = display.textContent.slice(-21)
        }
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        if(operator === "none") {
            solve(firstOperand,secondOperand)
        }
        operator = button.textContent
        display.textContent = ""
    })
})

equalsButton.addEventListener("click", function() {
    solve(firstOperand,secondOperand)
})
clearButton.addEventListener("click", clearCalculator)