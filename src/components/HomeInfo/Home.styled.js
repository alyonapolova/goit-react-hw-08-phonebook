import { styled } from 'styled-components';

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 32px 20px;
  @media screen and (min-width: 375px) {
    padding: 42px 25px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
    padding: 62px 32px;
  }
  @media screen and (min-width: 1024px) {
    padding: 82px 42px;
  }
`;
export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const RightDiv = styled.div``;
export const Title1 = styled.h2`
  text-align: center;
  font-size: 24px;
`;
export const Title2 = styled.h2`
  text-align: center;
  font-size: 22px;
`;

export const ResponsiveImage = styled.img`
  width: 250px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;
