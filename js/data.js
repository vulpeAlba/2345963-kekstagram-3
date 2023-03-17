import { getRandNum } from "./util.js";

const createPost = (number) => ({
  id: number,
  url: `photos/${number}.jpg`,
  description: `It's my ${number} photo`,
  likes: getRandNum(15, 200),
  comments: getRandNum(0, 200)
});

export function createPostsList (number) {
  const data = [];
  for(let i = 0; i < number; i++) {
    data[i] = createPost(i + 1);
  }
  return data;
}
