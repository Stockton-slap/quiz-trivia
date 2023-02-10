import { Nav } from "./Navigation.styled";

import { useSelector } from "react-redux";

import Logo from "../Logo/Logo";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

import { StyledNavLink } from "./Navigation.styled";

import { selectIsLoggedIn } from "../../redux/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Nav>
        <Logo />

        {isLoggedIn ? (
          <>
            <StyledNavLink to="/quiz">Quiz</StyledNavLink>
            <UserMenu />
          </>
        ) : (
          <AuthNav />
        )}
      </Nav>
    </header>
  );
};

export default Navigation;
