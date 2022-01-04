import React from 'react';
//styles
import styled from 'styled-components';

const Tile = ({ tile }) => {
  return (
    <TileStyled>
      <span>{tile.tile}</span>
    </TileStyled>
  );
};

const TileStyled = styled.div`
  width: 118px;
  height: 118px;
  background: #bcced9;
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
