// hambuger menu animation
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
}

mask.onclick = () => {
  nav.classList.toggle("open");
}

// buy button alert
const buyButton = document.getElementById('buy');
buyButton.addEventListener('click', () => {
  alert('架空のサイトであるため購入できません。');
});