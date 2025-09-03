'use strict';

function getInputs() {
  return [...document.querySelectorAll('input')];
}

function createLabels(list) {
  list.forEach((elem) => {
    const innerString = String(elem.name).toUpperCase();
    const label = document.createElement('label');
    const placeHolderText = innerString.toLowerCase().split('');

    placeHolderText[0] = placeHolderText[0].toUpperCase();

    elem.insertAdjacentElement('beforebegin', label);
    elem.setAttribute('placeholder', placeHolderText.join(''));

    label.setAttribute('for', elem.id);
    label.setAttribute('style', 'font-weight: bold');
    label.innerText = innerString;
    label.classList.add('field-label');
  });
}

createLabels(getInputs());
