import type { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository.ts";
import { PasswordUtil } from "../utils/passwordHelperClass.ts";
import { getError } from "../utils/errorHandler.ts";
import { log } from "../logger/Logger.ts";
import type { User } from "@prisma/client";
import { genrateToken } from "../utils/jwt.ts";
import { userSession } from "../repositories/UserSessions.ts";

export const logIn = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      res
        .status(401)
        .json({ success: "false", message: "Invalid Credentials" });
      return;
    }

    const match = await PasswordUtil.matchPassword(
      password,
      user.password_hash
    );
    if (!match) {
      res.status(401).json({
        success: "false",
        message: "Invalid Credentials",
      });
      return;
    }
    const token: string = genrateToken({ id: user.id });
    res.status(200).json({
      success: "true",
      message: "Login successfully",
      user: { id: user?.id, email: user?.email },
      token: token,
    });
    return;
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
      return;
    }
    const checkUser: User | null = await userRepository.findByEmail(
      userData.email
    );
    if (checkUser) {
      res.status(409).json({
        success: "false",
        message: "User Already Registered",
      });
      return;
    }
    const user: User = await userRepository.create(userData);
    const token: string = genrateToken({ id: user.id });
    const refreshToken: string = genrateToken({ id: user.id }, true);
    const sessionDetail = {
      token_hash: refreshToken,
      ip_address: req.ip ?? null,
      user_agent: req.headers["user-agent"] ?? null,
    };
    await userSession.create(sessionDetail, user.id);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.status(200).json({
      success: "true",
      message: "User Registered successfully",
      user: { id: user.id },
      token: token,
    });
    return;
  } catch (error) {
    log.error("unable to create the user", error as Error);
    throw new Error("Unable to register", getError(error));
  }
};
