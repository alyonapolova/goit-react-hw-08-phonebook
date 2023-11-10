import { styled } from 'styled-components';

export const Header = styled.nav`
  background-color: #333;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;

  @media screen and (min-width: 768px) {
    padding: 25px 35px;
  }
  @media screen and (min-width: 1024px) {
    padding: 35px 45px;
  }
`;
