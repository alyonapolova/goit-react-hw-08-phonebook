import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import PublicRoute from 'guards/PublicRoute/PublicRoute';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import Layout from 'pages/Layout';
import { authIsRefreshing } from 'redux/auth/selectors';
import Loader from './Loader/Loader';
import HomePage from 'pages/HomePage';
const ContactsPage = lazy(() => import('pages/ContactsPage'));
// const Home = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const Register = lazy(() => import('pages/Register'));

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
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts">
              <Register />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};
