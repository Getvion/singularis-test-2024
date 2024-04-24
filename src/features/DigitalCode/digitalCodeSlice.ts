import { IStore } from 'types/store';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  digitalCode: 0,
  correctCode: 5432,
  isCodeCorrect: false
};

const digitalCodeSlice = createSlice({
  name: 'listsCatalog',
  initialState,
  reducers: {
    setDigitalCode: (state, { payload }) => {
      state.digitalCode = Number(payload);
    },
    setIsCodeCorrect: (state, { payload }) => {
      state.digitalCode = payload;
    }
  }
});

export const digitalCodeReducer = digitalCodeSlice.reducer;
export const { setDigitalCode, setIsCodeCorrect } = digitalCodeSlice.actions;

// selectors
export const selectInputValues = (state: IStore) => state.digitalCode.digitalCode;
export const selectIsCodeCorrect = (state: IStore) => state.digitalCode.isCodeCorrect;
export const selectCorrectCode = (state: IStore) => state.digitalCode.correctCode;
