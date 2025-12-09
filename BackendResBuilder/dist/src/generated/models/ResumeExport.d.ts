import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ResumeExport
 *
 */
export type ResumeExportModel = runtime.Types.Result.DefaultSelection<Prisma.$ResumeExportPayload>;
export type AggregateResumeExport = {
    _count: ResumeExportCountAggregateOutputType | null;
    _avg: ResumeExportAvgAggregateOutputType | null;
    _sum: ResumeExportSumAggregateOutputType | null;
    _min: ResumeExportMinAggregateOutputType | null;
    _max: ResumeExportMaxAggregateOutputType | null;
};
export type ResumeExportAvgAggregateOutputType = {
    file_size: number | null;
    download_count: number | null;
};
export type ResumeExportSumAggregateOutputType = {
    file_size: number | null;
    download_count: number | null;
};
export type ResumeExportMinAggregateOutputType = {
    id: string | null;
    resume_id: string | null;
    user_id: string | null;
    file_format: string | null;
    file_url: string | null;
    file_size: number | null;
    download_count: number | null;
    generated_at: Date | null;
};
export type ResumeExportMaxAggregateOutputType = {
    id: string | null;
    resume_id: string | null;
    user_id: string | null;
    file_format: string | null;
    file_url: string | null;
    file_size: number | null;
    download_count: number | null;
    generated_at: Date | null;
};
export type ResumeExportCountAggregateOutputType = {
    id: number;
    resume_id: number;
    user_id: number;
    file_format: number;
    file_url: number;
    file_size: number;
    download_count: number;
    generated_at: number;
    _all: number;
};
export type ResumeExportAvgAggregateInputType = {
    file_size?: true;
    download_count?: true;
};
export type ResumeExportSumAggregateInputType = {
    file_size?: true;
    download_count?: true;
};
export type ResumeExportMinAggregateInputType = {
    id?: true;
    resume_id?: true;
    user_id?: true;
    file_format?: true;
    file_url?: true;
    file_size?: true;
    download_count?: true;
    generated_at?: true;
};
export type ResumeExportMaxAggregateInputType = {
    id?: true;
    resume_id?: true;
    user_id?: true;
    file_format?: true;
    file_url?: true;
    file_size?: true;
    download_count?: true;
    generated_at?: true;
};
export type ResumeExportCountAggregateInputType = {
    id?: true;
    resume_id?: true;
    user_id?: true;
    file_format?: true;
    file_url?: true;
    file_size?: true;
    download_count?: true;
    generated_at?: true;
    _all?: true;
};
export type ResumeExportAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeExport to aggregate.
     */
    where?: Prisma.ResumeExportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ResumeExports to fetch.
     */
    orderBy?: Prisma.ResumeExportOrderByWithRelationInput | Prisma.ResumeExportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ResumeExportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ResumeExports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ResumeExports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ResumeExports
    **/
    _count?: true | ResumeExportCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ResumeExportAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ResumeExportSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ResumeExportMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ResumeExportMaxAggregateInputType;
};
export type GetResumeExportAggregateType<T extends ResumeExportAggregateArgs> = {
    [P in keyof T & keyof AggregateResumeExport]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateResumeExport[P]> : Prisma.GetScalarType<T[P], AggregateResumeExport[P]>;
};
export type ResumeExportGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeExportWhereInput;
    orderBy?: Prisma.ResumeExportOrderByWithAggregationInput | Prisma.ResumeExportOrderByWithAggregationInput[];
    by: Prisma.ResumeExportScalarFieldEnum[] | Prisma.ResumeExportScalarFieldEnum;
    having?: Prisma.ResumeExportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResumeExportCountAggregateInputType | true;
    _avg?: ResumeExportAvgAggregateInputType;
    _sum?: ResumeExportSumAggregateInputType;
    _min?: ResumeExportMinAggregateInputType;
    _max?: ResumeExportMaxAggregateInputType;
};
export type ResumeExportGroupByOutputType = {
    id: string;
    resume_id: string;
    user_id: string;
    file_format: string;
    file_url: string;
    file_size: number | null;
    download_count: number;
    generated_at: Date;
    _count: ResumeExportCountAggregateOutputType | null;
    _avg: ResumeExportAvgAggregateOutputType | null;
    _sum: ResumeExportSumAggregateOutputType | null;
    _min: ResumeExportMinAggregateOutputType | null;
    _max: ResumeExportMaxAggregateOutputType | null;
};
type GetResumeExportGroupByPayload<T extends ResumeExportGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ResumeExportGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ResumeExportGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ResumeExportGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ResumeExportGroupByOutputType[P]>;
}>>;
export type ResumeExportWhereInput = {
    AND?: Prisma.ResumeExportWhereInput | Prisma.ResumeExportWhereInput[];
    OR?: Prisma.ResumeExportWhereInput[];
    NOT?: Prisma.ResumeExportWhereInput | Prisma.ResumeExportWhereInput[];
    id?: Prisma.StringFilter<"ResumeExport"> | string;
    resume_id?: Prisma.StringFilter<"ResumeExport"> | string;
    user_id?: Prisma.StringFilter<"ResumeExport"> | string;
    file_format?: Prisma.StringFilter<"ResumeExport"> | string;
    file_url?: Prisma.StringFilter<"ResumeExport"> | string;
    file_size?: Prisma.IntNullableFilter<"ResumeExport"> | number | null;
    download_count?: Prisma.IntFilter<"ResumeExport"> | number;
    generated_at?: Prisma.DateTimeFilter<"ResumeExport"> | Date | string;
    resume?: Prisma.XOR<Prisma.ResumeScalarRelationFilter, Prisma.ResumeWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ResumeExportOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    resume_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    file_format?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    file_size?: Prisma.SortOrderInput | Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    resume?: Prisma.ResumeOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ResumeExportWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ResumeExportWhereInput | Prisma.ResumeExportWhereInput[];
    OR?: Prisma.ResumeExportWhereInput[];
    NOT?: Prisma.ResumeExportWhereInput | Prisma.ResumeExportWhereInput[];
    resume_id?: Prisma.StringFilter<"ResumeExport"> | string;
    user_id?: Prisma.StringFilter<"ResumeExport"> | string;
    file_format?: Prisma.StringFilter<"ResumeExport"> | string;
    file_url?: Prisma.StringFilter<"ResumeExport"> | string;
    file_size?: Prisma.IntNullableFilter<"ResumeExport"> | number | null;
    download_count?: Prisma.IntFilter<"ResumeExport"> | number;
    generated_at?: Prisma.DateTimeFilter<"ResumeExport"> | Date | string;
    resume?: Prisma.XOR<Prisma.ResumeScalarRelationFilter, Prisma.ResumeWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ResumeExportOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    resume_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    file_format?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    file_size?: Prisma.SortOrderInput | Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    _count?: Prisma.ResumeExportCountOrderByAggregateInput;
    _avg?: Prisma.ResumeExportAvgOrderByAggregateInput;
    _max?: Prisma.ResumeExportMaxOrderByAggregateInput;
    _min?: Prisma.ResumeExportMinOrderByAggregateInput;
    _sum?: Prisma.ResumeExportSumOrderByAggregateInput;
};
export type ResumeExportScalarWhereWithAggregatesInput = {
    AND?: Prisma.ResumeExportScalarWhereWithAggregatesInput | Prisma.ResumeExportScalarWhereWithAggregatesInput[];
    OR?: Prisma.ResumeExportScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ResumeExportScalarWhereWithAggregatesInput | Prisma.ResumeExportScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ResumeExport"> | string;
    resume_id?: Prisma.StringWithAggregatesFilter<"ResumeExport"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"ResumeExport"> | string;
    file_format?: Prisma.StringWithAggregatesFilter<"ResumeExport"> | string;
    file_url?: Prisma.StringWithAggregatesFilter<"ResumeExport"> | string;
    file_size?: Prisma.IntNullableWithAggregatesFilter<"ResumeExport"> | number | null;
    download_count?: Prisma.IntWithAggregatesFilter<"ResumeExport"> | number;
    generated_at?: Prisma.DateTimeWithAggregatesFilter<"ResumeExport"> | Date | string;
};
export type ResumeExportCreateInput = {
    id?: string;
    file_format: string;
    file_url: string;
    file_size?: number | null;
    download_count?: number;
    generated_at?: Date | string;
    resume: Prisma.ResumeCreateNestedOneWithoutResume_exportsInput;
    user: Prisma.UserCreateNestedOneWithoutResume_exportsInput;
};
export type ResumeExportUncheckedCreateInput = {
    id?: string;
    resume_id: string;
    user_id: string;
    file_format: string;
    file_url: string;
    file_size?: number | null;
    download_count?: number;
    generated_at?: Date | string;
};
export type ResumeExportUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resume?: Prisma.ResumeUpdateOneRequiredWithoutResume_exportsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutResume_exportsNestedInput;
};
export type ResumeExportUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resume_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeExportCreateManyInput = {
    id?: string;
    resume_id: string;
    user_id: string;
    file_format: string;
    file_url: string;
    file_size?: number | null;
    download_count?: number;
    generated_at?: Date | string;
};
export type ResumeExportUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeExportUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resume_id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeExportListRelationFilter = {
    every?: Prisma.ResumeExportWhereInput;
    some?: Prisma.ResumeExportWhereInput;
    none?: Prisma.ResumeExportWhereInput;
};
export type ResumeExportOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ResumeExportCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    resume_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    file_format?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
};
export type ResumeExportAvgOrderByAggregateInput = {
    file_size?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
};
export type ResumeExportMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    resume_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    file_format?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
};
export type ResumeExportMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    resume_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    file_format?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
};
export type ResumeExportSumOrderByAggregateInput = {
    file_size?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
};
export type ResumeExportCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ResumeExportCreateWithoutUserInput, Prisma.ResumeExportUncheckedCreateWithoutUserInput> | Prisma.ResumeExportCreateWithoutUserInput[] | Prisma.ResumeExportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ResumeExportCreateOrConnectWithoutUserInput | Prisma.ResumeExportCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ResumeExportCreateManyUserInputEnvelope;
    connect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
};
export type ResumeExportUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ResumeExportCreateWithoutUserInput, Prisma.ResumeExportUncheckedCreateWithoutUserInput> | Prisma.ResumeExportCreateWithoutUserInput[] | Prisma.ResumeExportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ResumeExportCreateOrConnectWithoutUserInput | Prisma.ResumeExportCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ResumeExportCreateManyUserInputEnvelope;
    connect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
};
export type ResumeExportUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeExportCreateWithoutUserInput, Prisma.ResumeExportUncheckedCreateWithoutUserInput> | Prisma.ResumeExportCreateWithoutUserInput[] | Prisma.ResumeExportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ResumeExportCreateOrConnectWithoutUserInput | Prisma.ResumeExportCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ResumeExportUpsertWithWhereUniqueWithoutUserInput | Prisma.ResumeExportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ResumeExportCreateManyUserInputEnvelope;
    set?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    disconnect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    delete?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    connect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    update?: Prisma.ResumeExportUpdateWithWhereUniqueWithoutUserInput | Prisma.ResumeExportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ResumeExportUpdateManyWithWhereWithoutUserInput | Prisma.ResumeExportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ResumeExportScalarWhereInput | Prisma.ResumeExportScalarWhereInput[];
};
export type ResumeExportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeExportCreateWithoutUserInput, Prisma.ResumeExportUncheckedCreateWithoutUserInput> | Prisma.ResumeExportCreateWithoutUserInput[] | Prisma.ResumeExportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ResumeExportCreateOrConnectWithoutUserInput | Prisma.ResumeExportCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ResumeExportUpsertWithWhereUniqueWithoutUserInput | Prisma.ResumeExportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ResumeExportCreateManyUserInputEnvelope;
    set?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    disconnect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    delete?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    connect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    update?: Prisma.ResumeExportUpdateWithWhereUniqueWithoutUserInput | Prisma.ResumeExportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ResumeExportUpdateManyWithWhereWithoutUserInput | Prisma.ResumeExportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ResumeExportScalarWhereInput | Prisma.ResumeExportScalarWhereInput[];
};
export type ResumeExportCreateNestedManyWithoutResumeInput = {
    create?: Prisma.XOR<Prisma.ResumeExportCreateWithoutResumeInput, Prisma.ResumeExportUncheckedCreateWithoutResumeInput> | Prisma.ResumeExportCreateWithoutResumeInput[] | Prisma.ResumeExportUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeExportCreateOrConnectWithoutResumeInput | Prisma.ResumeExportCreateOrConnectWithoutResumeInput[];
    createMany?: Prisma.ResumeExportCreateManyResumeInputEnvelope;
    connect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
};
export type ResumeExportUncheckedCreateNestedManyWithoutResumeInput = {
    create?: Prisma.XOR<Prisma.ResumeExportCreateWithoutResumeInput, Prisma.ResumeExportUncheckedCreateWithoutResumeInput> | Prisma.ResumeExportCreateWithoutResumeInput[] | Prisma.ResumeExportUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeExportCreateOrConnectWithoutResumeInput | Prisma.ResumeExportCreateOrConnectWithoutResumeInput[];
    createMany?: Prisma.ResumeExportCreateManyResumeInputEnvelope;
    connect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
};
export type ResumeExportUpdateManyWithoutResumeNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeExportCreateWithoutResumeInput, Prisma.ResumeExportUncheckedCreateWithoutResumeInput> | Prisma.ResumeExportCreateWithoutResumeInput[] | Prisma.ResumeExportUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeExportCreateOrConnectWithoutResumeInput | Prisma.ResumeExportCreateOrConnectWithoutResumeInput[];
    upsert?: Prisma.ResumeExportUpsertWithWhereUniqueWithoutResumeInput | Prisma.ResumeExportUpsertWithWhereUniqueWithoutResumeInput[];
    createMany?: Prisma.ResumeExportCreateManyResumeInputEnvelope;
    set?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    disconnect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    delete?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    connect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    update?: Prisma.ResumeExportUpdateWithWhereUniqueWithoutResumeInput | Prisma.ResumeExportUpdateWithWhereUniqueWithoutResumeInput[];
    updateMany?: Prisma.ResumeExportUpdateManyWithWhereWithoutResumeInput | Prisma.ResumeExportUpdateManyWithWhereWithoutResumeInput[];
    deleteMany?: Prisma.ResumeExportScalarWhereInput | Prisma.ResumeExportScalarWhereInput[];
};
export type ResumeExportUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeExportCreateWithoutResumeInput, Prisma.ResumeExportUncheckedCreateWithoutResumeInput> | Prisma.ResumeExportCreateWithoutResumeInput[] | Prisma.ResumeExportUncheckedCreateWithoutResumeInput[];
    connectOrCreate?: Prisma.ResumeExportCreateOrConnectWithoutResumeInput | Prisma.ResumeExportCreateOrConnectWithoutResumeInput[];
    upsert?: Prisma.ResumeExportUpsertWithWhereUniqueWithoutResumeInput | Prisma.ResumeExportUpsertWithWhereUniqueWithoutResumeInput[];
    createMany?: Prisma.ResumeExportCreateManyResumeInputEnvelope;
    set?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    disconnect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    delete?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    connect?: Prisma.ResumeExportWhereUniqueInput | Prisma.ResumeExportWhereUniqueInput[];
    update?: Prisma.ResumeExportUpdateWithWhereUniqueWithoutResumeInput | Prisma.ResumeExportUpdateWithWhereUniqueWithoutResumeInput[];
    updateMany?: Prisma.ResumeExportUpdateManyWithWhereWithoutResumeInput | Prisma.ResumeExportUpdateManyWithWhereWithoutResumeInput[];
    deleteMany?: Prisma.ResumeExportScalarWhereInput | Prisma.ResumeExportScalarWhereInput[];
};
export type ResumeExportCreateWithoutUserInput = {
    id?: string;
    file_format: string;
    file_url: string;
    file_size?: number | null;
    download_count?: number;
    generated_at?: Date | string;
    resume: Prisma.ResumeCreateNestedOneWithoutResume_exportsInput;
};
export type ResumeExportUncheckedCreateWithoutUserInput = {
    id?: string;
    resume_id: string;
    file_format: string;
    file_url: string;
    file_size?: number | null;
    download_count?: number;
    generated_at?: Date | string;
};
export type ResumeExportCreateOrConnectWithoutUserInput = {
    where: Prisma.ResumeExportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeExportCreateWithoutUserInput, Prisma.ResumeExportUncheckedCreateWithoutUserInput>;
};
export type ResumeExportCreateManyUserInputEnvelope = {
    data: Prisma.ResumeExportCreateManyUserInput | Prisma.ResumeExportCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ResumeExportUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ResumeExportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResumeExportUpdateWithoutUserInput, Prisma.ResumeExportUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ResumeExportCreateWithoutUserInput, Prisma.ResumeExportUncheckedCreateWithoutUserInput>;
};
export type ResumeExportUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ResumeExportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResumeExportUpdateWithoutUserInput, Prisma.ResumeExportUncheckedUpdateWithoutUserInput>;
};
export type ResumeExportUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ResumeExportScalarWhereInput;
    data: Prisma.XOR<Prisma.ResumeExportUpdateManyMutationInput, Prisma.ResumeExportUncheckedUpdateManyWithoutUserInput>;
};
export type ResumeExportScalarWhereInput = {
    AND?: Prisma.ResumeExportScalarWhereInput | Prisma.ResumeExportScalarWhereInput[];
    OR?: Prisma.ResumeExportScalarWhereInput[];
    NOT?: Prisma.ResumeExportScalarWhereInput | Prisma.ResumeExportScalarWhereInput[];
    id?: Prisma.StringFilter<"ResumeExport"> | string;
    resume_id?: Prisma.StringFilter<"ResumeExport"> | string;
    user_id?: Prisma.StringFilter<"ResumeExport"> | string;
    file_format?: Prisma.StringFilter<"ResumeExport"> | string;
    file_url?: Prisma.StringFilter<"ResumeExport"> | string;
    file_size?: Prisma.IntNullableFilter<"ResumeExport"> | number | null;
    download_count?: Prisma.IntFilter<"ResumeExport"> | number;
    generated_at?: Prisma.DateTimeFilter<"ResumeExport"> | Date | string;
};
export type ResumeExportCreateWithoutResumeInput = {
    id?: string;
    file_format: string;
    file_url: string;
    file_size?: number | null;
    download_count?: number;
    generated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutResume_exportsInput;
};
export type ResumeExportUncheckedCreateWithoutResumeInput = {
    id?: string;
    user_id: string;
    file_format: string;
    file_url: string;
    file_size?: number | null;
    download_count?: number;
    generated_at?: Date | string;
};
export type ResumeExportCreateOrConnectWithoutResumeInput = {
    where: Prisma.ResumeExportWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeExportCreateWithoutResumeInput, Prisma.ResumeExportUncheckedCreateWithoutResumeInput>;
};
export type ResumeExportCreateManyResumeInputEnvelope = {
    data: Prisma.ResumeExportCreateManyResumeInput | Prisma.ResumeExportCreateManyResumeInput[];
    skipDuplicates?: boolean;
};
export type ResumeExportUpsertWithWhereUniqueWithoutResumeInput = {
    where: Prisma.ResumeExportWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResumeExportUpdateWithoutResumeInput, Prisma.ResumeExportUncheckedUpdateWithoutResumeInput>;
    create: Prisma.XOR<Prisma.ResumeExportCreateWithoutResumeInput, Prisma.ResumeExportUncheckedCreateWithoutResumeInput>;
};
export type ResumeExportUpdateWithWhereUniqueWithoutResumeInput = {
    where: Prisma.ResumeExportWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResumeExportUpdateWithoutResumeInput, Prisma.ResumeExportUncheckedUpdateWithoutResumeInput>;
};
export type ResumeExportUpdateManyWithWhereWithoutResumeInput = {
    where: Prisma.ResumeExportScalarWhereInput;
    data: Prisma.XOR<Prisma.ResumeExportUpdateManyMutationInput, Prisma.ResumeExportUncheckedUpdateManyWithoutResumeInput>;
};
export type ResumeExportCreateManyUserInput = {
    id?: string;
    resume_id: string;
    file_format: string;
    file_url: string;
    file_size?: number | null;
    download_count?: number;
    generated_at?: Date | string;
};
export type ResumeExportUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resume?: Prisma.ResumeUpdateOneRequiredWithoutResume_exportsNestedInput;
};
export type ResumeExportUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resume_id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeExportUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resume_id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeExportCreateManyResumeInput = {
    id?: string;
    user_id: string;
    file_format: string;
    file_url: string;
    file_size?: number | null;
    download_count?: number;
    generated_at?: Date | string;
};
export type ResumeExportUpdateWithoutResumeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutResume_exportsNestedInput;
};
export type ResumeExportUncheckedUpdateWithoutResumeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeExportUncheckedUpdateManyWithoutResumeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    file_format?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeExportSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    resume_id?: boolean;
    user_id?: boolean;
    file_format?: boolean;
    file_url?: boolean;
    file_size?: boolean;
    download_count?: boolean;
    generated_at?: boolean;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resumeExport"]>;
