import { configureStore } from '@reduxjs/toolkit';

import appReducer from './slices/appSlice';
import inputReducer from './slices/inputSlice';
import outputReducer from './slices/outputSlice';

export default configureStore({
    reducer: {
      app: appReducer,
      input: inputReducer,
      output: outputReducer
    },
})