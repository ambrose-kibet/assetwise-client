/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import {
  createBlogThunk,
  getSingleBlogThunk,
  uploadImageThunk,
} from './thunks';
import { customAxios } from '../../../utils/config';
import { logoutUser } from '../auth/authSlice';
export type BlogContent = {
  _id?: string;
  coverImage: string;
  title: string;
  description: string;
  content: string;
  tags: string;
  category: string;
  status: string;
  date?: string;
  featured: boolean;
  author?: {
    fullName: string;
    avatar: string;
  };
};
export type DBPost = {
  _id: string;
  title: string;
  coverImage: string;
  description: string;
  author: Author;
  category: Category;
  featured: boolean;
};
type IFilters = {
  [key: string]: string | number;
  status: string;
  pages: number;
  currentPage: number;
};
interface BlogState {
  posts: DBPost[];
  myPosts: DBPost[];
  post: BlogContent;
  isLoading: boolean;
  flagId: string;
  isEditing: boolean;
  blogContent: BlogContent;
  filters: IFilters;
}
type Author = {
  _id: string;
  fullName: string;
  avatar: string;
};

type Category = {
  _id: string;
  name: string;
};

const blogContent = {
  _id: '',
  coverImage: '',
  title: '',
  description: '',
  content: '',
  tags: '',
  category: '',
  status: 'draft',
  date: '',
  featured: false,
};
const initialState: BlogState = {
  posts: [],
  myPosts: [],
  post: blogContent,
  isLoading: false,
  isEditing: false,
  blogContent,
  flagId: '',
  filters: {
    status: 'publish',
    pages: 0,
    currentPage: 1,
  },
};

export const uploadImage = createAsyncThunk(
  'blog/uploadImage',
  // @ts-ignore
  uploadImageThunk
);
export const createBlog = createAsyncThunk(
  'blog/createBlog',
  // @ts-ignore
  createBlogThunk
);

export const getSingleBlog = createAsyncThunk(
  'blog/getSingleBlog',
  // @ts-ignore
  getSingleBlogThunk
);
export const getPosts = createAsyncThunk(
  'blog/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.get(`/posts`);
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
export const getMyPosts = createAsyncThunk(
  'blog/getMyPosts',
  async (
    { page, status }: { page: number; status: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await customAxios.get(
        `/posts/my-posts/?status=${status}&page=${page}`
      );
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
export const updateBlog = createAsyncThunk(
  'blog/updateBlog',
  async (data: BlogContent, { rejectWithValue, dispatch }) => {
    try {
      const { data: res } = await customAxios.patch(`/posts/${data._id}`, data);

      return res;
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
export const deleteBlog = createAsyncThunk(
  'blog/deleteBlog',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.delete(`/posts/${id}`);
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

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    handleChange(state, { payload: { name, value } }) {
      // @ts-ignore
      state.blogContent[name] = value;
    },
    setIsEditing(state, action: PayloadAction<boolean>) {
      state.isEditing = action.payload;
    },
    setBlogContent(state, action) {
      state.blogContent = action.payload;
    },
    resetBlogContent(state) {
      state.blogContent = blogContent;
    },
    updateFilters(
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: string; value: string | number }>
    ) {
      if (name === 'currentPage') {
        if (value === 'next') {
          if (state.filters.currentPage === state.filters.pages) return;
          state.filters.currentPage += 1;
        } else if (value === 'prev') {
          if (state.filters.currentPage === 1) return;
          state.filters.currentPage -= 1;
        }
      } else {
        state.filters[name] = value;
      }
    },
    setFlagId(state, action: PayloadAction<string>) {
      state.flagId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.blogContent.coverImage = payload.urls[0].url;
      })
      .addCase(uploadImage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.blogContent.coverImage = '';
        toast.error(payload as string, { position: 'top-center' });
      });
    builder
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.blogContent = blogContent;
        toast.success('Post created sucessfully', { position: 'top-center' });
      })
      .addCase(createBlog.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, { position: 'top-center' });
      });
    builder
      .addCase(getSingleBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleBlog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.post = {
          ...state.post,
          ...payload.data,
          tags: payload.data.tags.join(','),
        };

        if (state.isEditing) state.blogContent = payload.data;
      })
      .addCase(getSingleBlog.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, { position: 'top-center' });
      });
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.posts = payload.data;
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, { position: 'top-center' });
      });

    builder
      .addCase(getMyPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.myPosts = payload.data;
        state.filters.pages = payload.numberOfPages;
        state.filters.currentPage = payload.currentPage;
      })
      .addCase(getMyPosts.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, { position: 'top-center' });
      });
    builder
      .addCase(updateBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isEditing = false;
        state.blogContent = blogContent;
        toast.success('Post updated sucessfully', { position: 'top-center' });
      })
      .addCase(updateBlog.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, { position: 'top-center' });
      });
    builder
      .addCase(deleteBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.flagId = '';
        toast.success('Post deleted sucessfully', { position: 'top-center' });
      })
      .addCase(deleteBlog.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, { position: 'top-center' });
      });
  },
});

export const {
  setIsEditing,
  setBlogContent,
  resetBlogContent,
  handleChange,
  updateFilters,
  setFlagId,
} = blogSlice.actions;

export default blogSlice.reducer;
