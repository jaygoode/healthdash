import { Note } from "../entities/noteEntity";
import { AppDataSource } from "../data-source";

const noteRepository = AppDataSource.getRepository(Note);

const getAllNotes = async () => {
  try {
    const users = await noteRepository.find();
    return users;
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};

const createOne = async (note: Note) => {
  try {
    return await noteRepository.save(note);
  } catch (error: any) {
    return error.message;
  }
};

const getnoteById = async (id: number) => {
  try {
    return await noteRepository.findOneBy({ id: id });
  } catch (error: any) {
    return error.message;
  }
};

const updateOne = async (id: number, update: Partial<Note>) => {
  try {
    const foundOne = await noteRepository.findOneBy({ id: id });
    return await noteRepository.update({ id: id }, update);
  } catch (error: any) {
    return error.message;
  }
};

const deleteOne = async (id: number) => {
  const foundOne = await noteRepository.findOneBy({ id: id });
  if (foundOne) {
    return await noteRepository.delete({ id: id });
  } else {
    return;
  }
};

//.querybuilder() for more complex methods, joins and stuff

export default {
  getAllNotes,
  createOne,
  getnoteById,
  deleteOne,
  updateOne,
};
