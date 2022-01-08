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

const Tile = ({ tile, id }) => {
  const dispatch = useDispatch();
  const matchedTilesID = useSelector(selectMatchedTilesID);
  const flippedTilesID = useSelector(selectFlippedTilesID);

  let tileContent = '';
  let tileStyle = '';

  let flipTileClick = () => {
    dispatch(flipTile(id));
  };

  if (flippedTilesID.includes(id) || matchedTilesID.includes(id)) {
    tileContent = tile.content;
    flipTileClick = () => {};
  }

  if (flippedTilesID.includes(id)) {
    tileStyle = 'flipped';
  }

  if (!flippedTilesID.includes(id) && matchedTilesID.includes(id)) {
    tileStyle = 'matched';
  }

  if (flippedTilesID.length === 2 && !matchedTilesID.includes(id)) {
    flipTileClick = () => {
      dispatch(resetTile());
      dispatch(flipTile(id));
    };
  }

  return (
    <TileContainer onClick={flipTileClick} $tileStyle={tileStyle}>
      {tileContent}
    </TileContainer>
  );
};

const TileContainer = styled.div`
  width: 118px;
  height: 118px;
  border-radius: 59px;
  cursor: pointer;

  ${(props) => {
    if (props.$tileStyle === 'flipped') {
      return `
            background: orange;
            `;
    } else if (props.$tileStyle === 'matched') {
      return `
            background: #BCCED9;
            `;
    } else {
      return `
            background: #304859;
            `;
    }
  }}

  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  font-size: 56px;
  font-weight: bold;

  .flipped {
    background: #fda214;
  }

  .matched {
    background: pink;
  }
`;

export default Tile;