export type ResumeExportSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    resume_id?: boolean;
    user_id?: boolean;
    file_format?: boolean;
    file_url?: boolean;
    file_size?: boolean;
    download_count?: boolean;
    generated_at?: boolean;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resumeExport"]>;
export type ResumeExportSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    resume_id?: boolean;
    user_id?: boolean;
    file_format?: boolean;
    file_url?: boolean;
    file_size?: boolean;
    download_count?: boolean;
    generated_at?: boolean;
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resumeExport"]>;
export type ResumeExportSelectScalar = {
    id?: boolean;
    resume_id?: boolean;
    user_id?: boolean;
    file_format?: boolean;
    file_url?: boolean;
    file_size?: boolean;
    download_count?: boolean;
    generated_at?: boolean;
};
export type ResumeExportOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "resume_id" | "user_id" | "file_format" | "file_url" | "file_size" | "download_count" | "generated_at", ExtArgs["result"]["resumeExport"]>;
export type ResumeExportInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ResumeExportIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ResumeExportIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resume?: boolean | Prisma.ResumeDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ResumeExportPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ResumeExport";
    objects: {
        resume: Prisma.$ResumePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        resume_id: string;
        user_id: string;
        file_format: string;
        file_url: string;
        file_size: number | null;
        download_count: number;
        generated_at: Date;
    }, ExtArgs["result"]["resumeExport"]>;
    composites: {};
};
export type ResumeExportGetPayload<S extends boolean | null | undefined | ResumeExportDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload, S>;
export type ResumeExportCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ResumeExportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ResumeExportCountAggregateInputType | true;
};
export interface ResumeExportDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ResumeExport'];
        meta: {
            name: 'ResumeExport';
        };
    };
    /**
     * Find zero or one ResumeExport that matches the filter.
     * @param {ResumeExportFindUniqueArgs} args - Arguments to find a ResumeExport
     * @example
     * // Get one ResumeExport
     * const resumeExport = await prisma.resumeExport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeExportFindUniqueArgs>(args: Prisma.SelectSubset<T, ResumeExportFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ResumeExportClient<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ResumeExport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeExportFindUniqueOrThrowArgs} args - Arguments to find a ResumeExport
     * @example
     * // Get one ResumeExport
     * const resumeExport = await prisma.resumeExport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeExportFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ResumeExportFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeExportClient<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ResumeExport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeExportFindFirstArgs} args - Arguments to find a ResumeExport
     * @example
     * // Get one ResumeExport
     * const resumeExport = await prisma.resumeExport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeExportFindFirstArgs>(args?: Prisma.SelectSubset<T, ResumeExportFindFirstArgs<ExtArgs>>): Prisma.Prisma__ResumeExportClient<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ResumeExport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeExportFindFirstOrThrowArgs} args - Arguments to find a ResumeExport
     * @example
     * // Get one ResumeExport
     * const resumeExport = await prisma.resumeExport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeExportFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ResumeExportFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeExportClient<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ResumeExports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeExportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeExports
     * const resumeExports = await prisma.resumeExport.findMany()
     *
     * // Get first 10 ResumeExports
     * const resumeExports = await prisma.resumeExport.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const resumeExportWithIdOnly = await prisma.resumeExport.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ResumeExportFindManyArgs>(args?: Prisma.SelectSubset<T, ResumeExportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ResumeExport.
     * @param {ResumeExportCreateArgs} args - Arguments to create a ResumeExport.
     * @example
     * // Create one ResumeExport
     * const ResumeExport = await prisma.resumeExport.create({
     *   data: {
     *     // ... data to create a ResumeExport
     *   }
     * })
     *
     */
    create<T extends ResumeExportCreateArgs>(args: Prisma.SelectSubset<T, ResumeExportCreateArgs<ExtArgs>>): Prisma.Prisma__ResumeExportClient<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ResumeExports.
     * @param {ResumeExportCreateManyArgs} args - Arguments to create many ResumeExports.
     * @example
     * // Create many ResumeExports
     * const resumeExport = await prisma.resumeExport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ResumeExportCreateManyArgs>(args?: Prisma.SelectSubset<T, ResumeExportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ResumeExports and returns the data saved in the database.
     * @param {ResumeExportCreateManyAndReturnArgs} args - Arguments to create many ResumeExports.
     * @example
     * // Create many ResumeExports
     * const resumeExport = await prisma.resumeExport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ResumeExports and only return the `id`
     * const resumeExportWithIdOnly = await prisma.resumeExport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ResumeExportCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ResumeExportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ResumeExport.
     * @param {ResumeExportDeleteArgs} args - Arguments to delete one ResumeExport.
     * @example
     * // Delete one ResumeExport
     * const ResumeExport = await prisma.resumeExport.delete({
     *   where: {
     *     // ... filter to delete one ResumeExport
     *   }
     * })
     *
     */
    delete<T extends ResumeExportDeleteArgs>(args: Prisma.SelectSubset<T, ResumeExportDeleteArgs<ExtArgs>>): Prisma.Prisma__ResumeExportClient<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ResumeExport.
     * @param {ResumeExportUpdateArgs} args - Arguments to update one ResumeExport.
     * @example
     * // Update one ResumeExport
     * const resumeExport = await prisma.resumeExport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ResumeExportUpdateArgs>(args: Prisma.SelectSubset<T, ResumeExportUpdateArgs<ExtArgs>>): Prisma.Prisma__ResumeExportClient<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ResumeExports.
     * @param {ResumeExportDeleteManyArgs} args - Arguments to filter ResumeExports to delete.
     * @example
     * // Delete a few ResumeExports
     * const { count } = await prisma.resumeExport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ResumeExportDeleteManyArgs>(args?: Prisma.SelectSubset<T, ResumeExportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ResumeExports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeExportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeExports
     * const resumeExport = await prisma.resumeExport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ResumeExportUpdateManyArgs>(args: Prisma.SelectSubset<T, ResumeExportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ResumeExports and returns the data updated in the database.
     * @param {ResumeExportUpdateManyAndReturnArgs} args - Arguments to update many ResumeExports.
     * @example
     * // Update many ResumeExports
     * const resumeExport = await prisma.resumeExport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ResumeExports and only return the `id`
     * const resumeExportWithIdOnly = await prisma.resumeExport.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResumeExportUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ResumeExportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ResumeExport.
     * @param {ResumeExportUpsertArgs} args - Arguments to update or create a ResumeExport.
     * @example
     * // Update or create a ResumeExport
     * const resumeExport = await prisma.resumeExport.upsert({
     *   create: {
     *     // ... data to create a ResumeExport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeExport we want to update
     *   }
     * })
     */
    upsert<T extends ResumeExportUpsertArgs>(args: Prisma.SelectSubset<T, ResumeExportUpsertArgs<ExtArgs>>): Prisma.Prisma__ResumeExportClient<runtime.Types.Result.GetResult<Prisma.$ResumeExportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ResumeExports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeExportCountArgs} args - Arguments to filter ResumeExports to count.
     * @example
     * // Count the number of ResumeExports
     * const count = await prisma.resumeExport.count({
     *   where: {
     *     // ... the filter for the ResumeExports we want to count
     *   }
     * })
    **/
    count<T extends ResumeExportCountArgs>(args?: Prisma.Subset<T, ResumeExportCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ResumeExportCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ResumeExport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeExportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumeExportAggregateArgs>(args: Prisma.Subset<T, ResumeExportAggregateArgs>): Prisma.PrismaPromise<GetResumeExportAggregateType<T>>;
    /**
     * Group by ResumeExport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeExportGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ResumeExportGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ResumeExportGroupByArgs['orderBy'];
    } : {
        orderBy?: ResumeExportGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ResumeExportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeExportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ResumeExport model
     */
    readonly fields: ResumeExportFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ResumeExport.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ResumeExportClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    resume<T extends Prisma.ResumeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ResumeDefaultArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ResumeExport model
 */
export interface ResumeExportFieldRefs {
    readonly id: Prisma.FieldRef<"ResumeExport", 'String'>;
    readonly resume_id: Prisma.FieldRef<"ResumeExport", 'String'>;
    readonly user_id: Prisma.FieldRef<"ResumeExport", 'String'>;
    readonly file_format: Prisma.FieldRef<"ResumeExport", 'String'>;
    readonly file_url: Prisma.FieldRef<"ResumeExport", 'String'>;
    readonly file_size: Prisma.FieldRef<"ResumeExport", 'Int'>;
    readonly download_count: Prisma.FieldRef<"ResumeExport", 'Int'>;
    readonly generated_at: Prisma.FieldRef<"ResumeExport", 'DateTime'>;
}
/**
 * ResumeExport findUnique
 */
export type ResumeExportFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ResumeExport to fetch.
     */
    where: Prisma.ResumeExportWhereUniqueInput;
};
/**
 * ResumeExport findUniqueOrThrow
 */
export type ResumeExportFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ResumeExport to fetch.
     */
    where: Prisma.ResumeExportWhereUniqueInput;
};
/**
 * ResumeExport findFirst
 */
export type ResumeExportFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ResumeExport to fetch.
     */
    where?: Prisma.ResumeExportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ResumeExports to fetch.
     */
    orderBy?: Prisma.ResumeExportOrderByWithRelationInput | Prisma.ResumeExportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ResumeExports.
     */
    cursor?: Prisma.ResumeExportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ResumeExports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ResumeExports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ResumeExports.
     */
    distinct?: Prisma.ResumeExportScalarFieldEnum | Prisma.ResumeExportScalarFieldEnum[];
};
/**
 * ResumeExport findFirstOrThrow
 */
