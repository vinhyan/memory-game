import { createSlice } from '@reduxjs/toolkit';

let numArr = [];
for (let i = 0; i < 18; i++) {
  numArr.push(i);
  numArr.push(i);
}

const tileData = numArr.map((num, index) => {
  return {
    content: num,
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
    flipTile: (state, action) => {
      // console.log(action.payload);
      const selectedTile = state.board[action.payload];
      selectedTile.isFlipped = true;

      state.board.forEach((tile) => {
        if (tile.id !== selectedTile.id && tile.isFlipped && !tile.isMatched) {
          if (tile.content === selectedTile.content) {
            tile.isMatched = true;
            selectedTile.isMatched = true;
          }

          else {
            tile.isFlipped = false;
            selectedTile.isFlipped = false;
          }
        }
        

        // if (tile.content === selectedTile.content) {
        //   tile.isMatched = true;
        //   selectedTile.isMatched = true;
        // }
      });

      // for (let tile in state.board) {
      //   if (
      //     state.board[tile].isFlipped &&
      //     state.board[tile].content === state.board[action.payload].content
      //   ) {
      //     state.board[tile].isMatched = true;
      //     state.board[action.payload].isMatched = true;
      //   }
      // }
    },
  },
});

//actions
export const { themeOption, playerOption, sizeOption, board, flipTile } =
  boardSlice.actions;

//select state
export const selectSizeOption = (state) => state.boardGame.sizeOption;
export const selectPlayerOption = (state) => state.boardGame.playerOption;
export const selectThemeOption = (state) => state.boardGame.themeOption;
export const selectBoard = (state) => state.boardGame.board;

export default boardSlice.reducer;
