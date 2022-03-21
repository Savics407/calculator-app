const display = document.querySelector("span");
const controlButtons = document.querySelector('.numbers').children
const allSymbols = [ '+', '-', 'x', '%', 'C', '=', '/']

let firstValue = ''
let secondValue = ''
let symbol = ''
let result = ""

const calculate = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    if(symbol === '+') result = firstValue + secondValue
    if(symbol === '-') result = firstValue - secondValue
    if(symbol === 'x') result = firstValue * secondValue
    if(symbol === '/') result = firstValue / secondValue
    if(symbol === '%') result = firstValue / 100

    display.innerText = result
    firstValue = result
    secondValue = ''
}

for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const btnValue = button.innerText
        const btnValueIsSymbol = allSymbols.includes(btnValue)

        if(!secondValue && btnValue === '=') return null
        if(btnValue === "C") {
            firstValue = secondValue = symbol = ''
            return display.innerText = ''
        }
        
        if(firstValue && btnValueIsSymbol) {
            secondValue && calculate()
            symbol = btnValue
        } else if (!symbol) firstValue += btnValue
        else if (symbol) secondValue += btnValue

        if(btnValue !== '=')
        display.innerText += btnValue;
    })
}

    const notFunctional = document.querySelectorAll('nothing')
    squareRoot.addEventListener('click', () => {
    alert('Not Functional Yet!')
    })


/*
 * ASSIGNMENT  

 * TODO: Once I have gotten my result and I want to start a new calculation... once a new number is click replace the cureent display with the clicked number.

 * TODO: ADD BACKSPACE FUNCTIONALITY
 * 
 * 
 * TODO: If the last character in the display is a symbol and the user clicks on another symbol, replace the last character with the new symbol
 * 
 *
 * TODO: If the result is Zero the calculator stops calculating... fix it 
 * 
 */
