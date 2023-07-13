const inputDoc = document.getElementById("validation-input");

function validator(event) {
    const inLength = Number(inputDoc.dataset.length);
    const inputInsert = event.currentTarget;
    if (inputInsert.value.length === inLength) {
        inputDoc.classList.add("valid");
        inputDoc.classList.remove("invalid");
    }
    else {
        inputDoc.classList.remove("valid");
        inputDoc.classList.add("invalid");
    }
}

inputDoc.addEventListener("blur", validator);