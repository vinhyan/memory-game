import React from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from '../slice/boardSlice';
//components
import Tile from './Tile';
//styles
import styled from 'styled-components';

const Grid = () => {
  const board = useSelector(selectBoard);
  return (
    <GridStyled>
      {board.map((tile) => (
        <Tile tile={tile} key={tile.id} />
      ))}
    </GridStyled>
  );
};

const GridStyled = styled.div`
  margin: 105px auto 126px auto;
  width: 532px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 20px;
`;

export default Grid;
