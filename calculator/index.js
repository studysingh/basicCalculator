const display_text = document.querySelector('#display-text')
let currentInput = ''

function getvalue(value) {
    currentInput += value
    display_text.value = currentInput
}

function calculate(){
    let ans = eval(currentInput)
    currentInput = ans.toString()
    display_text.value = currentInput
    ans = 0
}

function clearDisplay(){
    currentInput = ''
    display_text.value = currentInput
}

function delete_one_char(){
    currentInput = currentInput.slice(0,-1)
    display_text.value = currentInput
}