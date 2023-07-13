const inputDoc = document.getElementById("name-input");
const spanDoc = document.getElementById("name-output");

function spanChange(event) {
    
    spanDoc.textContent = event.currentTarget.value;

    if (!event.currentTarget.value) {
        spanDoc.textContent = "Anonymous";
}

}
inputDoc.addEventListener("input", spanChange);