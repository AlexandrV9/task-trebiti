import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { addDataFilter } from "./outputSlice";

import { 
  dataFromServer,
  categories
} from "../../utils/constants";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async(time = 500, { dispatch, rejectWithValue }) => {
    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(dataFromServer);
        }, time)
      })
      dispatch(addDataFilter(response.filter));
      return response.direction;
    } catch(error) {
      rejectWithValue(new Error("Ошибка"))
    }
  }
)

export const inputSlice = createSlice({
  name: "category",
  initialState: {
    selectedCategory: "all",
    selectedItemList: {},
    categories: [],
    loading: false,
    list: [],
    direction: [],
  },
  reducers: {
    changeInputCategory: (state, action) => {
      state.selectedCategory = action.payload;

      state.list = state.direction.filter((itemTo) => {
        return categories[action.payload].includes(itemTo.code) 
      })

      if(!categories[action.payload].includes(state.selectedItemList.code)) {
        state.selectedItemList = state.list[0];
      }
    },
    changeInputListItem: (state, action) => {
      state.selectedItemList = action.payload;
    }
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.direction = action.payload;
      state.list = action.payload;
      state.selectedItemList = action.payload[0];

      let availableCategories = new Set();
      
      for(let key in categories) {
        action.payload.forEach((item) => {
          if(categories[key].includes(item.code)) {
            availableCategories.add(key);
          }
        })
      }
      
      state.categories = Array.from(availableCategories);
      state.loading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = true;
    }
  }

})

export const { 
  changeInputCategory,
  changeInputListItem,
  addInitialDirection,
} = inputSlice.actions;

export default inputSlice.reducer;