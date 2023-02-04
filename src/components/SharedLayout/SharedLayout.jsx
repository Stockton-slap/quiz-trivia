import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
