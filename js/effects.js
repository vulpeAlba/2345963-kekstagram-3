const imgForm = document.querySelector('.img-upload__form');
const radioButtons = document.querySelectorAll('.effects__radio');
export const imgPreview = imgForm.querySelector('.img-upload__preview img');

const removeFilter = (evt) => {
  evt.preventDefault();
  imgPreview.classList = [];
};

const changeFilter = (evt) => {
  const element = evt.target.value;
  removeFilter(evt);
  imgPreview.classList.add(`effects__preview--${element}`);
};

const addListener = (element) => {
  if (element.value === 'none') {
    element.addEventListener('click', removeFilter);
  } else {
    element.addEventListener('click', changeFilter);
  }
};

export const setupListeners = () => {
  radioButtons.forEach((element) => addListener(element));
};

export const removeListeners = () => {
  radioButtons.forEach((element) => {
    if (element.value === 'none') {
      element.removeEventListener('click', removeFilter);
    } else {
      element.removeEventListener('click', changeFilter);
    }
  });
};
