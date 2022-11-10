import { NextFunction, Request, Response } from "express";
import noteServices from "../services/NoteServices";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await noteServices.getAllNotes();
    return res.json(notes);
  } catch (error) {
    return next(error);
  }
};

const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await noteServices.createOne(req.body);
    return res.json(notes);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const updateNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await noteServices.updateOne(req.body.id, req.body);
    return res.json(notes);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await noteServices.deleteOne(req.body.id);
    return res.json(notes);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export default {
  getAll,
  createNote,
  updateNote,
  deleteNote,
};
