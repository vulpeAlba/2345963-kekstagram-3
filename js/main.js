function randNum (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max))); //округление до ближайшего большего
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max))); //округление до ближайшего меньшего
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function strLenCheck (str, maxLength) {
  return str.length <= maxLength;
}

randNum(2, 8);
strLenCheck('Hello, World', 15);
