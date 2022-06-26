import styled from "styled-components";

export const NavigationStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 30px;
  width: 250px;
  height: 100vh;
  background: ${(props) => props.theme.pageBacgroundSecondary};
  z-index: 2;
  a {
    text-decoration: none;
  }

  & .logo {
    display: flex;
    width: 100%;
    align-items: center;
    color: ${(props) =>
      props.theme.name === "light"
        ? props.theme.secondaryColor
        : props.theme.secondaryColor};
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
  }

  svg {
    font-size: 36px;
  }

  h2 {
    margin-left: 10px;
  }

  ul {
    list-style: none;
    position: relative;
    margin-top: 50px;
  }

  li {
    padding: 5px;

    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      text-decoration: none;
      padding: 10px 0px;
      color: ${(props) =>
        props.theme.name === "light"
          ? props.theme.whiteColor
          : props.theme.primaryColor};

      &:hover {
        color: ${(props) => props.theme.secondaryColor};
      }

      svg {
        font-size: 16px;
      }
    }
  }
`;
