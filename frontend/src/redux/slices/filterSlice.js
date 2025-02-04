import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.title = action.payload;
    },

    setFilterAuthor: (state, action) => {
      state.author = action.payload;
    },
    setOnlyFavorite: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setFilter, resetFilters, setFilterAuthor, setOnlyFavorite } =
  filterSlice.actions;
export const selectOnlyFavorite = (state) => state.filter.onlyFavorite;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectTitleFilter = (state) => state.filter.title;
export default filterSlice.reducer;
