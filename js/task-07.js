const textSize = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

function changeSize(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}

textSize.addEventListener("input", changeSize);