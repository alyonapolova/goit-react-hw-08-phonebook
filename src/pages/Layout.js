import HeaderMenu from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const MainM = styled.main`
  padding: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <>
      <HeaderMenu />
      <MainM>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainM>
    </>
  );
};

export default Layout;
