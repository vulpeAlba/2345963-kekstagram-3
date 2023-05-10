export function getRandNum (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max))); //округление до ближайшего большего
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max))); //округление до ближайшего меньшего
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

export function strLenCheck (str, maxLength) {
  return str.length <= maxLength;
}

export function isDescriptionValid(value) {
  return value.length >= 20 && value.length <= 140;
}
