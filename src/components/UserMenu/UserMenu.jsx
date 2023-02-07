import { useSelector, useDispatch } from "react-redux";
import { selectName } from "../../redux/selectors";
import { logout } from "../../redux/authOperations";

import { UserMenuAvatar, UserMenuText, UserMenuBtn } from "./UserMenu.styled";

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(logout());
  };

  const name = useSelector(selectName);
  return (
    <>
      <UserMenuAvatar src="#" alt="pic" />
      <UserMenuText>Welcome, {name}!</UserMenuText>
      <UserMenuBtn type="button" onClick={handleClick}>
        LOGOUT
      </UserMenuBtn>
    </>
  );
};

export default UserMenu;
