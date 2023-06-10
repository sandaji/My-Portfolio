import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  padding-top: 10rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    // padding-top: 10rem;
    margin: 3rem auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
   }
`;
