/*import validator from './validator.js';
console.log(validator);*/


const buttonPay = document.getElementById("buttonPay");
buttonPay.addEventListener('click',() => {
  let cardNumber = document.getElementById("cardNumber").value;
  if (cardNumber.length === 0) {
    document.getElementById("incorrectCard").innerHTML= "Ingrese un número de tarjeta";
  }

  const validator = { 
    creditCardNumber:cardNumber,
    isValid :function() {
      let converToNumber=validator.creditCardNumber;
      let arrayCard= Array.from(converToNumber);
      let reverseCard= arrayCard.reverse();
      let suma=0;
      for (let i=0;i<=reverseCard.length - 1;i++){
        if(i%2 !== 0){
          suma+= parseInt(reverseCard[i]);
        }else if((parseInt(reverseCard[i]) * 2) <=9){
          suma+= parseInt(reverseCard[i]*2);
        }else{
          suma+=(parseInt((parseInt(reverseCard[i]*2)).toString().charAt(0))+parseInt((parseInt(reverseCard[i]*2)).toString().charAt(1)));
        }
      };
      return suma%10===0;
    },
    
    maskify: function () {
      let stringCard=validator.creditCardNumber;
      let newString="";
       //remplaza x #
      for (let i=0;i<stringCard.length;i++){
        if(i>=(stringCard.length-4)){
          newString += stringCard.charAt(i);
        } else {
          newString += "#";
        }
      }
      return newString;
    }

  };
  
  console.log (validator.isValid());
  console.log (validator.maskify());
  document.getElementById("encripted").innerHTML= (validator.maskify());
});
