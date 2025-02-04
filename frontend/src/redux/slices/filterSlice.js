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
        return initialState;    }
  },
});

export const { setFilter, resetFilters } = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export default filterSlice.reducer;
