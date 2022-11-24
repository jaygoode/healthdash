import { Request, Response, NextFunction } from "express";
import { User } from "../entities/userEntity";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(User);

export const verifyCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  //   const foundUser = await userRepository.findOne({ email: email });
  // if (foundUser) {
  //   const checkPassword = await foundUser.comparePassword(password)
  //   if (checkPassword) {
  //     next()
  //   } else {
  //     res.status(401).send('Incorrect credentials.')
  //   }
  // } else {
  //   res.status(401).send('Incorrect credentials.')
  // }
};

export const verifyAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body.user;
  if (user?.role === "admin") {
    next();
  } else {
    throw new Error();
  }
};
