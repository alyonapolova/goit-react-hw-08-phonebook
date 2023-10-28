import FormLogin from 'components/Form/FormLogin';
import { useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import { authError } from 'redux/auth/selectors';
import { resetError } from 'redux/auth/slice';

const LoginPage = () => {
  const error = useSelector(authError);
  const dispatch = useDispatch();

  const login = info => {
    dispatch(loginUser(info));
  };
  useEffect(() => {
    error && Notify.failure('Invalid email or password');
    if (error) {
      dispatch(resetError());
    }
  }, [error, dispatch]);

  return (
    <div>
      <FormLogin login={login} />
    </div>
  );
};

export default LoginPage;
