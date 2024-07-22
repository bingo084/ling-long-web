import type {MenuType} from '../enums/';

export type MenuDto = {
    'MenuService/TREE_MENU': {
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
        /**
         * 子菜单
         */
        readonly children?: ReadonlyArray<MenuDto['MenuService/TREE_MENU']> | undefined;
    }
}
