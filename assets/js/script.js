let valore,temperatura,barra,risposta,myBarra,calcolo;
window.addEventListener('load', init);
function init(){
    valore = document.getElementById('valore');
    temperatura = document.getElementById('temperatura');
    barra=document.querySelector('.barra');
    myBarra=temperatura.style.width;
    risposta = document.getElementById('risposta');
    temperatura.value=0;
    eventHandler();
}
function eventHandler(){
    valore.addEventListener('input', visualizza);
}
function visualizza(){
    temperatura.removeAttribute('disabled');
    calcolo=Number(valore.value);
    temperatura.value=calcolo;
    verificaTemperatura();   
}
function verificaTemperatura(){
    temperatura.value >=37 ? temperatura.classList.remove('blueBar')+
    temperatura.classList.add('redBar') : temperatura.value <= 36 
    ? temperatura.classList.add('blueBar')+temperatura.classList.remove('redBar') : 1;
}

area.addEventListener('click', ()=>{
    temperatura.setAttribute('disabled','')
    temperatura.value=0
    valore.focus();
    alert('Inserisci temperatura')
})





