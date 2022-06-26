import React from "react";

import { WaveContainer } from "./Waves.styled";
import greenWave from "../../images/greenWave.png";
import darknWave from "../../images/darkWave.png";

const Wave = () => {
  return (
    <WaveContainer>
      <img src={greenWave} alt="" />
      <img src={darknWave} alt="" />
    </WaveContainer>
  );
};

export default Wave;
