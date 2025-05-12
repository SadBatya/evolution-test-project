import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalSlice";
import { apiSlice } from "./apiSlice";
import { backdropSlice } from "./backdropSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    backdrop: backdropSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
