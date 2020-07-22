import validator from './validator.js';
//console.log(validator);

const buttonPay = document.getElementById("buttonPay");
buttonPay.addEventListener('click',() => {
  let cardNumber = document.getElementById("cardNumber").value;
  if (cardNumber.length === 0) {
    document.getElementById("incorrectCard").innerHTML= "Ingrese un número de tarjeta";
  }
  let cardValid=validator.isValid(cardNumber);
  let cardMask=validator.maskify(cardNumber);
  
  console.log(cardValid);
  console.log(cardMask);
   
// pasar a la siguiente view si la tarjeta es valida y no es vacía. Mostrar error sino :C

let thirdView=document.getElementById("thirdView");
let secondView=document.getElementById("secondView");

if (cardNumber.length !== 0){
  if(cardValid===true){
    thirdView.style.display="block";
    secondView.style.display ="none";
  }else {
    document.getElementById("incorrectCard").innerHTML= "El número de tarjeta es inválido";
  }
} else{
  document.getElementById("incorrectCard").innerHTML= "Ingrese un número de tarjeta";
}

document.getElementById("encripted").innerHTML= (cardMask);
});
