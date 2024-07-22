import type {Executor} from './';
import {
    AuthService, 
    DeptService, 
    MenuService, 
    RoleService, 
    UserService
} from './services/';

export class Api {
    
    readonly authService: AuthService
    
    readonly deptService: DeptService
    
    readonly menuService: MenuService
    
    readonly roleService: RoleService
    
    readonly userService: UserService
    
    constructor(executor: Executor) {
        this.authService = new AuthService(executor);
        this.deptService = new DeptService(executor);
        this.menuService = new MenuService(executor);
        this.roleService = new RoleService(executor);
        this.userService = new UserService(executor);
    }
}