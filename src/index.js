import validator from './validator.js';
//console.log(validator);

let catchCard=document.getElementById("cardNumber");
let incorrectCard=document.getElementById("incorrectCard");
incorrectCard.style.color="#F25CA2";
let encriptedCard=document.getElementById("encripted");
let thirdView=document.getElementById("thirdView");
let secondView=document.getElementById("secondView");


const buttonPay = document.getElementById("buttonPay");
buttonPay.addEventListener("click",() => {
  let cardNumber = catchCard.value;
//llama a las funciones de validator
  let cardValid=validator.isValid(cardNumber);
  let cardMask=validator.maskify(cardNumber);  
// Si la tarjeta es diferente a vacío y válida, pasar a la siguiente vista. De lo contrario error. :C
if (cardNumber.length !== 0 && cardNumber !== "0"){
  if(cardValid===true){
    thirdView.style.display="flex";
    secondView.style.display ="none";
  }else {
    incorrectCard.textContent= "*El número de tarjeta es inválido";
  }
} else{
  incorrectCard.textContent= "*Ingrese un número de tarjeta";
}
//Coloca la tarjeta encriptada
encriptedCard.innerHTML= (cardMask);
//Coloca los datos del cliente  en la tercera vista
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let nameCatch=document.getElementById("nameCatch");
let emailCatch=document.getElementById("emailCatch");
nameCatch.innerHTML=(name);
emailCatch.innerHTML=(email);

});
