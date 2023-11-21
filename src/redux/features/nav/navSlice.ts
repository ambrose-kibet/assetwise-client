import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isSubLinksOpen: false,
  position: 0,
  content: '',
  isSidebarOpen: false,
  isModalOpen: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    openSublinks: (
      state,
      {
        payload: { position, content },
      }: PayloadAction<{ position: number; content: string }>
    ) => {
      state.isSubLinksOpen = true;
      state.position = position;
      state.content = content;
    },
    closeSublinks: (state) => {
      state.isSubLinksOpen = false;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const {
  openSublinks,
  closeSublinks,
  openSidebar,
  closeSidebar,
  openModal,
  closeModal,
} = navSlice.actions;
export default navSlice.reducer;
