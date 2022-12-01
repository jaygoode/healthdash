import { Note } from "../../src/types/Types";

const note1: Note = {
  id: 1,
  dateCreated: new Date(),
  content: "this is a new update",
  tags: ["thought", "workout", "philosophy"],
  userId: 1,
  activityId: 2,
};

const note2: Note = {
  id: 1,
  dateCreated: new Date(),
  content: "this is a new for note 2",
  tags: ["rule", "programming"],
  userId: 1,
  activityId: 2,
};

export default { note1, note2 };
