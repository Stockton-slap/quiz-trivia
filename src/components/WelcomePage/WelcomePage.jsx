import { HomeTitle, HomeImg, RegBtn } from "./WelcomePage.styled";

import img from "../../images/giamatti.png";

const WelcomePage = () => {
  return (
    <>
      <HomeTitle>How well do you know movies?</HomeTitle>
      <HomeImg src={img} alt="a" />
      <RegBtn to="/register">REGISTER HERE</RegBtn>
    </>
  );
};

export default WelcomePage;
