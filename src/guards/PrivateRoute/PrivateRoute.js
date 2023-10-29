import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authIsRefreshing, authLoggedIn } from 'redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authLoggedIn);
  const isRefreshing = useSelector(authIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
export default PrivateRoute;
