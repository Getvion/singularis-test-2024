import { createSlice } from '@reduxjs/toolkit';

import { IStore } from '../../@types/store';

const initialState = {
  timeToWork: '10:00',
  leftTime: ''
};

const countdownTimerSlice = createSlice({
  name: 'listsCatalog',
  initialState,
  reducers: {
    setLeftTime: (state, { payload }) => {
      state.leftTime = payload;
    },
    setTimeToWork: (state, { payload }) => {
      state.timeToWork = payload;
    }
  }
});

export const countdownTimerReducer = countdownTimerSlice.reducer;
export const { setLeftTime, setTimeToWork } = countdownTimerSlice.actions;

// selectors
export const selectLeftTime = (state: IStore) => state.countdownTimer.leftTime;
export const selectTimeToWork = (state: IStore) => state.countdownTimer.timeToWork;
