function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBox = document.querySelector('#boxes');
const inputNumb = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

let size = 30;

btnCreate.addEventListener('click', createMarkup);

function createMarkup() {
  if (Number(inputNumb.value) <= 0 || Number(inputNumb.value) > 100) {
    console.log('error');
    return;
  }
  createBoxes(inputNumb.value);
  Number;
}
function createBoxes(amount) {
  divBox.innerHTML = '';
  inputNumb.value = '';
  size = 30;
  const arrDiv = document.createDocumentFragment();
  for (let index = 0; index < amount; index++) {
    const myBox = document.createElement('div');
    myBox.style.width = `${size}px`;
    myBox.style.height = `${size}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    size += 10;
    arrDiv.append(myBox);
    // console.log(arrDiv);
  }

  divBox.append(arrDiv);
}

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divBox.innerHTML = '';
}
