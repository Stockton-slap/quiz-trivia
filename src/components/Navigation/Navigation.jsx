import { Nav } from "./Navigation.styled";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import Logo from "../Logo/Logo";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

import { selectIsLoggedIn } from "../../redux/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Nav>
        <Logo />

        {isLoggedIn ? (
          <>
            <Link to="/quiz" style={{ display: "none" }}>
              Quiz
            </Link>
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
