const hatChoice = document.getElementById('thisChoice')

const thisChoiceTon = document.getElementById('thisChoiceTon')
const thisChoiceGram = document.getElementById('thisChoiceGram')
const thisChoiceSton = document.getElementById('thisChoiceSton')

// const ton = document.getElementById('ton');
// const gram = document.getElementById('gram');
// const ston = document.getElementById('ston');

const choiceCurrency = document.getElementById('choiceCurrency');

hatChoice.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'flex';
})

thisChoiceTon.addEventListener('click', ()=> {
    choiceCurrency.style.display = 'none';
})

thisChoiceGram.addEventListener('click', ()=> {
    choiceCurrency.style.display = 'none';
})

thisChoiceSton.addEventListener('click', ()=> {
    choiceCurrency.style.display = 'none';
})