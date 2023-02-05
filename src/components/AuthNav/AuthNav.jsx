import { AuthNavWrapper, StyledNavLink } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </AuthNavWrapper>
  );
};

export default AuthNav;
