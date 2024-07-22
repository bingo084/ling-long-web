import type {MenuType} from '../enums/';

/**
 * 菜单
 */
export interface MenuInput {
    /**
     * 主键
     */
    readonly id?: number | undefined;
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
     * 类型
     */
    readonly type: MenuType;
    /**
     * 是否隐藏
     */
    readonly hidden?: boolean | undefined;
    /**
     * 是否启用
     */
    readonly enabled?: boolean | undefined;
    /**
     * 父菜单
     */
    readonly parentId?: number | undefined;
}