export type ResumeExportFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ResumeExport to fetch.
     */
    where?: Prisma.ResumeExportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ResumeExports to fetch.
     */
    orderBy?: Prisma.ResumeExportOrderByWithRelationInput | Prisma.ResumeExportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ResumeExports.
     */
    cursor?: Prisma.ResumeExportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ResumeExports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ResumeExports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ResumeExports.
     */
    distinct?: Prisma.ResumeExportScalarFieldEnum | Prisma.ResumeExportScalarFieldEnum[];
};
/**
 * ResumeExport findMany
 */
export type ResumeExportFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ResumeExports to fetch.
     */
    where?: Prisma.ResumeExportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ResumeExports to fetch.
     */
    orderBy?: Prisma.ResumeExportOrderByWithRelationInput | Prisma.ResumeExportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ResumeExports.
     */
    cursor?: Prisma.ResumeExportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ResumeExports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ResumeExports.
     */
    skip?: number;
    distinct?: Prisma.ResumeExportScalarFieldEnum | Prisma.ResumeExportScalarFieldEnum[];
};
/**
 * ResumeExport create
 */
export type ResumeExportCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ResumeExport.
     */
    data: Prisma.XOR<Prisma.ResumeExportCreateInput, Prisma.ResumeExportUncheckedCreateInput>;
};
/**
 * ResumeExport createMany
 */
