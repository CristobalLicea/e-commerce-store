
export const valLogin = (name, value) => {
  if (name === 'quantity')
      if(/^[0-9 ]*$/i.test(value)) {
        return ''
      } else {
        return 'Can Only Contain Numbers'
      }
} 

export const numbersOnly = (value) => {
  if(/^[0-9]*$/i.test(value)) {
    return true
  } else {
    return false
  }
}
