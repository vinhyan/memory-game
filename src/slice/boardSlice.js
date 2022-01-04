import { createSlice } from '@reduxjs/toolkit';

let numArr = [];
for (let i = 0; i < 18; i++) {
  numArr.push(i);
  numArr.push(i);
}

const tileData = numArr.map((num, index) => {
  return {
    tile: num,
    id: index,
    isFlipped: false,
    isMatched: false,
  };
});

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
    sizeOption: {
      fourByFour: false,
      sixBySix: false,
    },
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
      for (let size in state.sizeOption) {
        state.sizeOption[size] = false;
      }
      state.sizeOption[action.payload] = true;
    },
    board: (state, action) => {
      state.board = tileData.slice(0, action.payload);
    },
  },
});

//actions
export const { themeOption, playerOption, sizeOption, board } =
  boardSlice.actions;

//select state
export const selectSizeOption = (state) => state.boardGame.sizeOption;
export const selectPlayerOption = (state) => state.boardGame.playerOption;
export const selectThemeOption = (state) => state.boardGame.themeOption;
export const selectBoard = (state) => state.boardGame.board;

export default boardSlice.reducer;
