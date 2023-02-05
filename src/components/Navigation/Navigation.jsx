import { Nav } from "./Navigation.styled";

import Logo from "../Logo/Logo";
import AuthNav from "../AuthNav/AuthNav";

const Navigation = () => {
  return (
    <header>
      <Nav>
        <Logo />

        <AuthNav />
      </Nav>
    </header>
  );
};

export default Navigation;
