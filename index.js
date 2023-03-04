const bill = document.getElementById('input-bill');
const custom = document.getElementById('custom-input');
const numberPeople = document.getElementById('quantity-people');
const percentButton = document.querySelector('.percent');
const tipPerson = document.getElementById('tip-person');
const totalPerson = document.getElementById('total-person');
const resetAll = document.getElementById('reset-button');
const errorText = document.querySelector('.error');
let tip;
let currentButton;

totalPerson.innerHTML = '$0.00';
tipPerson.innerHTML = '$0.00';

    function calculateTip(){
    tip = bill.value * custom.value / 100;
    let perPerson = tip / numberPeople.value;
    tipPerson.textContent = perPerson.toFixed(2);
 }

function calculateTotal(){
    let total = Number(bill.value) + tip;
    let totalPerPerson = total / numberPeople.value;
    totalPerson.textContent = totalPerPerson;
}


function reset(){
    bill.value = 0;
    numberPeople.value = 0;
    custom.value = 'custom';
    tipPerson.textContent = '0.00$';
    totalPerson.textContent = '0.00$';
    numberPeople.classList.remove('error-border');
    errorText.style.display = 'none';
}

function moneyOfPeople(x){
    tip = Number(bill.value) * Number(x.value) / 100;
    let perPerson = Number(tip) / Number(numberPeople.value);
    tipPerson.textContent = perPerson;
    let total = (Number(bill.value) + Number(tip)) / Number(numberPeople.value);
    totalPerson.textContent = total;
    checker();
}

function checker(){
    if(numberPeople.value <= 0){
       errorText.style.display = 'flex';
       numberPeople.classList.add('error-border');
       tipPerson.textContent = '0.00$';
       totalPerson.textContent = '0.00$';
    }  else{
        errorText.style.display = 'none';
       numberPeople.classList.remove('error-border');
    } 
}


    custom.addEventListener('input', calculateTip);
    custom.addEventListener('input', calculateTotal);
     resetAll.addEventListener('click', reset);
