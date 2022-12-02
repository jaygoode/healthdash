import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from '../redux/reducers/userReducer'

export const store = configureStore({
  reducer: {userReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
