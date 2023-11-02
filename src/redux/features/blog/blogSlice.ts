import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BlogContent = {
  id?: string;
  coverImage: string;
  title: string;
  description: string;
  content: string;
  tags: string;
  category: string;
  status: string;
  date?: string;
};
interface BlogState {
  posts: BlogContent[];
  post: BlogContent;
  loading: boolean;
  isEditing: boolean;
  blogContent: BlogContent;
}
const blogContent = {
  coverImage: '',
  title: '',
  description: '',
  content: '',
  tags: '',
  category: '',
  status: 'draft',
  date: '',
};
const initialState: BlogState = {
  posts: [],
  post: blogContent,
  loading: false,
  isEditing: false,
  blogContent,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    handleChange(
      state,
      {
        payload: { name, value },
      }: PayloadAction<{
        name: string;
        value: string;
      }>
    ) {
      state.blogContent[name as keyof BlogContent] = value;
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
  },
});

export const { setIsEditing, setBlogContent, resetBlogContent, handleChange } =
  blogSlice.actions;

export default blogSlice.reducer;
