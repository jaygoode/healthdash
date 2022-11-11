import { Activity } from "../entities/activityEntity";
import { AppDataSource } from "../data-source";

const activityRepository = AppDataSource.getRepository(Activity);

const getAllActivities = async () => {
  try {
    const users = await activityRepository.find();
    return users;
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};

const createOne = async (activity: Activity) => {
  try {
    return await activityRepository.save(activity);
  } catch (error: any) {
    return error.message;
  }
};

const getActivityById = async (id: number) => {
  try {
    return await activityRepository.findOneBy({ id: id });
  } catch (error: any) {
    return error.message;
  }
};

const updateOne = async (id: number, update: Partial<Activity>) => {
  const foundOne = await activityRepository.findOneBy({ id: id });
  if (foundOne) {
    return await activityRepository.update({ id: id }, update);
  } else {
    return;
  }
};

const deleteOne = async (id: number) => {
  const foundOne = await activityRepository.findOneBy({ id: id });
  if (foundOne) {
    return await activityRepository.delete({ id: id });
  } else {
    return;
  }
};

//.querybuilder() for more complex methods, joins and stuff

export default {
  getAllActivities,
  createOne,
  getActivityById,
  deleteOne,
  updateOne,
};
