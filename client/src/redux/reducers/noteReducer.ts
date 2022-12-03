import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteReducerState } from "../../types/noteTypes";

const initialState:NoteReducerState = {
  noteList:[],
  currentNote: undefined
  };
  
  export const getNotes = createAsyncThunk("getNotes", async () => {
    try {
      const data = await fetch("https://localhost:5000/api/Notes");
      let result = await data.json();
      return result;
    } catch (error: any) {
      return error.message;
    }
  });
  
  export const updatenote = createAsyncThunk(
    "updatenote",
    async (update: Partial<Note>) => {
      try {
        console.log(update);
        const response = await fetch(`https://localhost:5000/api/Notes/`, {
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
  
  export const createnote = createAsyncThunk("createnote", async (note: Note) => {
    const { id, dateCreated, tags, content, activityId, userId } =
      note;
    try {
      const response = await fetch("https://localhost:5000/api/Notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dateCreated,
          tags,
          content,
          activityId,
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
      const response = await fetch(`https://localhost:5000/api/Notes/${id}`, {
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
        .addCase(getNotes.fulfilled, (state, action: PayloadAction<Note>) => {
          state.currentNote = action.payload;
          return state;
        })
        .addCase(updatenote.fulfilled, (state, action: PayloadAction<Note>) => {
          state.noteList.map((note) => {
            if (note.id === action.payload.id) {
              note = action.payload;
              return note;
            }
            return state;
          });
          if (state.currentNote && state.currentNote.id === action.payload.id) {
            state.currentNote = action.payload;
          }
          return state;
        })
        .addCase(createnote.fulfilled, (state, action: PayloadAction<Note>) => {
          // if (state.currentnote && state.currentnote.role === "customer") {
            state.currentNote = action.payload;
          // } else if (state.currentnote && state.currentnote.role === "admin") {
          //   state.noteList.push(action.payload);
          // }
          return state;
        })
        .addCase(deletenote.fulfilled, (state, action: PayloadAction<Note>) => {
          return state;
        })
      
    },
  });
  
  export const noteReducer = noteSlice.reducer;
  