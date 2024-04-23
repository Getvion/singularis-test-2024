import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  digitalCode: '',
  isCodeCorrect: false
};

const digitalCodeSlice = createSlice({
  name: 'listsCatalog',
  initialState,
  reducers: {
    setInputsData: (state, { payload }) => {
      const correctCode = 5432;

      state.digitalCode = Object.values(payload).join('');

      if (Number(state.digitalCode) === correctCode) {
        state.isCodeCorrect = true;
      } else {
        state.isCodeCorrect = false;
      }
    }
  }
});

export const digitalCodeReducer = digitalCodeSlice.reducer;
export const { setInputsData } = digitalCodeSlice.actions;

// selectors
export const selectInputValues = (state: { digitalCode: string; isCodeCorrect: boolean }) =>
  state.digitalCode;
export const selectIsCodeCorrect = (state: { digitalCode: string; isCodeCorrect: boolean }) =>
  state.isCodeCorrect;
