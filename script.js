const calculator = document.querySelector('.cal-buttons');
const keys = calculator.querySelector('.numbers');
const display = document.querySelector('span')
// display.textContent = 20000

const calculate = (n1, operator, n2) => {
    let result = '';
    if(operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
    }
    return result
}

keys.addEventListener('click', e => {
    if(e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType

        if(!action) {
            console.log('number key');
            if(displayNum === '0' || previousKeyType === "operator") {
                display.textContent = keyContent
            } else {
                display.textContent = displayNum + keyContent
            }
        }

        if( action === 'multiply'|| action === 'divide' || action === 'subtract' || action === 'add') {
            console.log('operator key!');
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayNum;
            calculator.dataset.operator = action
        }

        if(action === "decimal") {
            display.textContent = displayNum + '.'
            console.log("decimal key");
        }

        if(action === "clear") {
            console.log('clear key');
            display.textContent = ''
        }


        if(action === 'calculate'){
            const firstValue =  calculator.dataset.firstValue;
            const operator = calculator.dataset.operator
            const secondValue = displayNum

            display.textContent = calculate(firstValue, operator, secondValue)
            console.log('calculate key');
        }

        // Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))    
    }
})


        