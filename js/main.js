function randNum (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max))); //округление до ближайшего большего
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max))); //округление до ближайшего меньшего
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function strLenCheck (str, maxLength) {
  return str.length <= maxLength;
}

const createPost = (number) => ({
  id: number,
  url: `photos/${number}.jpg`,
  description: `It's my ${number} photo`,
  likes: randNum(15, 200),
  comments: randNum(0, 200)
});

function createPostsList (number) {
  const data = [];
  for(let i = 0; i < number; i++) {
    data[i] = createPost(i + 1);
  }
  return data;
}

strLenCheck('Hello, World', 15);
createPostsList(25);
