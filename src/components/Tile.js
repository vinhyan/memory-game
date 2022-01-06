import React from 'react';
//styles
import styled from 'styled-components';
//redux
import { useDispatch, useSelector } from 'react-redux';
import {
  flipTile,
  selectMatchedTilesID,
  selectFlippedTilesID,
  resetTile,
} from '../slice/boardSlice';

const Tile = ({ tile }) => {
  const dispatch = useDispatch();
  const matchedTilesID = useSelector(selectMatchedTilesID);
  const flippedTilesID = useSelector(selectFlippedTilesID);

  let tileContent = '';

  let flipTileClick = () => {
    // dispatch(resetTile());
    dispatch(flipTile(tile.id));
  };

  if (flippedTilesID.includes(tile.id) || matchedTilesID.includes(tile.id)) {
    tileContent = tile.content;
    flipTileClick = () => {};
  }

  if (flippedTilesID.length === 2 && !matchedTilesID.includes(tile.id)) {
    flipTileClick = () => {
      dispatch(resetTile());
    };
  }

  return <TileStyled onClick={flipTileClick}>{tileContent}</TileStyled>;
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
