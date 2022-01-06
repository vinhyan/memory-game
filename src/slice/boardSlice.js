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
      const selectedTile = state.board[action.payload];
      selectedTile.isFlipped = true;

      //filter out the flipped tiles, get their IDs and store in index1 and index 2:
      const [index1, index2] = state.board
        .filter((tile) => tile.isFlipped)
        .map((tile) => tile.id);

      console.log(index1, index2);

      if (index2 !== undefined) {
        const tile1 = state.board[index1];
        const tile2 = state.board[index2];

        if (tile1.content === tile2.content) {
          state.board[index1] = {
            ...tile1,
            isFlipped: false, //set isFlipped to false so the filter() above won't filter out the matched pairs
            isMatched: true,
          };
          state.board[index2] = {
            ...tile2,
            isFlipped: false,
            isMatched: true,
          };
        }
      }
    },
    resetTile: (state) => {
      state.board.map((tile) => (tile.isFlipped = false));
    },
    restartGame: (state) => {
      console.log('1');
      state.board.map((tile, index) => {
        return (tile = {
          ...state.board[index],
          isFlipped: false,
          isMatched: false,
        });
      });
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
