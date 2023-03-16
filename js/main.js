function randNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function strLenCheck (str, maxLength) {
  return str.length <= maxLength;
}

randNum(2, 5);
strLenCheck('Hello, World', 15);
