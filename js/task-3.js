const inpItem = document.querySelector('#name-input');
const spnItem = document.querySelector('#name-output');
// console.log(spnItem.textContent);

inpItem.addEventListener('input', event => {
  spnItem.textContent = inpItem.value.trim();
  if (event.target.value.trim() === '') {
    spnItem.textContent = 'Anonymous';
  }
});
