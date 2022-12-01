import { Activity } from "../../src/types/Types";

const activity1: Activity = {
  id: 1,
  createTime: new Date(),
  endTime: "end date",
  type: "exercise",
  intensity: "medium",
  noteId: 1,
  userId: 2,
};

const activity2: Activity = {
  id: 2,
  createTime: new Date(),
  endTime: "end time",
  type: "programming",
  intensity: "intense",
  noteId: 3,
  userId: 2,
};

export default { activity1, activity2 };
