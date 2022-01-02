import React from 'react';
//styles
import styled from 'styled-components';
import { OrangeButton, BlueButton } from '../util/GlobalStyles';

const Home = () => {
  return (
    <HomeStyled>
      <h1>memory</h1>
      <ContainerStyled>
        <OptionContainer>
          <h3>Select Theme</h3>
          <div className="buttons-container">
            <OptionButton>Numbers</OptionButton>
            <OptionButton>Icons</OptionButton>
          </div>
        </OptionContainer>
        <OptionContainer>
          <h3>Numbers of Players</h3>
          <div className="buttons-container">
            <PlayerButton>1</PlayerButton>
            <PlayerButton>2</PlayerButton>
            <PlayerButton>3</PlayerButton>
            <PlayerButton>4</PlayerButton>
          </div>
        </OptionContainer>
        <OptionContainer>
          <h3>Grid Size</h3>
          <div className="buttons-container">
            <OptionButton>4x4</OptionButton>
            <OptionButton>6x6</OptionButton>
          </div>
        </OptionContainer>
        <StartButton>Start Game</StartButton>
      </ContainerStyled>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: #152938;

  h1 {
    color: #fcfcfc;
    text-align: center;
    padding: 154px 0 78px 0;
  }

  h3 {
    color: #7191a5;
  }
`;

const ContainerStyled = styled.div`
  width: 654px;
  background: #fcfcfc;
  border-radius: 20px;
  margin: 0 auto;
  padding: 56px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const OptionContainer = styled.div`
  h3 {
    padding-bottom: 16px;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
  }
`;

const StartButton = styled(OrangeButton)`
  width: 541px;
  height: 70px;
  font-size: 32px;
  border-radius: 35px;
`;

const OptionButton = styled(BlueButton)`
  width: 256px;
  height: 52px;
  font-size: 26px;
`;

const PlayerButton = styled(BlueButton)`
  width: 119px;
  height: 52px;
  font-size: 26px;
`;

export default Home;
