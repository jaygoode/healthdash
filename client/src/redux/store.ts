import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../redux/reducers/userReducer";
import { noteReducer } from "../redux/reducers/noteReducer";
import { ActivityReducer } from "../redux/reducers/activityReducer";

export const store = configureStore({
  reducer: {
    userReducer,
    noteReducer,
    ActivityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
