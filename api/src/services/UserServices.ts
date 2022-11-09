import pool from "../pool";
import { User } from "../entities/userEntity";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(User);

const getAllUsers = async () => {
  try {
    return userRepository.find();
  } catch (error: any) {
    return error.message;
  }
};

const createOne = async (user: User) => {
  try {
    return await userRepository.save(user);
  } catch (error: any) {
    return error.message;
  }
};

const getUserById = async (id: number) => {
  try {
    return userRepository.findOneBy({ id: id });
  } catch (error: any) {
    return error.message;
  }
};

const updateOne = async (id: number, update: Partial<User>) => {
  const foundOne = await userRepository.findOneBy({ id: id });
  if (foundOne) {
    return await userRepository.update({ id: id }, update);
  } else {
    return;
  }
};

const deleteOne = async (id: number) => {
  const foundOne = await userRepository.findOneBy({ id: id });
  if (foundOne) {
    return await userRepository.delete({ id: id });
  } else {
    return;
  }
};

export default {
  getAllUsers,
  createOne,
  getUserById,
};
