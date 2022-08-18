import { createSlice } from "@reduxjs/toolkit";

import { 
  categories, 
  initialState, 
  getAvailableCategories,
  getAvailableList
} from "../../utils/constants";

export const inputSlice = createSlice({
  name: "category",
  initialState: {
    ...initialState,
    direction: [],
  },
  reducers: {
    addDataDirection: (state, action) => {
      state.direction = action.payload;
      state.list = action.payload;
      state.selectedItemList = action.payload[0];

      const availableCategories = getAvailableCategories(action.payload);
      
      state.selectedCategory = availableCategories[0];
      state.categories = availableCategories;
    },
    changeInputCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.list = state.direction.filter(item => getAvailableList(item, action.payload));

      if(!categories[action.payload].includes(state.selectedItemList.code)) {
        state.selectedItemList = state.list[0];
      }
    },
    changeInputListItem: (state, action) => {
      state.selectedItemList = action.payload;
    }
  }
})

export const {
  addDataDirection,
  changeInputCategory,
  changeInputListItem,
} = inputSlice.actions;

export default inputSlice.reducer;