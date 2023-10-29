import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import { authLoggedIn } from 'redux/auth/selectors';
import { Header, PermanentMenu, StyledLink } from './Header.styled';

const HeaderMenu = () => {
  const isLoggedIn = useSelector(authLoggedIn);

  return (
    <>
      <Header>
        <PermanentMenu>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </PermanentMenu>
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Header>
    </>
  );
};

export default HeaderMenu;
