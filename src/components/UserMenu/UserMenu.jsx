import { useSelector } from "react-redux";
import { selectName } from "../../redux/selectors";

import { UserMenuAvatar, UserMenuText, UserMenuBtn } from "./UserMenu.styled";

const UserMenu = () => {
  const name = useSelector(selectName);
  return (
    <>
      <UserMenuAvatar src="#" alt="pic" />
      <UserMenuText>Welcome, {name}!</UserMenuText>
      <UserMenuBtn type="button">LOGOUT</UserMenuBtn>
    </>
  );
};

export default UserMenu;
