import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.nav`
  background-color: #333;
  color: white;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  &.active {
    color: violet;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const PermanentMenu = styled.div`
  display: flex;
  gap: 25px;
  margin-left: 35px;
`;
