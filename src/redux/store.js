import { configureStore } from '@reduxjs/toolkit';

import inputReducer from './slices/inputSlice';
import outputReducer from './slices/outputSlice';

export default configureStore({
    reducer: {
      input: inputReducer,
      output: outputReducer
    },
})