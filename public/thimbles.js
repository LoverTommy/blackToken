const thimblesChoice = document.getElementById('thisChoice')

const thisChoiceTon = document.getElementById('thisChoiceTon')
const thisChoiceGram = document.getElementById('thisChoiceGram')
const thisChoiceSton = document.getElementById('thisChoiceSton')

const ton = document.getElementById('ton');
const gram = document.getElementById('gram');
const ston = document.getElementById('ston');

const choiceCurrencyThimbles = document.getElementById('choiceCurrencyThimbles');

thimblesChoice.addEventListener('click', ()=>{
    choiceCurrencyThimbles.style.display = 'flex';
})




thisChoiceTon.addEventListener('click', ()=> {
    choiceCurrencyThimbles.style.display = 'none';
})

thisChoiceGram.addEventListener('click', ()=> {
    choiceCurrencyThimbles.style.display = 'none';
})

thisChoiceSton.addEventListener('click', ()=> {
    choiceCurrencyThimbles.style.display = 'none';
})