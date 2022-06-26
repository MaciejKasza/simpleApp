import styled from "styled-components";

export const StyledContent = styled.div`
  padding: 50px 50px;
  color: ${(props) => props.theme.textColor};

  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;
