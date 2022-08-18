import { createSlice } from "@reduxjs/toolkit";

import { 
  categories, 
  initialState,
  getAvailableCategories,
  getAvailableList,
} from "../../utils/constants"

export const outputSlice = createSlice({
  name: "ouput",
  initialState: {
    ...initialState,
    allList: [],
    filter: [],
  },
  reducers: {
    addDataFilter: (state, action) => {
      state.filter = action.payload;
      state.selectedItemList = action.payload[0].to[0];
      
      const availableCategories = getAvailableCategories(action.payload[0].to);
      
      state.selectedCategory = availableCategories[0];
      state.categories = availableCategories;
      state.allList = action.payload[0].to;

      state.list = action.payload[0].to.filter((item) => {
        return categories[state.selectedCategory].includes(item.code)
      })
      

    },
    changeOutputCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.list = state.allList.filter(item => getAvailableList(item, action.payload));

      if(!categories[action.payload].includes(state.selectedItemList.code)) {
        state.selectedItemList = state.list[0];
      }
    },
    changeOutputListItem: (state, action) => {
      state.selectedItemList = action.payload;
    },
    filtredOutputData: (state, action) => {
      const { code } = action.payload;
      const index = state.filter.findIndex((item) => item.from.code === code);

      if(index !== -1) {
        const availableList = state.filter[index].to;
        const availableCategories = getAvailableCategories(availableList);

        state.allList = state.filter[index].to
        state.categories = availableCategories;
        state.selectedCategory = availableCategories[0];

        state.list = state.allList.filter((item) => {
          return categories[state.selectedCategory].includes(item.code)
        })

        state.selectedItemList = state.list[0];
        
        if(!categories[state.selectedCategory].includes(state.selectedItemList.code)) {
          state.selectedItemList = state.list[0];
        }
      }

    }
  }

})

export const { 
  changeOutputCategory,
  changeOutputListItem,
  addDataFilter,
  filtredOutputData
} = outputSlice.actions;

export default outputSlice.reducer;