export type ResumeExportCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeExports.
     */
    data: Prisma.ResumeExportCreateManyInput | Prisma.ResumeExportCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ResumeExport createManyAndReturn
 */
export type ResumeExportCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeExport
     */
    select?: Prisma.ResumeExportSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ResumeExport
     */
    omit?: Prisma.ResumeExportOmit<ExtArgs> | null;
    /**
     * The data used to create many ResumeExports.
     */
    data: Prisma.ResumeExportCreateManyInput | Prisma.ResumeExportCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResumeExportIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ResumeExport update
 */
export type ResumeExportUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ResumeExport.
     */
    data: Prisma.XOR<Prisma.ResumeExportUpdateInput, Prisma.ResumeExportUncheckedUpdateInput>;
    /**
     * Choose, which ResumeExport to update.
     */
    where: Prisma.ResumeExportWhereUniqueInput;
};
/**
 * ResumeExport updateMany
 */
export type ResumeExportUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeExports.
     */
    data: Prisma.XOR<Prisma.ResumeExportUpdateManyMutationInput, Prisma.ResumeExportUncheckedUpdateManyInput>;
    /**
     * Filter which ResumeExports to update
     */
    where?: Prisma.ResumeExportWhereInput;
    /**
     * Limit how many ResumeExports to update.
     */
    limit?: number;
};
/**
 * ResumeExport updateManyAndReturn
 */
