const jackPotBetButton = document.getElementById('bet');
const choiceTon = document.getElementById('choiceTon')
const choiceGram = document.getElementById('choiceGram')
const choiceSton = document.getElementById('choiceSton')

const choiceCurrency = document.getElementById('choiceCurrency');
const choiceSum = document.getElementById('choiceSum');

const tonSum = document.getElementById('tonSum')
const gramSum = document.getElementById('gramSum')
const stonSum = document.getElementById('stonSum')

jackPotBetButton.addEventListener('click', ()=> {
    choiceCurrency.style.display = 'flex';
})



choiceTon.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'none';
    choiceSum.style.display = 'flex'
    tonSum.style.display = 'flex'
    gramSum.style.display = 'none'
    stonSum.style.display = 'none'
})

choiceGram.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'none';
    choiceSum.style.display = 'flex'
    gramSum.style.display = 'flex'
    tonSum.style.display = 'none'
    stonSum.style.display = 'none'
})

choiceSton.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'none';
    choiceSum.style.display = 'flex'
    stonSum.style.display = 'flex'
    tonSum.style.display = 'none'
    gramSum.style.display = 'none'
})