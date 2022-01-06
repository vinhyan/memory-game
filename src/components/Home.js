import React from 'react';
//styles
import styled from 'styled-components';
import { OrangeButton, BlueButton } from '../util/GlobalStyles';
//redux
import { useDispatch, useSelector } from 'react-redux';
import {
  board,
  sizeOption,
  selectSizeOption,
  playerOption,
  selectPlayerOption,
  themeOption,
  selectThemeOption,
} from '../slice/boardSlice';

const Home = () => {
  const dispatch = useDispatch();

  const gameSize = Number(useSelector(selectSizeOption));
  const { one, two, three, four } = useSelector(selectPlayerOption);
  const { numbers, icons } = useSelector(selectThemeOption);

  const selectTheme = (e) => {
    let selectedTheme = e.target.innerHTML.toLowerCase();
    dispatch(themeOption(selectedTheme));
  };

  const selectPlayer = (e) => {
    let selectedNumOfPlayer = e.target.value;
    dispatch(playerOption(selectedNumOfPlayer));
  };

  const selectBoardSize = (e) => {
    // let selectedSize = e.target.value;
    // dispatch(sizeOption(selectedSize));
    let selectedSize = e.target.innerHTML === '4x4' ? 16 : 36;
    dispatch(sizeOption(selectedSize));
  };

  const startGame = () => {
    // let size;
    // if (fourByFour) size = 16;
    // if (sixBySix) size = 36;
    dispatch(board(gameSize));
  };

  return (
    <HomeStyled>
      <h1>memory</h1>
      <ContainerStyled>
        <OptionContainer>
          <h3>Select Theme</h3>
          <div className="buttons-container">
            <OptionButton $selected={numbers} onClick={selectTheme}>
              Numbers
            </OptionButton>
            <OptionButton $selected={icons} onClick={selectTheme}>
              Icons
            </OptionButton>
          </div>
        </OptionContainer>
        <OptionContainer>
          <h3>Numbers of Players</h3>
          <div className="buttons-container">
            <PlayerButton value="one" $selected={one} onClick={selectPlayer}>
              1
            </PlayerButton>
            <PlayerButton value="two" $selected={two} onClick={selectPlayer}>
              2
            </PlayerButton>
            <PlayerButton
              value="three"
              $selected={three}
              onClick={selectPlayer}
            >
              3
            </PlayerButton>
            <PlayerButton value="four" $selected={four} onClick={selectPlayer}>
              4
            </PlayerButton>
          </div>
        </OptionContainer>
        <OptionContainer>
          <h3>Grid Size</h3>
          <div className="buttons-container">
            <OptionButton
              value="fourByFour"
              $selected={gameSize === 16 ? true : false}
              onClick={selectBoardSize}
            >
              4x4
            </OptionButton>
            <OptionButton
              value="sixBySix"
              $selected={gameSize === 36 ? true : false}
              onClick={selectBoardSize}
            >
              6x6
            </OptionButton>
          </div>
        </OptionContainer>
        <StartButton onClick={startGame}>Start Game</StartButton>
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

    .selected {
      background: #304859;
      color: #fcfcfc;
    }
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
  ${(props) => {
    if (props.$selected) {
      return `
      background: #304859;
      `;
    }
  }}
`;

const PlayerButton = styled(BlueButton)`
  width: 119px;
  height: 52px;
  font-size: 26px;
  ${(props) => {
    if (props.$selected) {
      return `
      background: #304859;
      `;
    }
  }}
`;

export default Home;
