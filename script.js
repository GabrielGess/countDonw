//script

const day = document.getElementById('days')
const hour = document.getElementById('hours')
const minut = document.getElementById('minuts')
const secund = document.getElementById('secunds')

const lancamento = "12 Jun 2023"

function countDonw(){
    const dateLanc = new  Date(lancamento);
    const hoje = new Date();

    const segtotal = ( (dateLanc - hoje) /1000);
    
    const finalDay = Math.floor(segtotal/ 60 / 60 / 24); 
    const finalHour = Math.floor(segtotal / 60 /60) %24; 
    const finalminut = Math.floor(segtotal/60) %60; 
    const finalSecud =  Math.floor(segtotal) %60;

    day.innerHTML = finalDay;
    hour.innerHTML = finalHour;
    minut.innerHTML = finalminut;
    secund.innerHTML = finalSecud;

}

function formatoTempo(tempo){
    return tempo < 10? '0${tempo}' : tempo;
}

countDonw();
setInterval(countDonw, 1000)