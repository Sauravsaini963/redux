import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import auth from "./Auth/authSlice";
import posts from "./posts/postSlice";

export const store = configureStore({
  reducer: {
    posts,
    auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }),
});