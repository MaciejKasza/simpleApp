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
  @media only screen and (max-width: 600px) {
    width: 60px;
    height: 100%;
    padding: 5px 5px;

    h2 {
      display: none;
    }
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
      border-radius: 10px;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      text-decoration: none;
      padding: 10px 5px;
      color: ${(props) =>
        props.theme.name === "light"
          ? props.theme.whiteColor
          : props.theme.primaryColor};

      &:hover {
        color: ${(props) => props.theme.secondaryColor};
      }

      &.active {
        background-color: ${(props) =>
          props.theme.name === "light"
            ? props.theme.whiteColor
            : props.theme.primaryColor};
        color: ${(props) =>
          props.theme.name === "light"
            ? props.theme.primaryColor
            : props.theme.whiteColor};
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 5px 10px
          ${(props) =>
            props.theme.name === "light"
              ? "rgba(229,229,229,0.3)"
              : "rgba(9,53,69,0.3)"};
      }

      svg {
        font-size: 16px;
      }
    }

    @media only screen and (max-width: 600px) {
      & {
        padding: 0;
        margin: 5px 0;
      }
      a {
        justify-content: center;

        svg {
          font-size: 24px;
        }
      }
      a span {
        display: none;
      }
    }
  }
`;
