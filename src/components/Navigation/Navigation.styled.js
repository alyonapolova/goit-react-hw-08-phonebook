import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const PermanentMenu = styled.div`
  display: flex;
  gap: 5px;

  @media screen and (min-width: 375px) {
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 12px;
  &.active {
    color: violet;
  }

  &:hover {
    color: #45d4f5;
  }
  &:focus {
    color: #45d4f5;
  }

  @media screen and (min-width: 375px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 26px;
  }
`;
