import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ContactState = {
  email: string;
  message: string;
  name: string;
  subject: string;
};

const initialState = {
  email: '',
  message: '',
  name: '',
  subject: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    handleChange: (
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: string; value: string }>
    ) => {
      state[name as keyof ContactState] = value;
    },
    resetForm: () => initialState,
  },
});

export const { handleChange, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
