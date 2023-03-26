document.getElementById('calc').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('input-field');
    const typedNumberValue = typedNumberField.value;

    if (number === 'AC( )%/789*456-123+0.<=') {
        console.log(number);
    }
    if (number === 'AC') {
        typedNumberField.value = '';
    }
    else if (number === '<') {
        const digits = typedNumberValue.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typedNumberField.value = remainingDigits;
    }
    else if (number === '%') {
        const percentage = event.target.value;
        setToInputField(percentage);
    }
    else if (number === '=') {
        const result = eval(typedNumberField.value);
        typedNumberField.value = result;
    }
    else {
        setToInputField(number);
    }
})

// document.getElementById('btn-one').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-two').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-three').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-four').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-five').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-six').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-seven').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-eight').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-nine').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-zero').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-addition').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-substract').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-multiply').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-divide').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-equal').addEventListener('click', function(){
//     const answerField = document.getElementById('input-field');
//     const result = eval(answerField.value);
//     answerField.value = result;
// })

// document.getElementById('btn-dot').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-back').addEventListener('click', function(event){
//     const element = document.getElementById('input-field');
//     element.value = Math.floor(element.value/10);
// })

// document.getElementById('btn-bracket1').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-bracket2').addEventListener('click', function(event){
//     const number = event.target.innerText;
//     setToInputField(number);
// })

// document.getElementById('btn-percentage').addEventListener('click', function(event){
//     const number = event.target.value;
//     setToInputField(number);
//     // const getValue = document.getElementById('input-field');
//     // const percentage = getValue.value / 100;
//     // getValue.value = percentage;
// })

// document.getElementById('btn-clear').addEventListener('click', function(event){
    // const clearAll = document.getElementById('input-field');
    // clearAll.value = '';
// })