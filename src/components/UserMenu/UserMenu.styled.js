import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: 375px) {
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
    text-decoration: underline;
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
export const StyledName = styled.p`
  color: white;
  text-decoration: none;
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 0;

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
export const StyledUser = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;
