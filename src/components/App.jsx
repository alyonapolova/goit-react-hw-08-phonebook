import { refreshUser } from 'redux/auth/operations';
import Layout from 'pages/Layout';
import { authIsRefreshing } from 'redux/auth/selectors';
import Loader from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import PublicRoute from 'guards/PublicRoute/PublicRoute';
import { Route, Routes } from 'react-router-dom';
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(authIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};