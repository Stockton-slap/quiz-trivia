import { useSelector, useDispatch } from "react-redux";
import { selectName } from "../../redux/selectors";
import { logout } from "../../redux/authOperations";

import {
  UserMenuContainer,
  UserMenuAvatar,
  UserMenuText,
  UserMenuBtn,
} from "./UserMenu.styled";

import avatar from "./../../images/avatar.png";

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(logout());
  };

  const name = useSelector(selectName);

  return (
    <UserMenuContainer>
      <UserMenuAvatar src={avatar} alt="avatar" />
      <UserMenuText>Welcome, {name}!</UserMenuText>
      <UserMenuBtn type="button" onClick={handleClick}>
        LOGOUT
      </UserMenuBtn>
    </UserMenuContainer>
  );
};

export default UserMenu;
