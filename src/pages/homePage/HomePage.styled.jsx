import styled from "styled-components";

export const StyledPage = styled.div`
  main {
    width: 100vw;
    min-height: 100vh;
    padding-left: 250px;

    @media only screen and (max-width: 600px) {
      padding-left: 60px;
    }
  }
`;
