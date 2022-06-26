import styled from "styled-components";

export const WaveContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-height: 150px;
  & img {
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0;
    left: 0;
    max-height: 120px;
  }
`;
