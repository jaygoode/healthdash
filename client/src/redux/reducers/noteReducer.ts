import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, noteReducerState } from "../../types/noteTypes";

const initialState:noteReducerState = {
  noteList:[],
  currentnote:undefined
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
  
  export const updatenote = createAsyncThunk(
    "updatenote",
    async (update: Partial<note>) => {
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
  
  export const createnote = createAsyncThunk("createnote", async (note: note) => {
    const { id, createTime, endTime, type, intensity, noteId, userId } =
      note;
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
  
  export const deletenote = createAsyncThunk("deletenote", async (id: string) => {
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
  
  
  
  const noteSlice = createSlice({
    name: "noteReducer",
    initialState: initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(getActivities.fulfilled, (state, action: PayloadAction<note>) => {
          state.currentnote = action.payload;
          return state;
        })
        .addCase(updatenote.fulfilled, (state, action: PayloadAction<note>) => {
          state.noteList.map((note) => {
            if (note.id === action.payload.id) {
              note = action.payload;
              return note;
            }
            return state;
          });
          if (state.currentnote && state.currentnote.id === action.payload.id) {
            state.currentnote = action.payload;
          }
          return state;
        })
        .addCase(createnote.fulfilled, (state, action: PayloadAction<Note>) => {
          // if (state.currentnote && state.currentnote.role === "customer") {
            state.currentnote = action.payload;
          // } else if (state.currentnote && state.currentnote.role === "admin") {
          //   state.noteList.push(action.payload);
          // }
          return state;
        })
        .addCase(deletenote.fulfilled, (state, action: PayloadAction<note>) => {
          return state;
        })
      
    },
  });
  
  export const noteReducer = noteSlice.reducer;
  