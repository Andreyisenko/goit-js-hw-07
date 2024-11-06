const formA1 = document.querySelector('.login-form');
const btnLog = document.querySelector('button');
const inpAll = document.querySelectorAll('input');
// console.log(inpAll);
formA1.style.display = 'flex';
formA1.style.backgroundColor = '#fff';
formA1.style.alignItems = 'flex-start';
formA1.style.justifyContent = 'flex-start';
formA1.style.flexDirection = 'column';
formA1.style.gap = '16px';
formA1.style.borderRadius = '8px';
formA1.style.padding = '24px';
formA1.style.width = '408px';
formA1.style.height = '256px';

btnLog.style.display = 'flex';
btnLog.style.alignItems = 'flex-start';
btnLog.style.justifyContent = 'flex-start';
btnLog.style.flexDirection = 'row';
btnLog.style.borderRadius = '8px';
btnLog.style.gap = '10px';
btnLog.style.padding = '8px 16px';
btnLog.style.width = '86px';
btnLog.style.height = '40px';
btnLog.style.backgroundColor = '#4e75ff';
btnLog.style.color = '#fff';
btnLog.style.fontWeight = '500';
btnLog.style.fontSize = '16px';

formA1.addEventListener('submit', event => {
  event.preventDefault();
  const userEmail = event.target.elements.email.value;
  const userPassword = event.target.elements.password.value;
  if ('' === userPassword.trim() || userEmail.trim() === '') {
    alert('All form fields must be filled in');
  }
  formA1.reset();
  console.log(`{email: ${userEmail.trim()}, password: ${userPassword.trim()}}`);
});
