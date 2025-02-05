import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createBookWithID from "../../utils/createBookWithID";
import axios from "axios";
import { setError } from "./errorSlice";
const initialState = [];

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/random-book");

      return response.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
    }
    throw error;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      return [...state, action.payload];
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    addToggle: (state, action) => {
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    },
  },
  extraReducers: {
    [fetchBook.fulfilled]: (state, action) => {
      if (action.payload.title && action.payload.author) {
        console.log("fetchBook.fulfilled вызван ", action);
        state.push(createBookWithID(action.payload, "API"));
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBook.fulfilled, (state, action) => {
  //     if (action.payload.title && action.payload.author) {
  //       console.log("fetchBook.fulfilled вызван ", action);
  //       state.push(createBookWithID(action.payload, "API"));
  //     }
  //   });
  // },
});

// вариант чтоб использовать асинхронную функцию в редьюсере
export const { addBook, deleteBook, addToggle } = booksSlice.actions;
export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
