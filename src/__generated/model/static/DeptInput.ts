/**
 * 部门
 */
export interface DeptInput {
    /**
     * 主键
     */
    readonly id?: number | undefined;
    /**
     * 名称
     */
    readonly name: string;
    /**
     * 描述
     */
    readonly description?: string | undefined;
    /**
     * 父部门
     */
    readonly parentId?: number | undefined;
}
