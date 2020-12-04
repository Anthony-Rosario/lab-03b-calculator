// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');

const subInput1 = document.getElementById('sub-input1');
const subInput2 = document.getElementById('sub-input2');
const subButton = document.getElementById('sub-button');
const subResults = document.getElementById('sub-results');

const mulInput1 = document.getElementById('mul-input1');
const mulInput2 = document.getElementById('mul-input2');
const mulButton = document.getElementById('mul-button');
const mulResult = document.getElementById('mul-results');

const divInput1 = document.getElementById('div-input1');
const divInput2 = document.getElementById('div-input2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-results');

// initialize state


// set event listeners to update state and DOM

addButton.addEventListener('click', () => {
    const number1 = Number(addInput1.value);
    const number2 = Number(addInput2.value);
    const result = number1 + number2;

    addResults.textContent = result;
});


subButton.addEventListener('click', () => {
    const number1 = Number(subInput1.value);
    const number2 = Number(subInput2.value);
    const result = number1 - number2;

    subResults.textContent = result;
});


mulButton.addEventListener('click', () => {
    const number1 = Number(mulInput1.value);
    const number2 = Number(mulInput2.value);
    const result = number1 * number2;

    mulResult.textContent = result;
});


divButton.addEventListener('click', () => {
    const number1 = Number(divInput1.value);
    const number2 = Number(divInput2.value);
    const result = number1 / number2;

    divResult.textContent = result;
})