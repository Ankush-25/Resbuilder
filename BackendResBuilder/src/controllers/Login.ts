import type { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository.ts";
import { PasswordUtil } from "../utils/passwordHelperClass.ts";
import { getError } from "../utils/errorHandler.ts";
import { log } from "../logger/Logger.ts";
import type { User } from "@prisma/client";

export const loginTheUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      res
        .status(401)
        .json({ success: "false", message: "Invalid Credentials" });
    }
    if (user) {
      const match = await PasswordUtil.matchPassword(
        password,
        user.password_hash
      );
      if (!match) {
        res.status(401).json({
          success: "false",
          message: "Invalid Credentials",
        });
      }
    }
    res
      .status(200)
      .json({
        success: "true",
        message: "Login successfully",
        user: { id: user?.id, email: user?.email },
      });
  } catch (error) {
    log.error("unable to Login", error as Error);
    throw new Error("unable to Login", getError(error));
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData: User = req.body;
    if (!userData) {
      res.status(400).json({ success: "false", message: "Invalid Info" });
    }
    const user: User = await userRepository.create(userData);
    res.status(200).json({success:"true", message: "User Registered successfully", user:{id:user.id}, accesstoken:"String"})
  } catch (error) {
    log.error("unable to create the user",error as Error);
    throw new Error("Unable to register",  getError(error))
  }
};
