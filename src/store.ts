import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { digitalCodeReducer } from './features';

export const store = configureStore({
  reducer: {
    digitalCodeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
