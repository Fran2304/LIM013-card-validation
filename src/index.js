import validator from './validator.js';
//console.log(validator);

//Cambia de la primera view con cualquier botón. Por eso usamos el ciclo y queryselector All :) 
let firstContainer=document.getElementById('firstContainer')
let secondContainer=document.getElementById('secondContainer');

const item = document.querySelectorAll('.item');
for (let i = 0; i<item.length; i++){
  item[i].addEventListener('click',() => {
    firstContainer.classList.add('hide');
    window.scroll(0,0);
    secondContainer.classList.remove('hide');
  })
}

//Segun lógica de validación de datos
let catchCard=document.getElementById('cardNumber');
let incorrectCard=document.getElementById('incorrectCard');
incorrectCard.style.color='#EB4B98';
let incorrectName=document.getElementById('incorrectName');
incorrectName.style.color='#EB4B98';
let incorrectEmail=document.getElementById('incorrectEmail');
incorrectEmail.style.color='#EB4B98';
let incorrectCcv=document.getElementById('incorrectCcv');
incorrectCcv.style.color='#EB4B98';
let incorrectExpireDate=document.getElementById('incorrectExpireDate');
incorrectExpireDate.style.color='#EB4B98';
let encriptedCard=document.getElementById('encripted');
let thirdContainer=document.getElementById('thirdContainer');

// Este botón va a llamar 2 funciones del validator y validará todos los datos que ingresó el cliente
const buttonPay = document.getElementById('buttonPay');

buttonPay.addEventListener('click',() => {
//obtiene el valor de la tarjeta
  let cardNumber = catchCard.value;
//llama a las funciones de validator
  let cardValid=validator.isValid(cardNumber);
  let cardMask=validator.maskify(cardNumber);  
// Verifica datos ingresados para pasar a la siguiente vista. De lo contrario error. :C
  let name=document.getElementById('name').value;
  let email=document.getElementById('email').value;
  let ccv=document.getElementById('ccv').value;
  let expireDate= document.getElementById('expireDate').value;

//Validamos que los datos sean correctos.
let noError = true;

if (name === ''){
  incorrectName.textContent= '*Ingrese un nombre';
  noError = false;
}
if(email=== ''){
  incorrectEmail.textContent = '*Ingrese un mail';
  noError = false;
} 
if(cardNumber==='' || cardNumber === "0"){
  incorrectCard.textContent= "*Ingrese un número de tarjeta";
  noError = false;
}else if(cardValid===false){
  incorrectCard.textContent= '*El número de tarjeta es inválido';
  noError = false;  
}
if(ccv===''){
  incorrectCcv.textContent = '*Ingrese un código de verificación';
  noError = false;
}
if((expireDate!=='' && Date.parse(expireDate) >= Date.now())==false){
  incorrectExpireDate.textContent = '*Ingrese una fecha expiración válida';
  noError = false;
}

if(noError){
  secondContainer.classList.add('hide');
  thirdContainer.classList.remove('hide');
  window.scroll(0,0);
}


//Coloca la tarjeta encriptada
encriptedCard.innerHTML= `N° de tarjeta: ${cardMask}`;
//Coloca los datos del cliente  en la tercera vista
let nameCatch=document.getElementById('nameCatch');
let emailCatch=document.getElementById('emailCatch');
nameCatch.innerHTML=`Nombre: ${name}`;
emailCatch.innerHTML=`Correo: ${email}`;
});


