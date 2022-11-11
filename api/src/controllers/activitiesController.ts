import { NextFunction, Request, Response } from "express";
import activityServices from "../services/activityServices";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const activities = await activityServices.getAllactivities();
    return res.json(activities);
  } catch (error) {
    return next(error);
  }
};

const createActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const activities = await activityServices.createOne(req.body);
    return res.json(activities);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const updateActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const activity = await activityServices.updateOne(req.body.id, req.body);
    return res.json(activity);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const deleteActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const activity = await activityServices.deleteOne(req.body.id);
    return res.json(activity);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export default {
  getAll,
  updateActivity,
  deleteActivity,
  createActivity,
};
