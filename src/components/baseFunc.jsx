const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "*Required";
  } else if (values.username.length > 15 || values.username.length < 6) {
    errors.username =
      "*Must be not more than 15 and not less than 6 characters";
  }

  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "*Invalid email address";
  }

  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length < 6) {
    errors.password = "*Must be 6 characters or more";
  }

  return errors;
};

export default validate;
