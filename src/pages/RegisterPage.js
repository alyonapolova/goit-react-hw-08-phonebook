import FormRegister from 'components/Form/FormRegister';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'redux/auth/operations';
import { authError } from 'redux/auth/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { resetError } from 'redux/auth/slice';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(authError);

  const registration = info => {
    dispatch(registerUser(info));
  };
  useEffect(() => {
    error && Notify.warning('You have already registered. Please log in');
    if (error) {
      dispatch(resetError());
    }
  }, [navigate, error, dispatch]);
  return (
    <div>
      <FormRegister registration={registration} />
    </div>
  );
};

export default RegisterPage;
