import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    ActivityList: [],
    currentActivity: {
      id: "630a1ec68730e0a256ecf8dc",
      Activityname: "dragonaslayer1x",
      age: 19,
      weight: 75,
      firstname: "jason",
      lastname: "admin",
      email: "admin@gmail.com",
      password: "$2b$10$kBbRpmy2o4FLznWUv9qXLOvGsewlrKmLqLcJxnABHCJlvAOPEO7Li",
      role: "admin",
    },
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
  
  export const createActivity = createAsyncThunk("createActivity", async (Activity: Activity) => {
    const { firstname, lastname, email, password, role, age, weight, Activityname } =
      Activity;
    try {
      const response = await fetch("https://localhost:5000/api/Activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          password: password,
          email: email,
          role: role,
          age: age,
          Activityname: Activityname,
          weight: weight,
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
      logout: (state) => {
        state.currentActivity = undefined;
        localStorage.removeItem("token");
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getActivities.fulfilled, (state, action: PayloadAction<Activity[]>) => {
          state.ActivityList = action.payload;
          return state;
        })
        .addCase(updateActivity.fulfilled, (state, action: PayloadAction<Activity>) => {
          state.ActivityList.map((Activity) => {
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
          if (state.currentActivity && state.currentActivity.role === "customer") {
            state.currentActivity = action.payload;
          } else if (state.currentActivity && state.currentActivity.role === "admin") {
            state.ActivityList.push(action.payload);
          }
          return state;
        })
        .addCase(deleteActivity.fulfilled, (state, action: PayloadAction<Activity>) => {
          return state;
        })
        .addCase(login.fulfilled, (state, action: PayloadAction<Activity>) => {
          state.currentActivity = action.payload;
          console.log(action.payload);
          return state;
        });
    },
  });
  
  export const ActivityReducer = ActivitySlice.reducer;
  export const { logout } = ActivitySlice.actions;
  