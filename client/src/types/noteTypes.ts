export interface Note {
  id?: number;
  content: string;
  tags: string[];
  dateCreated: Date;
  userId: number;
  activityId: number;
}

export interface NoteReducerState {
  noteList: Note[];
  currentNote: Note | undefined;
}