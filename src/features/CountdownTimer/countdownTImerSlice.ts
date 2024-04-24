import { createSlice } from '@reduxjs/toolkit';

import { IStore } from '../../@types/store';

const initialState = {
  isTimerEnd: false
};

const countdownTimerSlice = createSlice({
  name: 'listsCatalog',
  initialState,
  reducers: {
    setTimerEnd: (state, { payload }) => {
      state.isTimerEnd = payload;
    }
  }
});

export const countdownTimerReducer = countdownTimerSlice.reducer;
export const { setTimerEnd } = countdownTimerSlice.actions;

// selectors
export const selectTimerEnd = (state: IStore) => state.countdownTimer.isTimerEnd;
