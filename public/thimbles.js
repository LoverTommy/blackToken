const thimblesChoice = document.getElementById('thisChoice')
const thimblesChoiceQ = document.getElementById('thisChoiceQ')
const thimblesChoiceW = document.getElementById('thisChoiceW')

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
thimblesChoiceQ.addEventListener('click', ()=>{
    choiceCurrencyThimbles.style.display = 'flex';
})
thimblesChoiceW.addEventListener('click', ()=>{
    choiceCurrencyThimbles.style.display = 'flex';
})


thisChoiceTon.addEventListener('click', ()=> {
    choiceCurrencyThimbles.style.display = 'none';
    ton.style.display = 'flex';
    gram.style.display = 'none';
    ston.style.display = 'none';
})

thisChoiceGram.addEventListener('click', ()=> {
    choiceCurrencyThimbles.style.display = 'none';
    ton.style.display = 'none';
    gram.style.display = 'flex';
    ston.style.display = 'none';
})

thisChoiceSton.addEventListener('click', ()=> {
    choiceCurrencyThimbles.style.display = 'none';
    ton.style.display = 'none';
    gram.style.display = 'none';
    ston.style.display = 'flex';
})