import {
  FormContainer,
  FormTitle,
  InfoWrapper,
  FormLabel,
  FormValue,
  FormBtn,
  Error,
} from "../sharedStyles/sharedFormStyles.styled";

import validate from "../baseFunc";
import { useFormik } from "formik";

const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormTitle>Log in</FormTitle>

      <InfoWrapper>
        <FormLabel htmlFor="username">Username</FormLabel>
        {formik.touched.username ? (
          <Error>{formik.errors.username}</Error>
        ) : null}
        <FormValue
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          placeholder="Enter your username"
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
