import validator from './validator.js';
//console.log(validator);

//Cambia de la primera view con cualquier botón. Por eso usamo el ciclo y queryselector All :) 
let firstView=document.getElementById('firstView');
let secondView=document.getElementById('secondView');

const item = document.querySelectorAll('.item');
for (let i = 0; i<item.length; i++){
  item[i].addEventListener('click',() => {
    firstView.style.display='none';
    secondView.style.display='flex';
  })
}

//Segun view lógica de validación de datos
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
let thirdView=document.getElementById('thirdView');



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


if (name !== ''){
    if(email!== ''){
      if(ccv!==''){
        if(expireDate!=='' && Date.parse(expireDate) >= Date.now()){
          if(cardNumber.length !== 0 && cardNumber !== "0"){
            if(cardValid===true){
              thirdView.style.display='flex';
              secondView.style.display ='none';
            }else{
              incorrectCard.textContent= '*El número de tarjeta es inválido';
            }
          }else{
            incorrectCard.textContent= "*Ingrese un número de tarjeta"
          }
        }else{
          incorrectExpireDate.textContent = '*Ingrese una fecha expiración válida'
        }
      }else{
        incorrectCcv.textContent = '*Ingrese un código de verificación';
      }
    }else{
      incorrectEmail.textContent = '*Ingrese un mail';
    }
}else{
  incorrectName.textContent= '*Ingrese un nombre';
}


//Coloca la tarjeta encriptada
encriptedCard.innerHTML= `N° de tarjeta: ${cardMask}`;
//Coloca los datos del cliente  en la tercera vista
let nameCatch=document.getElementById('nameCatch');
let emailCatch=document.getElementById('emailCatch');
nameCatch.innerHTML=`Nombre: ${name}`;
emailCatch.innerHTML=`Correo: ${email}`;
});

