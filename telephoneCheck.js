function telephoneCheck(s) {
  if (/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(s)) return true;
  return false;
}

a = telephoneCheck('(555)5(55?)-5555');
console.log(a);
