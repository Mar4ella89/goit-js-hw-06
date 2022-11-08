const loginFofmEl = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const {} = event.currentTarget;

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = new FormData(event.currentTarget);
  const inputData = {};
  formData.forEach((value, name) => {
    inputData[name] = value;
  });
  console.log(inputData);

  event.currentTarget.reset();
};

loginFofmEl.addEventListener("submit", onFormSubmit);
