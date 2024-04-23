import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { countdownTimer, digitalCode } from './features';

export const store = configureStore({
  reducer: {
    digitalCode,
    countdownTimer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
