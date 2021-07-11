function palindrome(str) {
  str = str.match(/[a-z0-9]/gi);
  return str.join``.toLowerCase() == str.reverse().join``.toLowerCase();
}

palindrome('eye');
