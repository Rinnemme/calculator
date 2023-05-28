/* Define our variables */

const clearButton = document.getElementById("clear")
const equalsButton = document.getElementById("equals")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
let firstOperand = ""
let operator = "none"
let result = ""
let secondOperand = ""

/* Number button inputs */

numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        if(operator === "none") {
            display.textContent = display.textContent + button.textContent
            firstOperand = firstOperand + button.textContent
        } else {
            display.textContent = display.textContent + button.textContent
            secondOperand = secondOperand + button.textContent
        }
        if (display.textContent.length>22) {
            display.textContent = display.textContent.slice(-22)
        }
    })
})

/* Big boy solve function */

function solve(a,b) {
    if (operator === "none") {
        result = firstOperand
        display.textContent = result
    }
    if (operator === "+") {
        result = +a + +b
    } else if(operator === "-") {
        result = +a - +b
    } else if(operator === "x") {
        result = +a * +b
    } else if(operator === "/") {
        result = +a / +b
    }
    display.textContent = result
    firstOperand = result
    operator = "none"
    secondOperand=""
}

/* Operator button */

operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        if(operator === "none") {
            solve(firstOperand,secondOperand)
        }
        operator = button.textContent
        display.textContent = ""
    })
})

/* Equals button */

equalsButton.addEventListener("click", function() {
    solve(firstOperand,secondOperand)
})

/* Clear button */

function clearCalculator() {
    operator = "none"
    display.textContent = ""
    firstOperand = ""
    secondOperand = ""
}

clearButton.addEventListener("click", clearCalculator)