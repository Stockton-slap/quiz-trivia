import {
  FormContainer,
  FormTitle,
  InfoWrapper,
  FormLabel,
  FormValue,
  FormBtn,
} from "./RegForm.styled";

import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15 || values.username.length < 6) {
    errors.username = "Must be not more than 15 and not less than 6 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
  }

  return errors;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------>

const RegForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormTitle>Register</FormTitle>

      <InfoWrapper>
        <FormLabel htmlFor="username">Username</FormLabel>
        <FormValue
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username ? <div>{formik.errors.username}</div> : null}

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormValue
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password ? <div>{formik.errors.password}</div> : null}

        <FormLabel htmlFor="email">Email Address</FormLabel>
        <FormValue
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email ? <div>{formik.errors.email}</div> : null}

        <FormBtn type="submit">Submit</FormBtn>
      </InfoWrapper>
    </FormContainer>
  );
};

export default RegForm;
