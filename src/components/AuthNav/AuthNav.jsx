import { AuthNavWrapper, StyledNavLink } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </AuthNavWrapper>
  );
};

export default AuthNav;
