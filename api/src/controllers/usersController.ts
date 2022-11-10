import { NextFunction, Request, Response } from "express";
import UserServices from "../services/UserServices";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserServices.getAllUsers();
    return res.json(users);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserServices.createOne(req.body);
    return res.json(users);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserServices.updateOne(req.body.id, req.body);
    return res.json(users);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserServices.deleteOne(req.body.id);
    return res.json(users);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export default {
  getAll,
  createUser,
  updateUser,
  deleteUser,
};
