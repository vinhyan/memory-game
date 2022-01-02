import React from 'react';
//styles
import styled from 'styled-components';
import { OrangeButton, BlueButton } from '../util/GlobalStyles';

const GameBoard = () => {
  return (
    <GameBoardStyled>
      <div className="header">
        <h2>memory</h2>
        <div className="buttons-container">
          <RestartButton>Restart</RestartButton>
          <NewGameButton>New Game</NewGameButton>
        </div>
      </div>
      <div className="grid"></div>
      <div className="footer">
        <div className="stats-container">
          <span>Time</span>
          <span className="stats">0:00</span>
        </div>
        <div className="stats-container">
          <span>Moves</span>
          <span className="stats">0</span>
        </div>
      </div>
    </GameBoardStyled>
  );
};

const GameBoardStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: #fcfcfc;
  padding: 0 165px;

  .header {
    padding-top: 68px;
    display: flex;
    justify-content: space-between;
  }

  .footer {
    display: flex;
    justify-content: center;
    gap: 30px;

    .stats-container {
      background: #dfe7ec;
      border-radius: 10px;
      width: 255px;
      height: 72px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 21px;
      font-weight: bold;
      color: #7191a5;
      .stats {
        font-size: 32px;
        color: #304859;
      }
    }
  }
`;

const RestartButton = styled(OrangeButton)`
  font-size: 20px;
  width: 127px;
  height: 52px;
  border-radius: 26px;
  font-size: 20px;
`;

const NewGameButton = styled(BlueButton)`
  background: #dfe7ec;
  font-size: 20px;
  width: 149px;
  height: 52px;
  color: #304859;
  margin-left: 16px;

  &:hover {
    background: #6395b8;
    color: #fcfcfc;
  }
`;

export default GameBoard;
