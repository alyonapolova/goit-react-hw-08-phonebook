import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authLoggedIn } from 'redux/auth/selectors';

const PublicRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
export default PublicRoute;
