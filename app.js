setInterval(setClock,1000);
let hd=document.querySelector('[hset]');
let md=document.querySelector('[mset]');
let sd=document.querySelector('[sset]');


function setClock(){
    let currentDate=new Date();
    let secondsR=currentDate.getSeconds()/60;
    let minutesR=(secondsR+currentDate.getMinutes())/60;
    let hoursR=(minutesR+currentDate.getHours())/12;
    setRotation(hd,hoursR);
    setRotation(md,minutesR);
    setRotation(sd,secondsR);


}

function setRotation(element, rotationRate){
    element.style.setProperty('--rotation',rotationRate*360);

}

setClock();