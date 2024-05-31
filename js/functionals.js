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