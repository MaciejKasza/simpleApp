import styled from "styled-components";

export const StyledRegisterFormContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & h2 {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 64px;

      text-align: center;

      color: ${(props) => props.theme.textColor};
    }

    & div.error {
      width: 300px;
      padding: 12px;

      text-align: center;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;

      color: red;
      background: #ffd7d7;
      border-radius: 10px;
    }

    & input {
      width: 300px;
      height: 45px;

      padding: 12px 18px;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;

      color: #ffffff;
      background: ${(props) => props.theme.primaryColor};
      border-radius: 10px;

      outline: none;
      border: none;
    }

    & input::placeholder {
      color: #ffffff;
      opacity: 0.5;
    }

    & div.remember {
      /* padding-right: 18px; */
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 300px;

      & label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;

        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;

        color: ${(props) => props.theme.textColor};

        cursor: pointer;
        transition: color 0.3s;

        input {
          width: 18px;
          height: 18px;
          padding-right: 1rem;
          background-color: ${(props) => props.theme.primaryColor};
        }
      }

      a {
        display: block;

        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
        color: ${(props) => props.theme.textColor};

        cursor: pointer;

        transition: color 0.3s;
      }

      a:hover {
        color: ${(props) => props.theme.secondaryColor};
      }
    }

    button {
      width: 300px;
      height: 45px;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;

      background: ${(props) => props.theme.secondaryColor};
      color: ${(props) => props.theme.primaryColor};

      border-radius: 10px;
      border: none;
      outline: none;

      cursor: pointer;
    }

    button:hover {
      background-color: #18bf6c;
    }
  }
`;
