import {
  FormContainer,
  FormTitle,
  InfoWrapper,
  FormLabel,
  FormValue,
  FormBtn,
  Error,
} from "../../sharedStyles/sharedFormStyles.styled";

import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { register } from "../../redux/authOperations";

const RegForm = () => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "*Required";
    } else if (values.name.length > 15 || values.name.length < 6) {
      errors.name = "*Must be not more than 15 and not less than 6 characters";
    }

    if (!values.email) {
      errors.email = "*Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Invalid email address";
    }

    if (!values.password) {
      errors.password = "*Required";
    } else if (values.password.length < 6) {
      errors.password = "*Must be 6 characters or more";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormTitle>Register</FormTitle>

      <InfoWrapper>
        <FormLabel htmlFor="name">Name</FormLabel>
        {formik.touched.name ? <Error>{formik.errors.name}</Error> : null}
        <FormValue
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Enter your name"
        />

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormValue
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Enter your password"
        />
        {formik.touched.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}

        <FormLabel htmlFor="email">Email Address</FormLabel>
        <FormValue
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter your email address"
        />
        {formik.touched.email ? <Error>{formik.errors.email}</Error> : null}

        <FormBtn type="submit">REGISTER</FormBtn>
      </InfoWrapper>
    </FormContainer>
  );
};

export default RegForm;
