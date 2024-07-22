export const UserState_CONSTANTS = [
    /**
     * 激活
     */
    'ACTIVE', 
    /**
     * 注销
     */
    'INACTIVE', 
    /**
     * 封禁
     */
    'BANNED'
] as const;
/**
 * 用户状态
 * 
 */
export type UserState = typeof UserState_CONSTANTS[number];
