s = 'SERR PBQR PNZC';

function rot13(str) {
  const f = x => (x < 65 ? x : ((x - 65 + 13) % 26) + 65);
  str = str.split``.map(c => String.fromCharCode(f(c.charCodeAt(0)))).join``;
  return str;
}

a = rot13(s);
console.log(a);

// a = s.split``.map(c => c.charCodeAt(0));
// console.log(a);
