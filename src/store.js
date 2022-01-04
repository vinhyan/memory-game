import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './slice/boardSlice';

export default configureStore({
  reducer: {
    boardGame: boardSlice,
  },
});
