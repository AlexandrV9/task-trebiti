import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { addDataDirection } from "../slices/inputSlice";
import { addDataFilter } from "../slices/outputSlice";

import { 
  dataFromServer,
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

      dispatch(addDataDirection(response.direction));
      dispatch(addDataFilter(response.filter));

      return response;
    } catch(error) {
      rejectWithValue(new Error("Ошибка"))
    }
  }
)

export const appSlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
  },
  reducers: {
    changeLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
    }
  }
})

export const { 
  changeLoading
} = appSlice.actions;

export default appSlice.reducer;