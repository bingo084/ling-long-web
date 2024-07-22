import type {MenuType, UserState} from '../enums/';

export type UserDto = {
    'UserService/COMPLEX_USER': {
        /**
         * 主键
         */
        readonly id: number;
        /**
         * 创建时间
         */
        readonly createTime: string;
        /**
         * 更新时间
         */
        readonly updateTime: string;
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
         * 密码
         */
        readonly password: string;
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
         * 状态
         */
        readonly state: UserState;
        /**
         * 部门
         */
        readonly dept?: {
            /**
             * 主键
             */
            readonly id: number;
            /**
             * 创建时间
             */
            readonly createTime: string;
            /**
             * 更新时间
             */
            readonly updateTime: string;
            /**
             * 名称
             */
            readonly name: string;
            /**
             * 描述
             */
            readonly description?: string | undefined;
        } | undefined;
        /**
         * 角色
         */
        readonly roles: ReadonlyArray<{
            /**
             * 主键
             */
            readonly id: number;
            /**
             * 创建时间
             */
            readonly createTime: string;
            /**
             * 更新时间
             */
            readonly updateTime: string;
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
            readonly menus: ReadonlyArray<{
                /**
                 * 主键
                 */
                readonly id: number;
                /**
                 * 创建时间
                 */
                readonly createTime: string;
                /**
                 * 更新时间
                 */
                readonly updateTime: string;
                /**
                 * 名称
                 */
                readonly name: string;
                /**
                 * 权限
                 */
                readonly permission?: string | undefined;
                /**
                 * 图标
                 */
                readonly icon?: string | undefined;
                /**
                 * 路由
                 */
                readonly route?: string | undefined;
                /**
                 * 排序
                 */
                readonly sort: number;
                /**
                 * 是否隐藏
                 */
                readonly hidden: boolean;
                /**
                 * 是否启用
                 */
                readonly enabled: boolean;
                /**
                 * 类型
                 */
                readonly type: MenuType;
            }>;
        }>;
        /**
         * 权限
         */
        readonly permissions: ReadonlyArray<string>;
        /**
         * 创建人
         */
        readonly creator: {
            /**
             * 主键
             */
            readonly id: number;
            /**
             * 用户名
             */
            readonly username: string;
            /**
             * 昵称
             */
            readonly nickname?: string | undefined;
            /**
             * 真实姓名
             */
            readonly realName?: string | undefined;
        };
        /**
         * 更新人
         */
        readonly updater: {
            /**
             * 主键
             */
            readonly id: number;
            /**
             * 用户名
             */
            readonly username: string;
            /**
             * 昵称
             */
            readonly nickname?: string | undefined;
            /**
             * 真实姓名
             */
            readonly realName?: string | undefined;
        };
    }
}
