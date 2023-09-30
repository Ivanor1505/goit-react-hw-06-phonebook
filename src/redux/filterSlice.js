import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        changeFilter(state, action) {
            return action.payload;
        }
    }
})

export const getFilter = state => state.filter;

export const filterReducer = Slice.reducer;

export const { changeFilter } = Slice.actions;