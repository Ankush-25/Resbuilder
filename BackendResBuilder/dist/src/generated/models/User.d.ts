import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    full_name: string | null;
    phone: string | null;
    location: string | null;
    linkedin_url: string | null;
    portfolio_url: string | null;
    summary: string | null;
    avatar_url: string | null;
    email_verified: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    full_name: string | null;
    phone: string | null;
    location: string | null;
    linkedin_url: string | null;
    portfolio_url: string | null;
    summary: string | null;
    avatar_url: string | null;
    email_verified: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password_hash: number;
    full_name: number;
    phone: number;
    location: number;
    linkedin_url: number;
    portfolio_url: number;
    summary: number;
    avatar_url: number;
    email_verified: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    phone?: true;
    location?: true;
    linkedin_url?: true;
    portfolio_url?: true;
    summary?: true;
    avatar_url?: true;
    email_verified?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    phone?: true;
    location?: true;
    linkedin_url?: true;
    portfolio_url?: true;
    summary?: true;
    avatar_url?: true;
    email_verified?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    phone?: true;
    location?: true;
    linkedin_url?: true;
    portfolio_url?: true;
    summary?: true;
    avatar_url?: true;
    email_verified?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    password_hash: string;
    full_name: string | null;
    phone: string | null;
    location: string | null;
    linkedin_url: string | null;
    portfolio_url: string | null;
    summary: string | null;
    avatar_url: string | null;
    email_verified: boolean;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password_hash?: Prisma.StringFilter<"User"> | string;
    full_name?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    location?: Prisma.StringNullableFilter<"User"> | string | null;
    linkedin_url?: Prisma.StringNullableFilter<"User"> | string | null;
    portfolio_url?: Prisma.StringNullableFilter<"User"> | string | null;
    summary?: Prisma.StringNullableFilter<"User"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"User"> | string | null;
    email_verified?: Prisma.BoolFilter<"User"> | boolean;
    is_active?: Prisma.BoolFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    sessions?: Prisma.UserSessionListRelationFilter;
    education?: Prisma.EducationListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    experiences?: Prisma.ExperienceListRelationFilter;
    skills?: Prisma.SkillListRelationFilter;
    resumes?: Prisma.ResumeListRelationFilter;
    resume_exports?: Prisma.ResumeExportListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    portfolio_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    sessions?: Prisma.UserSessionOrderByRelationAggregateInput;
    education?: Prisma.EducationOrderByRelationAggregateInput;
    documents?: Prisma.DocumentOrderByRelationAggregateInput;
    experiences?: Prisma.ExperienceOrderByRelationAggregateInput;
    skills?: Prisma.SkillOrderByRelationAggregateInput;
    resumes?: Prisma.ResumeOrderByRelationAggregateInput;
    resume_exports?: Prisma.ResumeExportOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password_hash?: Prisma.StringFilter<"User"> | string;
    full_name?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    location?: Prisma.StringNullableFilter<"User"> | string | null;
    linkedin_url?: Prisma.StringNullableFilter<"User"> | string | null;
    portfolio_url?: Prisma.StringNullableFilter<"User"> | string | null;
    summary?: Prisma.StringNullableFilter<"User"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"User"> | string | null;
    email_verified?: Prisma.BoolFilter<"User"> | boolean;
    is_active?: Prisma.BoolFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    sessions?: Prisma.UserSessionListRelationFilter;
    education?: Prisma.EducationListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    experiences?: Prisma.ExperienceListRelationFilter;
    skills?: Prisma.SkillListRelationFilter;
    resumes?: Prisma.ResumeListRelationFilter;
    resume_exports?: Prisma.ResumeExportListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    portfolio_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password_hash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    full_name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    location?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    linkedin_url?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    portfolio_url?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    summary?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    avatar_url?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    email_verified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    is_active?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationUncheckedCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceUncheckedCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillUncheckedCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUncheckedUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUncheckedUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrder;
    portfolio_url?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrder;
    portfolio_url?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrder;
    portfolio_url?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedOneWithoutEducationInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEducationInput, Prisma.UserUncheckedCreateWithoutEducationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEducationInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEducationNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEducationInput, Prisma.UserUncheckedCreateWithoutEducationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEducationInput;
    upsert?: Prisma.UserUpsertWithoutEducationInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEducationInput, Prisma.UserUpdateWithoutEducationInput>, Prisma.UserUncheckedUpdateWithoutEducationInput>;
};
export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDocumentsInput, Prisma.UserUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDocumentsInput, Prisma.UserUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.UserUpsertWithoutDocumentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutDocumentsInput, Prisma.UserUpdateWithoutDocumentsInput>, Prisma.UserUncheckedUpdateWithoutDocumentsInput>;
};
export type UserCreateNestedOneWithoutExperiencesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutExperiencesInput, Prisma.UserUncheckedCreateWithoutExperiencesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutExperiencesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutExperiencesInput, Prisma.UserUncheckedCreateWithoutExperiencesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutExperiencesInput;
    upsert?: Prisma.UserUpsertWithoutExperiencesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutExperiencesInput, Prisma.UserUpdateWithoutExperiencesInput>, Prisma.UserUncheckedUpdateWithoutExperiencesInput>;
};
export type UserCreateNestedOneWithoutResumesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResumesInput, Prisma.UserUncheckedCreateWithoutResumesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResumesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResumesInput, Prisma.UserUncheckedCreateWithoutResumesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResumesInput;
    upsert?: Prisma.UserUpsertWithoutResumesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutResumesInput, Prisma.UserUpdateWithoutResumesInput>, Prisma.UserUncheckedUpdateWithoutResumesInput>;
};
export type UserCreateNestedOneWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSkillsInput, Prisma.UserUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSkillsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSkillsInput, Prisma.UserUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSkillsInput;
    upsert?: Prisma.UserUpsertWithoutSkillsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSkillsInput, Prisma.UserUpdateWithoutSkillsInput>, Prisma.UserUncheckedUpdateWithoutSkillsInput>;
};
export type UserCreateNestedOneWithoutResume_exportsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResume_exportsInput, Prisma.UserUncheckedCreateWithoutResume_exportsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResume_exportsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutResume_exportsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResume_exportsInput, Prisma.UserUncheckedCreateWithoutResume_exportsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResume_exportsInput;
    upsert?: Prisma.UserUpsertWithoutResume_exportsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutResume_exportsInput, Prisma.UserUpdateWithoutResume_exportsInput>, Prisma.UserUncheckedUpdateWithoutResume_exportsInput>;
};
export type UserCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    education?: Prisma.EducationCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    education?: Prisma.EducationUncheckedCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceUncheckedCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillUncheckedCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    education?: Prisma.EducationUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    education?: Prisma.EducationUncheckedUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUncheckedUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutEducationInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutEducationInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceUncheckedCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillUncheckedCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutEducationInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEducationInput, Prisma.UserUncheckedCreateWithoutEducationInput>;
};
export type UserUpsertWithoutEducationInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEducationInput, Prisma.UserUncheckedUpdateWithoutEducationInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEducationInput, Prisma.UserUncheckedCreateWithoutEducationInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEducationInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEducationInput, Prisma.UserUncheckedUpdateWithoutEducationInput>;
};
export type UserUpdateWithoutEducationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEducationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUncheckedUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutDocumentsInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationUncheckedCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceUncheckedCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillUncheckedCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDocumentsInput, Prisma.UserUncheckedCreateWithoutDocumentsInput>;
};
export type UserUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutDocumentsInput, Prisma.UserUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDocumentsInput, Prisma.UserUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDocumentsInput, Prisma.UserUncheckedUpdateWithoutDocumentsInput>;
};
export type UserUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUncheckedUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUncheckedUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutExperiencesInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutExperiencesInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationUncheckedCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillUncheckedCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutExperiencesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutExperiencesInput, Prisma.UserUncheckedCreateWithoutExperiencesInput>;
};
export type UserUpsertWithoutExperiencesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutExperiencesInput, Prisma.UserUncheckedUpdateWithoutExperiencesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutExperiencesInput, Prisma.UserUncheckedCreateWithoutExperiencesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutExperiencesInput, Prisma.UserUncheckedUpdateWithoutExperiencesInput>;
};
export type UserUpdateWithoutExperiencesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutExperiencesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUncheckedUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUncheckedUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutResumesInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutResumesInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationUncheckedCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceUncheckedCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillUncheckedCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutResumesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutResumesInput, Prisma.UserUncheckedCreateWithoutResumesInput>;
};
export type UserUpsertWithoutResumesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutResumesInput, Prisma.UserUncheckedUpdateWithoutResumesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutResumesInput, Prisma.UserUncheckedCreateWithoutResumesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutResumesInput, Prisma.UserUncheckedUpdateWithoutResumesInput>;
};
export type UserUpdateWithoutResumesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutResumesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUncheckedUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUncheckedUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSkillsInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSkillsInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationUncheckedCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceUncheckedCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    resume_exports?: Prisma.ResumeExportUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSkillsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSkillsInput, Prisma.UserUncheckedCreateWithoutSkillsInput>;
};
export type UserUpsertWithoutSkillsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSkillsInput, Prisma.UserUncheckedUpdateWithoutSkillsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSkillsInput, Prisma.UserUncheckedCreateWithoutSkillsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSkillsInput, Prisma.UserUncheckedUpdateWithoutSkillsInput>;
};
export type UserUpdateWithoutSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUncheckedUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    resume_exports?: Prisma.ResumeExportUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutResume_exportsInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutResume_exportsInput = {
    id?: string;
    email: string;
    password_hash: string;
    full_name?: string | null;
    phone?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    portfolio_url?: string | null;
    summary?: string | null;
    avatar_url?: string | null;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    sessions?: Prisma.UserSessionUncheckedCreateNestedManyWithoutUserInput;
    education?: Prisma.EducationUncheckedCreateNestedManyWithoutUserInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutUserInput;
    experiences?: Prisma.ExperienceUncheckedCreateNestedManyWithoutUserInput;
    skills?: Prisma.SkillUncheckedCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutResume_exportsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutResume_exportsInput, Prisma.UserUncheckedCreateWithoutResume_exportsInput>;
};
export type UserUpsertWithoutResume_exportsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutResume_exportsInput, Prisma.UserUncheckedUpdateWithoutResume_exportsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutResume_exportsInput, Prisma.UserUncheckedCreateWithoutResume_exportsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutResume_exportsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutResume_exportsInput, Prisma.UserUncheckedUpdateWithoutResume_exportsInput>;
};
export type UserUpdateWithoutResume_exportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutResume_exportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    portfolio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.UserSessionUncheckedUpdateManyWithoutUserNestedInput;
    education?: Prisma.EducationUncheckedUpdateManyWithoutUserNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutUserNestedInput;
    experiences?: Prisma.ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    skills?: Prisma.SkillUncheckedUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    sessions: number;
    education: number;
    documents: number;
    experiences: number;
    skills: number;
    resumes: number;
    resume_exports: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    education?: boolean | UserCountOutputTypeCountEducationArgs;
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs;
    experiences?: boolean | UserCountOutputTypeCountExperiencesArgs;
    skills?: boolean | UserCountOutputTypeCountSkillsArgs;
    resumes?: boolean | UserCountOutputTypeCountResumesArgs;
    resume_exports?: boolean | UserCountOutputTypeCountResume_exportsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSessionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountEducationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EducationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountExperiencesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExperienceWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SkillWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountResumesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountResume_exportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeExportWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    location?: boolean;
    linkedin_url?: boolean;
    portfolio_url?: boolean;
    summary?: boolean;
    avatar_url?: boolean;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    education?: boolean | Prisma.User$educationArgs<ExtArgs>;
    documents?: boolean | Prisma.User$documentsArgs<ExtArgs>;
    experiences?: boolean | Prisma.User$experiencesArgs<ExtArgs>;
    skills?: boolean | Prisma.User$skillsArgs<ExtArgs>;
    resumes?: boolean | Prisma.User$resumesArgs<ExtArgs>;
    resume_exports?: boolean | Prisma.User$resume_exportsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    location?: boolean;
    linkedin_url?: boolean;
    portfolio_url?: boolean;
    summary?: boolean;
    avatar_url?: boolean;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    location?: boolean;
    linkedin_url?: boolean;
    portfolio_url?: boolean;
    summary?: boolean;
    avatar_url?: boolean;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    location?: boolean;
    linkedin_url?: boolean;
    portfolio_url?: boolean;
    summary?: boolean;
    avatar_url?: boolean;
    email_verified?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password_hash" | "full_name" | "phone" | "location" | "linkedin_url" | "portfolio_url" | "summary" | "avatar_url" | "email_verified" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    education?: boolean | Prisma.User$educationArgs<ExtArgs>;
    documents?: boolean | Prisma.User$documentsArgs<ExtArgs>;
    experiences?: boolean | Prisma.User$experiencesArgs<ExtArgs>;
    skills?: boolean | Prisma.User$skillsArgs<ExtArgs>;
    resumes?: boolean | Prisma.User$resumesArgs<ExtArgs>;
    resume_exports?: boolean | Prisma.User$resume_exportsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        sessions: Prisma.$UserSessionPayload<ExtArgs>[];
        education: Prisma.$EducationPayload<ExtArgs>[];
        documents: Prisma.$DocumentPayload<ExtArgs>[];
        experiences: Prisma.$ExperiencePayload<ExtArgs>[];
        skills: Prisma.$SkillPayload<ExtArgs>[];
        resumes: Prisma.$ResumePayload<ExtArgs>[];
        resume_exports: Prisma.$ResumeExportPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password_hash: string;
        full_name: string | null;
        phone: string | null;
        location: string | null;
        linkedin_url: string | null;
        portfolio_url: string | null;
        summary: string | null;
        avatar_url: string | null;
        email_verified: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    education<T extends Prisma.User$educationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$educationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documents<T extends Prisma.User$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    experiences<T extends Prisma.User$experiencesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    skills<T extends Prisma.User$skillsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    resumes<T extends Prisma.User$resumesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    resume_exports<T extends Prisma.User$resume_exportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$resume_exportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password_hash: Prisma.FieldRef<"User", 'String'>;
    readonly full_name: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly location: Prisma.FieldRef<"User", 'String'>;
    readonly linkedin_url: Prisma.FieldRef<"User", 'String'>;
    readonly portfolio_url: Prisma.FieldRef<"User", 'String'>;
    readonly summary: Prisma.FieldRef<"User", 'String'>;
    readonly avatar_url: Prisma.FieldRef<"User", 'String'>;
    readonly email_verified: Prisma.FieldRef<"User", 'Boolean'>;
    readonly is_active: Prisma.FieldRef<"User", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.sessions
 */
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: Prisma.UserSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserSession
     */
    omit?: Prisma.UserSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserSessionInclude<ExtArgs> | null;
    where?: Prisma.UserSessionWhereInput;
    orderBy?: Prisma.UserSessionOrderByWithRelationInput | Prisma.UserSessionOrderByWithRelationInput[];
    cursor?: Prisma.UserSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserSessionScalarFieldEnum | Prisma.UserSessionScalarFieldEnum[];
};
/**
 * User.education
 */
