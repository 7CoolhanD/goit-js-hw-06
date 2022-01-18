const form = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();

  const eventElements = event.currentTarget.elements;
  const email = eventElements.email.value;
  const password = eventElements.password.value;

  if (!email || !password) {
    alert("enter all types");
    return;
  }
  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
}

form.addEventListener("submit", onFormSubmit);
