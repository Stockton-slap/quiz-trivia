import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/selectors";

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;

  return shouldNavigate ? <Navigate to="/quiz" /> : children;
};

export default PublicRoute;
