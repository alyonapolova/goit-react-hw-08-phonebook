import { styled } from 'styled-components';

export const Global = styled.div`
width=100%;
max-width:374px;
margin: 0 auto;


@media screen and (min-width: 375px) 
{max-width:767px;
}
@media screen and (min-width: 768px) {
   
    max-width: 1023px; 
  }
  
  @media screen and  (min-width: 1024px) {
   max-width: 1400px;

  }
`;
