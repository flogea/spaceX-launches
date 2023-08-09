import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import SuccessLaunchesSlice from './Slices/SuccessLaunchesSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  SuccessLaunchesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
