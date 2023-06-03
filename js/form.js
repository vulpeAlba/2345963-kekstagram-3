import { initEffect, resetEffect} from './effects.js';
import { resizeImage } from './scale.js';

const imageForm = document.querySelector('.img-upload__form');
const imageOverlay = imageForm.querySelector('.img-upload__overlay');
const closeButton = imageForm.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');
const img = document.querySelector('.img-upload__preview > img');

function cleanForm() {
  resizeImage(100);
  resetEffect();
  document.querySelector('#upload-select-image').reset();
  document.querySelector('#upload-file').value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

function openWindow(e) {
  img.src = window.URL.createObjectURL(e.target.files[0]);
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
}

export function closeWindow(clean) {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  if (clean) {
    cleanForm();
  }
}

export function initForm() {
  uploadFile.addEventListener('change', openWindow);
  closeButton.addEventListener('click', () => {
    closeWindow(true);
  });
  initEffect();
}

function closeOnButton(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow(true);
  }
}
