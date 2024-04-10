const mobileMenu = document.getElementById('mobileMenu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', ()=>{
    mobileMenu.style.display = 'flex';
})

closeMenu.addEventListener('click', ()=>{
    mobileMenu.style.display = 'none';
})



const closeWiki = document.getElementById('close');
const wiki = document.getElementById('wiki');
const openWiki = document.getElementById('openWiki');

closeWiki.addEventListener('click', ()=>{
    wiki.style.display = 'none';
})

openWiki.addEventListener('click', ()=>{
    wiki.style.display = 'flex';
})

/* wikiGameLinks */

const thimblesInfoBlock = document.getElementById('thimblesInfo')
const hatInfoBlock = document.getElementById('hatInfo');
const jackPotInfoBlock = document.getElementById('jackPotInfo');

const thimblesLink = document.getElementById('thimblesLink');
const hatLink = document.getElementById('hatLink');
const jackPotLink = document.getElementById('jackPotLink');
let activeGame = 'jackPotLink';
let activeGameInfo = 'jackPotInfo';
thimblesLink.addEventListener('click', thimblesHandler);

hatLink.addEventListener('click', hatHandler);

jackPotLink.addEventListener('click', jackPotHandler);

function thimblesHandler(eo) {
    thimblesInfoBlock.style.display = 'flex';
    eo.target.style.cssText = 'background: linear-gradient(90.00deg, rgb(3, 198, 252),rgb(51, 103, 230) 100%)';
    document.getElementById(`${activeGame}`).style.cssText = 'background: rgb(25, 25, 34)';
    document.getElementById(`${activeGameInfo}`).style.display = 'none';
    activeGame = 'thimblesLink';
    activeGameInfo = 'thimblesInfo';
    thimblesLink.removeEventListener('click', thimblesHandler)
    hatLink.addEventListener('click', hatHandler);
    jackPotLink.addEventListener('click', jackPotHandler);
}

function hatHandler(eo) {
    hatInfoBlock.style.display = 'flex';
    eo.target.style.cssText = 'background: linear-gradient(90.00deg, rgb(3, 198, 252),rgb(51, 103, 230) 100%)';
    document.getElementById(`${activeGame}`).style.cssText = 'background: rgb(25, 25, 34)';
    document.getElementById(`${activeGameInfo}`).style.display = 'none';
    activeGame = 'hatLink';
    activeGameInfo = 'hatInfo';
    hatLink.removeEventListener('click', hatHandler)
    thimblesLink.addEventListener('click', thimblesHandler);
    jackPotLink.addEventListener('click', jackPotHandler);
}

function jackPotHandler(eo) {
    jackPotInfoBlock.style.display = 'flex';
    eo.target.style.cssText = 'background: linear-gradient(90.00deg, rgb(3, 198, 252),rgb(51, 103, 230) 100%)';
    document.getElementById(`${activeGame}`).style.cssText = 'background: rgb(25, 25, 34)';
    document.getElementById(`${activeGameInfo}`).style.display = 'none';
    activeGame = 'jackPotLink';
    activeGameInfo = 'jackPotInfo';
    jackPotLink.removeEventListener('click', jackPotHandler)
    hatLink.addEventListener('click', hatHandler);
    thimblesLink.addEventListener('click', thimblesHandler);
}


const closeAlert = document.getElementById('closeAlert');
const alert = document.getElementById('alert');

closeAlert.addEventListener('click', (eo)=>{
    alert.style.display = 'none';
})









