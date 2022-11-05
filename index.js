const buttonOn = document.getElementById('buttonOn');
const buttonOff = document.getElementById('buttonOff');
const lamp = document.getElementById('lamp');


const lightUp = () => {
    lamp.src = './img/ligada.jpg'
}

const lampOff = () => {
lamp.src='./img/desligada.jpg'
}

const breakLamp = () =>{
    lamp.src='./img/quebrada.jpg'
}

buttonOn.addEventListener('click', lightUp);
buttonOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lightUp );
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', breakLamp)




