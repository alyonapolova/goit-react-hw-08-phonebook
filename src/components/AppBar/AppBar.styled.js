import { styled } from 'styled-components';

export const Header = styled.nav`
  background-color: #333;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;

  @media screen and (min-width: 375px) {
    padding: 15px 25px;
  }
  @media screen and (min-width: 768px) {
    padding: 32px;
  }
  @media screen and (min-width: 1024px) {
    padding: 42px;
  }
`;
