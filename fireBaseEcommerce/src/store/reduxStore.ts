import { configureStore } from "@reduxjs/toolkit";
import firebaseApiSlice from "../Features/firebaseApiSlice";

const store = configureStore({
  reducer: {
    [firebaseApiSlice.reducerPath]: firebaseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApiSlice.middleware),
});

export default store;
