import { createSlice } from '@reduxjs/toolkit';
//util
import { shuffle, tileData } from '../util/util';

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    themeOption: {
      numbers: false,
      icons: false,
    },
    playerOption: {
      one: false,
      two: false,
      three: false,
      four: false,
    },
    sizeOption: '',
    board: [],
  },
  reducers: {
    themeOption: (state, action) => {
      for (let theme in state.themeOption) {
        state.themeOption[theme] = false;
      }
      state.themeOption[action.payload] = true;
    },
    playerOption: (state, action) => {
      for (let player in state.playerOption) {
        state.playerOption[player] = false;
      }
      state.playerOption[action.payload] = true;
    },
    sizeOption: (state, action) => {
      state.sizeOption = action.payload;
    },
    board: (state, action) => {
      const newTileData = tileData.slice(0, action.payload);
      state.board = shuffle(newTileData);
    },
    flipTile: (state, action) => {
      const selectedTile = state.board[action.payload];
      selectedTile.isFlipped = true;

      //filter out the tiles being flipped, get their IDs and store in index1 and index 2:
      const [index1, index2] = state.board
        .filter((tile) => tile.isFlipped)
        .map((tile) => tile.id);

      if (index2 !== undefined) {
        const tile1 = state.board[index1];
        const tile2 = state.board[index2];

        if (tile1.content === tile2.content) {
          state.board[index1] = {
            ...tile1,
            isFlipped: true, //keep this to true and will only switch to false once click on the next tile - dispatch resetTile to set flipped tiles but not matched to false => this is to help with the current unflipped tiles' style
            isMatched: true,
          };
          state.board[index2] = {
            ...tile2,
            isFlipped: true,
            isMatched: true,
          };
        }
      }
    },
    resetTile: (state) => {
      state.board.map((tile) => (tile.isFlipped = false));
    },
  },
});

//actions
export const {
  themeOption,
  playerOption,
  sizeOption,
  board,
  flipTile,
  resetTile,
  restartGame,
} = boardSlice.actions;

//select state
export const selectSizeOption = (state) => state.boardGame.sizeOption;
export const selectPlayerOption = (state) => state.boardGame.playerOption;
export const selectThemeOption = (state) => state.boardGame.themeOption;
export const selectBoard = (state) => state.boardGame.board;

export const selectFlippedTilesID = (state) =>
  state.boardGame.board.filter((tile) => tile.isFlipped).map((tile) => tile.id);

export const selectMatchedTilesID = (state) =>
  state.boardGame.board.filter((tile) => tile.isMatched).map((tile) => tile.id);

export default boardSlice.reducer;
