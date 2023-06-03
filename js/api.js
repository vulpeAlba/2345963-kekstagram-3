import { checkError } from './error.js';
import { closeWindow, initForm } from './form.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { showPicturesFromObjects } from './pictures.js';


export function getData () {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => showPicturesFromObjects(response))
    .catch(() => checkError('Ошибка загрузки изображения'));
  initForm();
}

export const sendData = (evt) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response) {
        closeWindow(true);
        showSuccessMessage();
      } else {
        closeWindow(false);
        showErrorMessage();
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};