export type ResumeExportUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeExport
     */
    select?: Prisma.ResumeExportSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ResumeExport
     */
    omit?: Prisma.ResumeExportOmit<ExtArgs> | null;
    /**
     * The data used to update ResumeExports.
     */
    data: Prisma.XOR<Prisma.ResumeExportUpdateManyMutationInput, Prisma.ResumeExportUncheckedUpdateManyInput>;
    /**
     * Filter which ResumeExports to update
     */
    where?: Prisma.ResumeExportWhereInput;
    /**
     * Limit how many ResumeExports to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResumeExportIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ResumeExport upsert
 */
export type ResumeExportUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ResumeExport to update in case it exists.
     */
    where: Prisma.ResumeExportWhereUniqueInput;
    /**
     * In case the ResumeExport found by the `where` argument doesn't exist, create a new ResumeExport with this data.
     */
    create: Prisma.XOR<Prisma.ResumeExportCreateInput, Prisma.ResumeExportUncheckedCreateInput>;
    /**
     * In case the ResumeExport was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ResumeExportUpdateInput, Prisma.ResumeExportUncheckedUpdateInput>;
};
/**
 * ResumeExport delete
 */
export type ResumeExportDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ResumeExport to delete.
     */
    where: Prisma.ResumeExportWhereUniqueInput;
};
/**
 * ResumeExport deleteMany
 */
export type ResumeExportDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeExports to delete
     */
    where?: Prisma.ResumeExportWhereInput;
    /**
     * Limit how many ResumeExports to delete.
     */
    limit?: number;
};
/**
 * ResumeExport without action
 */
export type ResumeExportDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ResumeExport.d.ts.map