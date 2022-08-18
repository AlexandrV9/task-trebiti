import { createSlice } from "@reduxjs/toolkit";

import {
  categories
} from "../../utils/constants"

export const outputSlice = createSlice({
  name: "ouput",
  initialState: {
    selectedCategory: "",
    selectedItemList: "",
    categories: [],
    list: [],
    alLList: [],
    filter: [],
  },
  reducers: {
    addDataFilter: (state, action) => {
      state.filter = action.payload;
      state.selectedItemList = action.payload[0].to[0];


      let availableCategories = new Set();
      
      for(let key in categories) {
        action.payload[0].to.forEach((item) => {
          if(categories[key].includes(item.code)) {
            availableCategories.add(key);
          }
        })
      }
      state.selectedCategory = Array.from(availableCategories)[0];
      state.categories = Array.from(availableCategories);


      state.alLList = action.payload[0].to;
      state.list = action.payload[0].to.filter((item) => {
        return categories[state.selectedCategory].includes(item.code)
      })
      

    },
    changeOutputCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.list = state.alLList.filter((itemTo) => {
        return categories[action.payload].includes(itemTo.code) 
      })

      if(!categories[action.payload].includes(state.selectedItemList.code)) {
        state.selectedItemList = state.list[0];
      }
    },
    changeOutputListItem: (state, action) => {
      state.selectedItemList = action.payload;
    },
    filtredOutputData: (state, action) => {
      console.log("Запуск фильтрации")
      const { code } = action.payload;
      const index = state.filter.findIndex((item) => item.from.code === code);

      let availableCategories = new Set();

      if(index !== -1) {
        const availableList = state.filter[index].to;
        state.alLList = state.filter[index].to

        for(let key in categories) {
          availableList.forEach((item) => {
            if(categories[key].includes(item.code)) {
              availableCategories.add(key);
            }
          })
        }

        state.categories = Array.from(availableCategories);
        state.selectedCategory = Array.from(availableCategories)[0];
        state.list = state.alLList.filter((item) => {
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