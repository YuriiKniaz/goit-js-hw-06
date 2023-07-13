function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
const backgroundBody = document.querySelector("body");

function changeColor() {
  backgroundBody.style.backgroundColor = `${getRandomHexColor()}`;
  spanText.textContent = `${getRandomHexColor()}`;
}

button.addEventListener("click", changeColor);