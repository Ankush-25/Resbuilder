import "dotenv/config";
import bcrypt, { compare, genSalt, hash } from "bcrypt";
import { log } from "../logger/Logger.ts";

export class PasswordUtil {
  private static readonly Salt_Round: number = Number(process.env.SALT_ROUND);
  public static async hashPassword(password: string): Promise <string> {
    try {
      const salt = await genSalt(this.Salt_Round);
      console.log(salt,password)
      const hashPassword = await hash(password, salt);
      return hashPassword;
    } catch (error) {
      log.error("Unable to hashPassword", error as Error);
      throw new Error("Unable to process the password");
    }
  }
  public static async matchPassword(givenPassword:string, hashPassword: string): Promise<boolean>{
    return await compare(givenPassword, hashPassword);
  }
  
}
