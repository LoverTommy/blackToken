const hatChoice = document.getElementById('thisChoice')
const hatChoiceQ = document.getElementById('thisChoiceQ')
const hatChoiceW = document.getElementById('thisChoiceW')

const hatMobileChoice = document.getElementById('mobileChoice');
const hatMobileChoiceQ = document.getElementById('mobileChoiceQ');
const hatMobileChoiceW = document.getElementById('mobileChoiceW');

let mobileCheck = false;

const thisChoiceTon = document.getElementById('thisChoiceTon')
const thisChoiceGram = document.getElementById('thisChoiceGram')
const thisChoiceSton = document.getElementById('thisChoiceSton')

const ton = document.getElementById('ton');
const gram = document.getElementById('gram');
const ston = document.getElementById('ston');

const mobileTon = document.getElementById('mobileTon');
const mobileGram = document.getElementById('mobileGram');
const mobileSton = document.getElementById('mobileSton');

const choiceCurrency = document.getElementById('choiceCurrency');

hatMobileChoice.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'flex';
    mobileCheck = true;
})
hatMobileChoiceQ.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'flex';
    mobileCheck = true;
})
hatMobileChoiceW.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'flex';
    mobileCheck = true;
})
hatChoice.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'flex';
    mobileCheck = false;
})
hatChoiceQ.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'flex';
    mobileCheck = false;
})
hatChoiceW.addEventListener('click', ()=>{
    choiceCurrency.style.display = 'flex';
    mobileCheck = false;
})


thisChoiceTon.addEventListener('click', ()=> {
    choiceCurrency.style.display = 'none';
    if(mobileCheck) {
        mobileTon.style.display = 'grid';
        mobileGram.style.display = 'none';
        mobileSton.style.display = 'none';
    }else {
        ton.style.display = 'flex';
        gram.style.display = 'none';
        ston.style.display = 'none';
    }
})

thisChoiceGram.addEventListener('click', ()=> {
    choiceCurrency.style.display = 'none';
    if(mobileCheck) {
        mobileTon.style.display = 'none';
        mobileGram.style.display = 'grid';
        mobileSton.style.display = 'none';
    }else {
        ton.style.display = 'none';
        gram.style.display = 'flex';
        ston.style.display = 'none';
    }
})

thisChoiceSton.addEventListener('click', ()=> {
    choiceCurrency.style.display = 'none';
    if(mobileCheck) {
        mobileTon.style.display = 'none';
        mobileGram.style.display = 'none';
        mobileSton.style.display = 'grid';
    }else {   
        ton.style.display = 'none';
        gram.style.display = 'none';
        ston.style.display = 'flex';
    }
})

choiceCurrency.addEventListener('click', (eo)=>{
    if(eo.target.id === 'choiceCurrency') {
        eo.target.style.display = 'none';
    }
})