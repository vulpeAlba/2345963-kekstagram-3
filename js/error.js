const getData = () => {
  const error = document.querySelector('#error_fetch').content.cloneNode(true);
  const body = document.querySelector('body');
  const errorButton = error.querySelector('.error_fetch__button');
  const errorElement = document.querySelector('.error_fetch');
  return {
    errorButton,
    body,
    error,
    errorElement
  };
};

const closeEsc = (evt) => {
  if (evt.key === 'Escape') {
    hideError();
  }
};

const closeClickOut = (evt) => {
  const data = getData();
  const errorSection = data.errorElement.querySelector('.error_fetch__inner');
  if (!errorSection.contains(evt.target)) {
    hideError();
  }
};

const reloadPage = () => {
  hideError();
  location.reload();
};

function hideError () {
  const data = getData();
  document.removeEventListener('keydown', closeEsc);
  document.removeEventListener('click', closeClickOut);
  data.errorButton.removeEventListener('click', reloadPage);
  data.body.removeChild(data.errorElement);
}

export const checkError = (message) => {
  const ALERT_SHOW_TIME = 5000;
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
