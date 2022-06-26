import styled from "styled-components";

const ThemeIcon = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  return (
    <Icon onClick={changeTheme}>
      <div></div>
    </Icon>
  );
};

export default ThemeIcon;

const Icon = styled.div`
  position: relative;
  background-color: #fff;
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 35px;
  left: 35px;
  border-radius: 50%;
  z-index: 999;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 43px;
    height: 43px;
    border-radius: 50%;
    border: 6px solid #000;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      background-color: #000;
      width: 100%;
      height: 100%;
      transform: translateX(-50%);
    }
  }
`;
