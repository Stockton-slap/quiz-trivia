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

import { useDispatch } from "react-redux";
import { login } from "../../redux/authOperations";

const LogInForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
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

        <FormBtn type="submit">LOG IN</FormBtn>
      </InfoWrapper>
    </FormContainer>
  );
};

export default LogInForm;
