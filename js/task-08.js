const submitForm = document.querySelector(`.login-form`);
submitForm.addEventListener(`submit`, handleSubmit);

const allInputs = submitForm.querySelectorAll(`input`);

function handleSubmit(event) {
    event.preventDefault();

  if (this.email.value === `` || this.password.value === ``) {
    console.log(`Please fill in all the fields!`);

    for (const input of allInputs) {
      input.setAttribute(`placeholder`, `Please fill in all the fields!`);
    }
  }
  else {
    const formValue = { email: this.email.value, password: this.password.value };
    console.log(formValue);
    event.currentTarget.reset();
  }

    
}
