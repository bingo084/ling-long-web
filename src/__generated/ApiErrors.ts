export type AllErrors = {
        family: 'AUTH', 
        code: 'USERNAME_OR_PASSWORD_ERROR'
    } | {
        family: 'AUTH', 
        code: 'ACCOUNT_BANNED'
    };
export type ApiErrors = {
    'authService': {
        'login': AllErrors & ({
                family: 'AUTH', 
                code: 'USERNAME_OR_PASSWORD_ERROR', 
                readonly [key:string]: any
            } | {
                family: 'AUTH', 
                code: 'ACCOUNT_BANNED', 
                readonly [key:string]: any
            })
    }, 
    'deptService': {
    }, 
    'menuService': {
    }, 
    'roleService': {
    }, 
    'userService': {
    }
};
