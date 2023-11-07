import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../../utils/data';

export type Category = {
  name: string;
  id: string;
};
interface CategoryState {
  categories: Category[];
  category: Category;
  loading: boolean;
}
const category = {
  name: '',
  id: '',
};
const initialState: CategoryState = {
  categories,
  category,
  loading: false,
};
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
  },
});

export const { setCategories, setCategory } = categorySlice.actions;
export default categorySlice.reducer;
