import { StyledLink, StyledNav } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <StyledNav>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </StyledNav>
  );
};
export default AuthMenu;
