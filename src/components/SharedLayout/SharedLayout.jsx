import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";

import Navigation from "../Navigation/Navigation";

const SharedLayout = () => {
  return (
    <Container>
      <Navigation />

      <Outlet />
    </Container>
  );
};

export default SharedLayout;
