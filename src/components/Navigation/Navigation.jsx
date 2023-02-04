import { Nav } from "./Navigation.styled";

import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "4rem",
          textShadow: "5px 5px #00000066",
          color: "#ff8604",
          fontFamily: '"Kalam", cursive',
        }}
      >
        TRIVIA
      </Link>

      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </Nav>
  );
};

export default Navigation;
