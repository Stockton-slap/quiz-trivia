import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/selectors";

import { UserMenuAvatar, UserMenuText, UserMenuBtn } from "./UserMenu.styled";

const UserMenu = () => {
  const username = useSelector(selectUserName);
  return (
    <>
      <UserMenuAvatar src="#" alt="pic" />
      <UserMenuText>Welcome, {username}!</UserMenuText>
      <UserMenuBtn type="button">LOGOUT</UserMenuBtn>
    </>
  );
};

export default UserMenu;
