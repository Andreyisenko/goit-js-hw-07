const totList = document.querySelector('#categories');
console.log(`Number of categories: ${totList.children.length}`);
const list = totList.querySelectorAll('.item');
console.log(`Category: ${list[0].children[0].textContent}`);
console.log(
  `Elements: ${list[0].children[0].nextElementSibling.children.length}`
);
console.log(`Category: ${list[1].children[0].textContent}`);
console.log(
  `Elements: ${list[1].children[0].nextElementSibling.children.length}`
);
console.log(`Category: ${list[2].children[0].textContent}`);
console.log(
  `Elements: ${list[2].children[0].nextElementSibling.children.length}`
);
