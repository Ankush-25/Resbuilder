import { prisma } from "../lib/prisma.js";
import type { Prisma, UserSession} from "@prisma/client";
import { getError } from "../utils/errorHandler.ts";
import { log } from "../logger/Logger.ts";
type UserSessionType = Omit<Prisma.UserSessionCreateInput, "expires_at"|"user">;

export class UserSessions {
  async create(userData: UserSessionType,userId:string): Promise<UserSession> {
    try {
        console.log(process.env.REFRESH_TOKEN_EXPIRE)
        let stringTime= process.env.REFRESH_TOKEN_EXPIRE

        const match = stringTime?.match(/^(\d+)d$/);
        console.log(match)
        
        const days:number = match? Number(match[1]):0
        
        console.log(days)
        const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
      const session = await prisma.userSession.create({
        data: {
          ...userData,
          expires_at: expiresAt,
          user:{
            connect: { id: userId }
          }
        },
      });
      return session;
    } catch (error) {
      log.error("unable to create userSession", error as Error);
      throw new Error("unable to create the UserSession", getError(error));
    }
  }
}
export const userSession = new UserSessions();
