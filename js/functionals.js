function getInnerTextById(buttonId){
    const inputButtonNumber = document.getElementById(buttonId);
    const inputNumber = inputButtonNumber.innerText;
    return inputNumber;
}
function getInputFieldValueById(fieldId){
    const inputField = document.getElementById(fieldId);
    const fieldValue = inputField.value ;
    return fieldValue;
}
function setFieldValueById(fieldId, newFieldValue){
    const inputField = document.getElementById(fieldId);
    inputField.value = newFieldValue ;
}
function getNumberFromButtonToDisplay(buttonId){
    const inputNumber = getInnerTextById(buttonId);

    const previousNumbers = getInputFieldValueById('operand-two-field');

    const newNumbers = previousNumbers + inputNumber;

    setFieldValueById('operand-two-field', newNumbers);
}
function operatorButton(operatorSign){
    const firstOperand = getInputFieldValueById('operand-two-field');
    const secondOperand ='';
    setFieldValueById('operand-one-field', firstOperand);
    setFieldValueById('operator-field', operatorSign);
    setFieldValueById('operand-two-field', secondOperand);

}
function operatorWork(result){
    const emptyField = '';
    setFieldValueById('operand-one-field', emptyField);
    setFieldValueById('operator-field', emptyField);
    setFieldValueById('operand-two-field', result);

}
// ------------ integer number buttons ----------------
// button nine
document.getElementById('btn-nine').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-nine');
})
// button eight
document.getElementById('btn-eight').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-eight');
})
// button seven
document.getElementById('btn-seven').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-seven');
})
// button six
document.getElementById('btn-six').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-six');
})
// button five
document.getElementById('btn-five').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-five');
})
// button four
document.getElementById('btn-four').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-four');
})
// button three
document.getElementById('btn-three').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-three');
})
// button two
document.getElementById('btn-two').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-two');
})
// button one
document.getElementById('btn-one').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-one');
})
// button zero
document.getElementById('btn-zero').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-zero');
})
// button dot
document.getElementById('btn-dot').addEventListener('click', function(){
    getNumberFromButtonToDisplay('btn-dot');
})



// ------------ all clear button
document.getElementById('btn-all-clear').addEventListener('click', function(){
    const newFieldValue = '';
    setFieldValueById('operand-one-field', newFieldValue);
    setFieldValueById('operator-field', newFieldValue);
    setFieldValueById('operand-two-field', newFieldValue);
})

// ------------ delete last digit button
document.getElementById('delete-last').addEventListener('click', function(){
    const previousNumbers = getInputFieldValueById('operand-two-field');

    const digits = previousNumbers.split('');
    digits.pop();
    const remainingNumbers = digits.join('');

    setFieldValueById('operand-two-field', remainingNumbers);
})


// ----------- Operators ---------------
// addition operator
document.getElementById('plus-operator').addEventListener('click', function(){
    operatorButton('+');
})
// subtract operator
document.getElementById('minus-operator').addEventListener('click', function(){
    operatorButton('-');
})
// multiply operator
document.getElementById('multiply-operator').addEventListener('click', function(){
    operatorButton('*');
})
// division operator
document.getElementById('division-operator').addEventListener('click', function(){
    operatorButton('/');
})
// modulus operator
document.getElementById('modulus-operator').addEventListener('click', function(){
    operatorButton('%');
})


// --------- equal button ------------
document.getElementById('btn-equal').addEventListener('click', function(){
    const firstOperandString = getInputFieldValueById('operand-one-field');
    const firstOperand = parseFloat(firstOperandString);

    const secondOperandString = getInputFieldValueById('operand-two-field');
    const secondOperand = parseFloat(secondOperandString);

    const operator = getInputFieldValueById('operator-field');

    let result;

    if(operator === '+'){
        result = firstOperand + secondOperand;
        operatorWork(result);
    }
    else if(operator === '-'){
        result = firstOperand - secondOperand;
        operatorWork(result);
    }
    else if(operator === '*'){
        result = firstOperand * secondOperand ;
        operatorWork(result);
    }
    else if(operator === '/'){
        result = firstOperand / secondOperand;
        operatorWork(result);
    }
    else if(operator === '%'){
        result = firstOperand % secondOperand;
        operatorWork(result);
    }
})

// ---------------  the +/- button--------------
document.getElementById('btn-change-sign').addEventListener('click', function(){
    // console.log('+/- clicked');
    const operandString = getInputFieldValueById('operand-two-field');
    const operand = parseFloat(operandString);

    const newOperand = operand * -1 ;
    setFieldValueById('operand-two-field', newOperand);
})