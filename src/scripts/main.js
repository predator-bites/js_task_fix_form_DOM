'use strict';

function getInputs() {
  return [...document.querySelectorAll('form input')];
}

function createLabels(list) {
  const usedIds = [];

  list.forEach((input) => {
    if (!usedIds.includes(input.id)) {
      const label = document.createElement('label');
      const placeHolderText = input.name.toLowerCase().split('');

      placeHolderText[0] = placeHolderText[0].toUpperCase();

      if (input.id === '') {
        while (true) {
          const randomNum = Math.floor(Math.random() * 1000000000).toString();

          if (!document.getElementById(randomNum)) {
            input.id = randomNum;

            break;
          }
        }
      }

      input.parentNode.appendChild(label);

      input.setAttribute('placeholder', placeHolderText.join(''));

      label.setAttribute('for', input.id);
      label.innerText = input.name;
      label.classList.add('field-label');

      usedIds.push(input.id);
    }
  });
}

createLabels(getInputs());
