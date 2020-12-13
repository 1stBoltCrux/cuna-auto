import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import landingReducer from '../features/landing/landingSlice';

export const store = configureStore({
  reducer: {
    landing: landingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
