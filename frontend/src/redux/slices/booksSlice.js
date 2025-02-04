import { createSlice } from "@reduxjs/toolkit";
import createBookWithID from "../../utils/createBookWithID";
import axios from "axios";
const initialState = [];

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
});
// вариант чтоб использовать асинхронную функцию в редьюсере
export const { addBook, deleteBook, addToggle } = booksSlice.actions;
export const thunkFunction = async (dispatch, getState) => {
  try {
    const response = await axios.get("http://localhost:4000/random-book");
    if (response.data && response.data.title && response.data.author) {
      dispatch(addBook(createBookWithID(response.data, "API")));
    }
  } catch (error) {
    console.log(error);
  }
};
export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
