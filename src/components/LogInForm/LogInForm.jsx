import {
  FormContainer,
  FormTitle,
  InfoWrapper,
  FormLabel,
  FormValue,
  FormBtn,
  Error,
} from "../../sharedStyles/sharedFormStyles.styled";

import validate from "../baseFunc";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { login } from "../../redux/authOperations";

const LogInForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      dispatch(login(values));
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormTitle>Log in</FormTitle>

      <InfoWrapper>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        {formik.touched.email ? <Error>{formik.errors.email}</Error> : null}
        <FormValue
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter your email address"
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

        <FormBtn type="submit">LOG IN</FormBtn>
      </InfoWrapper>
    </FormContainer>
  );
};

export default LogInForm;
