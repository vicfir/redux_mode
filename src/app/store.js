import { configureStore } from "@reduxjs/toolkit";
import modeReducer from '../features/mode/homeSlice'

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});
