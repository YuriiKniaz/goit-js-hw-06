const inputForm = document.querySelector(".login-form");

function submitForm(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
       return alert("Please, enter your email and password");
    }

    const submitResult = { email: email.value, password: password.value };
    console.log(submitResult);
    event.currentTarget.reset();
}

inputForm.addEventListener("submit", submitForm);
