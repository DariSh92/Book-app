import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../redux/slices/booksSlice";
import filterReducer from "../redux/slices/filterSlice";
import errorReducer from "../redux/slices/errorSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
