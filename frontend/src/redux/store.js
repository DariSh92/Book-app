import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../redux/slices/booksSlice";
import filterReducer from "../redux/slices/filterSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
  },
});

export default store;
