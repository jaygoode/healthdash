import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Activity, ActivityReducerState } from "../../types/activityTypes";

const initialState:ActivityReducerState = {
  activityList:[],
  currentActivity:undefined
  };
  
  export const getActivities = createAsyncThunk("getActivities", async () => {
    try {
      const data = await fetch("https://localhost:5000/api/Activities");
      let result = await data.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  });
  
  export const updateActivity = createAsyncThunk(
    "updateActivity",
    async (update: Partial<Activity>) => {
      try {
        console.log(update);
        const response = await fetch(`https://localhost:5000/api/Activities/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(update),
        });
        const result = await response.json();
        return result;
      } catch (error: any) {
        return error.message;
      }
    }
  );
  
  export const createActivity = createAsyncThunk("createActivity", async (activity: Activity) => {
    const { id, createTime, endTime, type, intensity, noteId, userId } =
      activity;
    try {
      const response = await fetch("https://localhost:5000/api/Activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          createTime,
          endTime,
          type,
          intensity,
          noteId,
          userId
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error: any) {
      return error.message;
    }
  });
  
  export const deleteActivity = createAsyncThunk("deleteActivity", async (id: string) => {
    try {
      const response = await fetch(`https://localhost:5000/api/Activities/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  });
  
  
  
  const ActivitySlice = createSlice({
    name: "ActivityReducer",
    initialState: initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(getActivities.fulfilled, (state, action: PayloadAction<Activity>) => {
          state.currentActivity = action.payload;
          return state;
        })
        .addCase(updateActivity.fulfilled, (state, action: PayloadAction<Activity>) => {
          state.activityList.map((Activity) => {
            if (Activity.id === action.payload.id) {
              Activity = action.payload;
              return Activity;
            }
            return state;
          });
          if (state.currentActivity && state.currentActivity.id === action.payload.id) {
            state.currentActivity = action.payload;
          }
          return state;
        })
        .addCase(createActivity.fulfilled, (state, action: PayloadAction<Activity>) => {
          // if (state.currentActivity && state.currentActivity.role === "customer") {
            state.currentActivity = action.payload;
          // } else if (state.currentActivity && state.currentActivity.role === "admin") {
          //   state.ActivityList.push(action.payload);
          // }
          return state;
        })
        .addCase(deleteActivity.fulfilled, (state, action: PayloadAction<Activity>) => {
          return state;
        })
      
    },
  });
  
  export const ActivityReducer = ActivitySlice.reducer;
  