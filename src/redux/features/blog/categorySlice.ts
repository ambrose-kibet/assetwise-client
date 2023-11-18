import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { customAxios } from '../../../utils/config';
import axios, { AxiosError } from 'axios';
import { logoutUser } from '../auth/authSlice';

import { PayloadAction } from '@reduxjs/toolkit';
import { getMyPosts, getPosts, handleChange } from './blogSlice';

export type Category = {
  name: string;
  _id: string;
};

interface CategoryState {
  categories: Category[];
  category: Category;
  loading: boolean;
  localCategory: string;
  isEditing: boolean;
  flagId: string;
}
const category = {
  name: '',
  _id: '',
};
const initialState: CategoryState = {
  categories: [],
  category,
  loading: false,
  localCategory: '',
  isEditing: false,
  flagId: '',
};
export const getCategories = createAsyncThunk(
  'category/getCategories',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.get('/categories');
      if (data.data.length > 0) {
        dispatch(handleChange({ name: 'category', value: data.data[0]._id }));
      }
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser()); // rewrite this a fter authSlice is done
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
  }
);
export const addCategory = createAsyncThunk(
  'category/addCategory',
  async (category: Partial<Category>, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.post('/categories', category);
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
  }
);
export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (_id: string, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.delete(`/categories/${_id}`);
      dispatch(getPosts());
      dispatch(getMyPosts({ page: 1, status: 'publish' }));
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
  }
);
export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async ({ _id, name }: Category, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.put(`/categories/${_id}`, { name });
      dispatch(getPosts());
      dispatch(getMyPosts({ page: 1, status: 'publish' }));
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
  }
);
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    handleInputChange(state, { payload }: PayloadAction<string>) {
      state.localCategory = payload;
    },
    setIsEditing(state, { payload }: PayloadAction<boolean>) {
      state.isEditing = payload;
    },
    setFlagId(state, { payload }: PayloadAction<string>) {
      state.flagId = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string, { position: 'top-center' });
      });
    builder
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.localCategory = '';
        state.categories.push(action.payload.data);
      })
      .addCase(addCategory.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string, { position: 'top-center' });
      });
    builder
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter(
          (category) => category._id !== action.payload.data._id
        );
        toast.success('category removed sucessfully', {
          position: 'top-center',
        });
      })
      .addCase(deleteCategory.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string, { position: 'top-center' });
      });
    builder
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.map((category) =>
          category._id === action.payload.data._id
            ? action.payload.data
            : category
        );
        state.isEditing = false;
        state.flagId = '';
        state.localCategory = '';
        toast.success('category updated sucessfully', {
          position: 'top-center',
        });
      })
      .addCase(updateCategory.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string, { position: 'top-center' });
      });
  },
});

export const {
  setCategories,
  setCategory,
  handleInputChange,
  setFlagId,
  setIsEditing,
} = categorySlice.actions;
export default categorySlice.reducer;
