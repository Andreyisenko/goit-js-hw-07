const inpItem = document.querySelector('#name-input');
const spnItem = document.querySelector('#name-output');
// console.log(spnItem.textContent);
inpItem.style.width = "360px"
inpItem.style.height = "40px"
inpItem.addEventListener('input', event => {
  spnItem.textContent = inpItem.value.trim();
  if (event.target.value.trim() === '') {
    spnItem.textContent = 'Anonymous';
  }
  return spnItem.textContent;
});
