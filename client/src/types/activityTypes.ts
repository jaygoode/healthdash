

export interface Activity {
  id: number;
  createTime: Date;
  endTime: string;
  type: string;
  intensity: string;
  noteId: number;
  userId: number;
}

export interface ActivityReducerState {
  activityList: Activity[];
  currentActivity: Activity | undefined;
}