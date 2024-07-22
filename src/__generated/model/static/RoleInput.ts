/**
 * 角色
 */
export interface RoleInput {
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
     * 菜单
     */
    readonly menuIds?: ReadonlyArray<number> | undefined;
}
