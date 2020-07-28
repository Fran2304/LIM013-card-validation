const validator = {
  isValid :(creditCardNumber) => {
    let arrayCard= Array.from(creditCardNumber);
    let reverseCard= arrayCard.reverse();
    let suma=0;
    for (let i=0;i<=reverseCard.length - 1;i++){
      let parseDigit= parseInt(reverseCard[i]);
      if(i%2 === 0){
        suma+= parseDigit;
      }else if(parseDigit * 2 <=9){
        suma+= parseDigit*2;
      }else{
        suma+= parseInt((parseDigit*2).toString().charAt(0))+parseInt((parseDigit*2).toString().charAt(1));
      }
    }
    return suma%10===0;
  },

  maskify: (creditCardNumber) => {
    let newString='';
     //remplaza x #
    for (let i=0;i<creditCardNumber.length;i++){
      if(i>=(creditCardNumber.length-4)){
        newString += creditCardNumber.charAt(i);
      } else {
        newString += '#';
      }
    }
    return newString;
  }
};
export default validator;


