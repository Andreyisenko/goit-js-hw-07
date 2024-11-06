function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodY = document.querySelector('body');
const spaN = document.querySelector('.color');
const btn = document.querySelector('.change-color');
btn.style.display = 'flex';
btn.style.alignItems = 'center';
btn.style.justifyContent = 'center';
btn.style.flexDirection = 'row';
btn.style.borderRadius = '8px';
btn.style.gap = '10px';
btn.style.padding = '8px 16px';
btn.style.width = '148px';
btn.style.height = '40px';
btn.style.backgroundColor = '#4e75ff';
btn.style.color = '#fff';
btn.style.fontWeight = '500';
btn.style.fontSize = '16px';

btn.addEventListener('click', () => {
const colorRandom = getRandomHexColor()
  bodY.style.backgroundColor = colorRandom;
  spaN.textContent = colorRandom;
});
