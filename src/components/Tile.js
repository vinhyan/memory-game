import React from 'react';
//styles
import styled from 'styled-components';
//redux
import { useDispatch } from 'react-redux';
import { flipTile } from '../slice/boardSlice';

const Tile = ({ tile }) => {
  const dispatch = useDispatch();

  const flipTileClick = () => {
    console.log('yo');
    dispatch(flipTile(tile.id));
  };

  const flippedTile = <span>{tile.content}</span>;

  return (
    <TileStyled onClick={flipTileClick}>
      {tile.isFlipped || tile.isMatched ? flippedTile : ''}
    </TileStyled>
  );
};

const TileStyled = styled.div`
  width: 118px;
  height: 118px;
  background: #304859;
  border-radius: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  font-size: 56px;
  font-weight: bold;
  cursor: pointer;
`;

export default Tile;
