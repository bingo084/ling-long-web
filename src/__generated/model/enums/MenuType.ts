export const MenuType_CONSTANTS = [
    /**
     * 目录
     */
    'CATALOG', 
    /**
     * 菜单
     */
    'MENU', 
    /**
     * 按钮
     */
    'BUTTON'
] as const;
/**
 * 菜单类型
 * 
 */
export type MenuType = typeof MenuType_CONSTANTS[number];
