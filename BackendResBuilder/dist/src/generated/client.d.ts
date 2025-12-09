import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model UserSession
 *
 */
export type UserSession = Prisma.UserSessionModel;
/**
 * Model Education
 *
 */
export type Education = Prisma.EducationModel;
/**
 * Model Document
 *
 */
export type Document = Prisma.DocumentModel;
/**
 * Model Experience
 *
 */
export type Experience = Prisma.ExperienceModel;
/**
 * Model ResumeTemplate
 *
 */
export type ResumeTemplate = Prisma.ResumeTemplateModel;
/**
 * Model Resume
 *
 */
export type Resume = Prisma.ResumeModel;
/**
 * Model Skill
 *
 */
export type Skill = Prisma.SkillModel;
/**
 * Model ResumeExport
 *
 */
export type ResumeExport = Prisma.ResumeExportModel;
//# sourceMappingURL=client.d.ts.map