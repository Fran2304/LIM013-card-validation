const validator = {
  // ...
  isValid :function(creditCardNumber) {
    //let converToNumber=validator.creditCardNumber;
    let arrayCard= Array.from(creditCardNumber);
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

  maskify: function (creditCardNumber) {
    //let stringCard=validator.creditCardNumber;
    let newString="";
     //remplaza x #
    for (let i=0;i<creditCardNumber.length;i++){
      if(i>=(creditCardNumber.length-4)){
        newString += creditCardNumber.charAt(i);
      } else {
        newString += "#";
      }
    }
    return newString;
  }


};
export default validator;


