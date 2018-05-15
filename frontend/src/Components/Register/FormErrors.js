

const FormErrors = (user) =>{
  const errors = [];

  if (user.fullNameInput.length === 0) {
    errors.push("Name can't be empty");
  }

  if (!user.zipCodeInput.match(zipcodeformat)) {
    errors.push("Enter valid zip code");
  }

  if (user.emailInput.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (user.emailInput.split('').filter(x => x === '@').length !== 1) {
    errors.push("Email should contain a @");
  }
  if (user.emailInput.indexOf('.') === -1) {
    errors.push("Email should contain at least one dot");
  }


  return errors;
}

export default FormErrors;
