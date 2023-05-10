const listOfPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const render = (array) => {
  const pictureElementsList = document.createDocumentFragment();

  array.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElementsList.append(pictureElement);
  });

  listOfPictures.appendChild(pictureElementsList);
};
