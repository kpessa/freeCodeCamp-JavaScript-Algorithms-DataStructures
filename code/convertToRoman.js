function convertToRoman(n) {
  let s = '';
  while (n > 0) {
    if (n >= 1000) {
      s += 'M';
      n -= 1000;
    } // M = 1000
    else if (n >= 900) {
      s += 'CM';
      n -= 900;
    } else if (n >= 500) {
      s += 'D';
      n -= 500;
    } // D = 500
    else if (n >= 400) {
      s += 'CD';
      n -= 400;
    } else if (n >= 100) {
      s += 'C';
      n -= 100;
    } // C = 100
    else if (n >= 90) {
      s += 'XC';
      n -= 90;
    } else if (n >= 50) {
      s += 'L';
      n -= 50;
    } // L = 50
    else if (n >= 40) {
      s += 'XL';
      n -= 40;
    } else if (n >= 10) {
      s += 'X';
      n -= 10;
    } // X = 10
    else if (n >= 9) {
      s += 'IX';
      n -= 9;
    } else if (n >= 5) {
      s += 'V';
      n -= 5;
    } // V = 5
    else if (n >= 4) {
      s += 'IV';
      n -= 4;
    } else {
      s += 'I';
      n--;
    } // I = 1
  }
  return s;
}

convertToRoman(36);
