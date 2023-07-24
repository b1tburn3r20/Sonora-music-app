import { shazamCoreApi } from './services/shazamcore';
import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddlewear) => getDefaultMiddlewear().concat(shazamCoreApi.middleware)
});
