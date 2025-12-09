import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly UserSession: "UserSession";
    readonly Education: "Education";
    readonly Document: "Document";
    readonly Experience: "Experience";
    readonly ResumeTemplate: "ResumeTemplate";
    readonly Resume: "Resume";
    readonly Skill: "Skill";
    readonly ResumeExport: "ResumeExport";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly full_name: "full_name";
    readonly phone: "phone";
    readonly location: "location";
    readonly linkedin_url: "linkedin_url";
    readonly portfolio_url: "portfolio_url";
    readonly summary: "summary";
    readonly avatar_url: "avatar_url";
    readonly email_verified: "email_verified";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserSessionScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly token_hash: "token_hash";
    readonly expires_at: "expires_at";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly created_at: "created_at";
};
export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum];
export declare const EducationScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly institution: "institution";
    readonly degree: "degree";
    readonly field_of_study: "field_of_study";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
    readonly gpa: "gpa";
    readonly description: "description";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum];
export declare const DocumentScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly original_filename: "original_filename";
    readonly file_url: "file_url";
    readonly file_size: "file_size";
    readonly file_type: "file_type";
    readonly parsed_data: "parsed_data";
    readonly parsing_status: "parsing_status";
    readonly parsing_error: "parsing_error";
    readonly upload_source: "upload_source";
    readonly is_processed: "is_processed";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];
export declare const ExperienceScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly company: "company";
    readonly job_title: "job_title";
    readonly location: "location";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
    readonly is_current: "is_current";
    readonly description: "description";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum];
export declare const ResumeTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly thumbnail_url: "thumbnail_url";
    readonly preview_html: "preview_html";
    readonly category: "category";
    readonly is_premium: "is_premium";
    readonly price: "price";
    readonly config: "config";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ResumeTemplateScalarFieldEnum = (typeof ResumeTemplateScalarFieldEnum)[keyof typeof ResumeTemplateScalarFieldEnum];
export declare const ResumeScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly template_id: "template_id";
    readonly title: "title";
    readonly slug: "slug";
    readonly content: "content";
    readonly config: "config";
    readonly is_public: "is_public";
    readonly public_url: "public_url";
    readonly view_count: "view_count";
    readonly download_count: "download_count";
    readonly last_viewed_at: "last_viewed_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum];
export declare const SkillScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly skill_name: "skill_name";
    readonly proficiency: "proficiency";
    readonly category: "category";
    readonly years_experience: "years_experience";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum];
export declare const ResumeExportScalarFieldEnum: {
    readonly id: "id";
    readonly resume_id: "resume_id";
    readonly user_id: "user_id";
    readonly file_format: "file_format";
    readonly file_url: "file_url";
    readonly file_size: "file_size";
    readonly download_count: "download_count";
    readonly generated_at: "generated_at";
};
export type ResumeExportScalarFieldEnum = (typeof ResumeExportScalarFieldEnum)[keyof typeof ResumeExportScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: "JsonNull";
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: "DbNull";
    readonly JsonNull: "JsonNull";
    readonly AnyNull: "AnyNull";
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map