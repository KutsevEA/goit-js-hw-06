const submitForm = document.querySelector(`.login-form`);

submitForm.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

  if (this.email.value === `` || this.password.value === ``) {
      return console.log(`Please fill in all the fields!`);
  }
    const formValue = { email: this.email.value, password: this.password.value };
    console.log(formValue);
    event.currentTarget.reset();

    
}
