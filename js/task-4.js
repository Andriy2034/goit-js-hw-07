const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = formElem.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  if (passwordValue.length < 8) {
    alert("Password value must be more then 8 characters");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  formElem.reset();
});
