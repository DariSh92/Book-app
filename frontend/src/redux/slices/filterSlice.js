import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        title: action.payload,
      };
    },
    resetFilters: (state) => {
        return initialState;    
    },
    setFilterAuthor: (state, action) => {
        return {
            ...state,
            author: action.payload,
        }
    }
  },
});

export const { setFilter, resetFilters,setFilterAuthor  } = filterSlice.actions;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectTitleFilter = (state) => state.filter.title;
export default filterSlice.reducer;
