import { configureStore } from '@reduxjs/toolkit';
import navreducer from './features/nav/navSlice';
import contactreducer from './features/contact/contactSlice';
import blogReducer from './features/blog/blogSlice';
import categoryReducer from './features/blog/categorySlice';
import authReducer from './features/auth/authSlice';
import propertyReducer from './features/property/propertySlice';
export const store = configureStore({
  reducer: {
    nav: navreducer,
    contact: contactreducer,
    blog: blogReducer,
    category: categoryReducer,
    auth: authReducer,
    property: propertyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