export type User$educationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: Prisma.EducationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Education
     */
    omit?: Prisma.EducationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EducationInclude<ExtArgs> | null;
    where?: Prisma.EducationWhereInput;
    orderBy?: Prisma.EducationOrderByWithRelationInput | Prisma.EducationOrderByWithRelationInput[];
    cursor?: Prisma.EducationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EducationScalarFieldEnum | Prisma.EducationScalarFieldEnum[];
};
/**
 * User.documents
 */
export type User$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Document
     */
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
/**
 * User.experiences
 */
export type User$experiencesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: Prisma.ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: Prisma.ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ExperienceInclude<ExtArgs> | null;
    where?: Prisma.ExperienceWhereInput;
    orderBy?: Prisma.ExperienceOrderByWithRelationInput | Prisma.ExperienceOrderByWithRelationInput[];
    cursor?: Prisma.ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExperienceScalarFieldEnum | Prisma.ExperienceScalarFieldEnum[];
};
/**
 * User.skills
 */
export type User$skillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: Prisma.SkillSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Skill
     */
    omit?: Prisma.SkillOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SkillInclude<ExtArgs> | null;
    where?: Prisma.SkillWhereInput;
    orderBy?: Prisma.SkillOrderByWithRelationInput | Prisma.SkillOrderByWithRelationInput[];
    cursor?: Prisma.SkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SkillScalarFieldEnum | Prisma.SkillScalarFieldEnum[];
};
/**
 * User.resumes
 */
export type User$resumesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeScalarFieldEnum | Prisma.ResumeScalarFieldEnum[];
};
/**
 * User.resume_exports
 */
export type User$resume_exportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeExport
     */
    select?: Prisma.ResumeExportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResumeExport
     */
    omit?: Prisma.ResumeExportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResumeExportInclude<ExtArgs> | null;
    where?: Prisma.ResumeExportWhereInput;
    orderBy?: Prisma.ResumeExportOrderByWithRelationInput | Prisma.ResumeExportOrderByWithRelationInput[];
    cursor?: Prisma.ResumeExportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeExportScalarFieldEnum | Prisma.ResumeExportScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map