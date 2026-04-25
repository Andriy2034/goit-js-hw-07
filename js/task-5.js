function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const pElem = document.querySelector(".color");
const btnElem = document.querySelector(".change-color");

btnElem.addEventListener("click", (e) => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  pElem.textContent = color;
});
