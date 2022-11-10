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

export default {
  getAll,
};
