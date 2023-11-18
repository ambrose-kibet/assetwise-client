import { customAxios } from '../../../utils/config';
import axios, { AxiosError } from 'axios';
import { logoutUser } from '../auth/authSlice';
import { AppDispatch } from '../../store';
import { BlogContent } from './blogSlice';
export const uploadImageThunk = async (
  image: File,
  {
    rejectWithValue,
    dispatch,
  }: {
    rejectWithValue: (value: string) => void;
    dispatch: AppDispatch;
  }
) => {
  try {
    const formData = new FormData();
    formData.append('images', image);
    const { data } = await customAxios.post('/images/upload', formData);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ msg: string }, unknown>;
      if (axiosError.response) {
        if (axiosError.response.status === 401) {
          dispatch(logoutUser());
          return rejectWithValue('Unauthorized Logging you out...');
        }
        return rejectWithValue(axiosError.response.data.msg);
      } else if (axiosError.request) {
        return rejectWithValue('No response received');
      } else {
        return rejectWithValue('Network error');
      }
    }
    return rejectWithValue('Something went wrong');
  }
};

export const createBlogThunk = async (
  blog: BlogContent,
  {
    rejectWithValue,
    dispatch,
  }: {
    rejectWithValue: (value: string) => void;
    dispatch: AppDispatch;
  }
) => {
  try {
    const { data } = await customAxios.post('/posts', blog);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ msg: string }, unknown>;
      if (axiosError.response) {
        if (axiosError.response.status === 401) {
          dispatch(logoutUser());
          return rejectWithValue('Unauthorized Logging you out...');
        }
        return rejectWithValue(axiosError.response.data.msg);
      } else if (axiosError.request) {
        return rejectWithValue('No response received');
      } else {
        return rejectWithValue('Network error');
      }
    }
    return rejectWithValue('Something went wrong');
  }
};

export const getSingleBlogThunk = async (
  id: string,
  {
    rejectWithValue,
    dispatch,
  }: {
    rejectWithValue: (value: string) => void;
    dispatch: AppDispatch;
  }
) => {
  try {
    const { data } = await customAxios.get(`/posts/${id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ msg: string }, unknown>;
      if (axiosError.response) {
        if (axiosError.response.status === 401) {
          dispatch(logoutUser());
          return rejectWithValue('Unauthorized Logging you out...');
        }
        return rejectWithValue(axiosError.response.data.msg);
      } else if (axiosError.request) {
        return rejectWithValue('No response received');
      } else {
        return rejectWithValue('Network error');
      }
    }
    return rejectWithValue('Something went wrong');
  }
};
