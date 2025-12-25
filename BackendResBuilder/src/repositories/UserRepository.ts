import { Prisma, type User } from "@prisma/client";
import { prisma } from "../lib/prisma.ts";
import { PasswordUtil } from "../utils/passwordHelperClass.ts";
import { log } from "../logger/Logger.ts";
import { getError } from "../utils/errorHandler.ts";

type UserCreateData = Prisma.UserCreateInput;
export class UserRepository {
  //create news user
  async create(data: UserCreateData): Promise<User> {
    try {
      const hashPassword = await PasswordUtil.hashPassword(data.password_hash);
      const user = await prisma.user.create({
        data: { ...data, password_hash: hashPassword },
      });
      return user;
    } catch (error) {
      log.error("Unable to create New User", error as Error);
      throw new Error("Unable to register create the user", getError(error));
    }
  }

  async findByEmail(data: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: data,
        },
      });
      return user;
    } catch (error) {
      log.error("unable to Find user", error as Error);
      throw new Error("unable to find user", getError(error));
    }
  }
  async findById(userId: string): Promise<User | null> {
     if (!userId) {
        return null;
      }
    try {
      const trimmedId = userId.trim();
      const user = await prisma.user.findUnique({
        where: {
          id: trimmedId,
        },
      });
      return user;
    } catch (error) {
      log.error("unable to Find user by ID", error as Error);
      throw new Error("unable to find user", getError(error));
    }
  }
}
export const userRepository = new UserRepository();
