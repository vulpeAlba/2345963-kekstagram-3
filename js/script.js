
import { createPostsList } from './data.js';

const listOfPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = createPostsList(5);
const pictureElementsList = document.createDocumentFragment();

pictures.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments;
  pictureElementsList.append(pictureElement);
});

listOfPictures.append(pictureElementsList);
