/**
 * 用户
 */
export interface UserInput {
    /**
     * 主键
     */
    readonly id?: number | undefined;
    /**
     * 用户名
     */
    readonly username: string;
    /**
     * 邮箱
     */
    readonly email?: string | undefined;
    /**
     * 手机号
     */
    readonly phone?: string | undefined;
    /**
     * 真实姓名
     */
    readonly realName?: string | undefined;
    /**
     * 昵称
     */
    readonly nickname?: string | undefined;
    /**
     * 头像
     */
    readonly avatar?: string | undefined;
    /**
     * 部门
     */
    readonly deptId?: number | undefined;
    /**
     * 角色
     */
    readonly roleIds?: ReadonlyArray<number> | undefined;
}
