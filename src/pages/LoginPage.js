import FormLogin from 'components/Form/FormLogin';
import { useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import { authError, authLoggedIn } from 'redux/auth/selectors';
import { resetError } from 'redux/auth/slice';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const error = useSelector(authError);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authLoggedIn);
  const login = info => {
    dispatch(loginUser(info));
  };
  useEffect(() => {
    isLoggedIn && <Navigate to="/contacts" />;
    error && Notify.failure('Invalid email or password');
    if (error) {
      dispatch(resetError());
    }
  }, [error, dispatch, isLoggedIn]);

  return (
    <div>
      <FormLogin login={login} />
    </div>
  );
};

export default LoginPage;
