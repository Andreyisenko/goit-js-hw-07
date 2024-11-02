const totList = document.querySelector('#categories');
console.log(`Number of categories: ${totList.children.length}`);
const list = totList.querySelectorAll('.item');
const arr = [...list];
let str = [];
arr.forEach(element => {
str.push(`Category: ${element.children[0].textContent}
Elements: ${element.children[1].children.length}`);
});
console.log(...str);
