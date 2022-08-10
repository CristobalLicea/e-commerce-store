
export const infoVal = (name, value) => {
  if (name === 'firstName' || name === 'lastName' ) {
    console.log(name, value)
    let result = /^[a-zA-z]*$/i.test(value)
    console.log(result)
    return result
  }
  if (name === 'phone' || name === 'zipcode') {
    console.log(name, value)
    let result = /^[0-9]*$/i.test(value)
    console.log(result)
    return result
  }
  if (name === 'address' || name === 'city') {
    console.log(name, value)
    let result = /^[0-9a-zA-z ]*$/i.test(value)
    console.log(result)
    return result
  }
  if (name === 'state') {
    return true
  }
}

export const cardValidation = (cardNumber) => {
  const regexPattern = {
    MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
    VISA: /^4[0-9]{2,}/,
    AMERICAN_EXPRESS: /^3[47][0-9]{5,}/,
    DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/ 
  };
  for(const card in regexPattern) {
    if(cardNumber.replace(/[^\d]/g, '').match(regexPattern[card])) {
      if (cardNumber) {
        return cardNumber && /^[1-6]{1}[0-9]{14,15}$/i.test(cardNumber.replace(/[^\d]/g, "").trim())
        ? ''
        : 'Enter a Valid Card'
      }
    }
  }
  return 'Enter a Valid Card';  
};