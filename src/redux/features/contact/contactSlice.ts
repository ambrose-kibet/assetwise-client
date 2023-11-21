import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logoutUser } from '../auth/authSlice';
import axios, { AxiosError } from 'axios';
import { customAxios } from '../../../utils/config';
import { toast } from 'react-toastify';

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

export const sendEmail = createAsyncThunk(
  'contact/sendEmail',
  async (
    { email, message, name, subject }: ContactState,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await customAxios.post('/users/sendmail', {
        email,
        message,
        name,
        subject,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser());
            return rejectWithValue('Unauthorized');
          }
          return rejectWithValue(axiosError.response.data.msg);
        } else if (axiosError.request) {
          return rejectWithValue('No response received');
        }
      }
      return rejectWithValue('Something went wrong');
    }
  }
);

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
  extraReducers: (builder) => {
    builder

      .addCase(sendEmail.fulfilled, (state) => {
        state.email = '';
        state.message = '';
        state.name = '';
        state.subject = '';
        toast.success('Email sent successfully');
      })
      .addCase(sendEmail.rejected, (_, { payload }) => {
        toast.error(payload as string);
      });
  },
});

export const { handleChange, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
