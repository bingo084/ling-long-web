import type {Executor} from '../';
import type {LoginReq, SaTokenInfo} from '../model/static/';

/**
 * 权限
 */
export class AuthService {
    
    constructor(private executor: Executor) {}
    
    /**
     * 封禁
     */
    readonly ban: (options: AuthServiceOptions['ban']) => Promise<
        void
    > = async(options) => {
        let _uri = '/system/auth/ban/';
        _uri += encodeURIComponent(options.userId);
        return (await this.executor({uri: _uri, method: 'POST'})) as Promise<void>;
    }
    
    /**
     * 登录
     */
    readonly login: (options: AuthServiceOptions['login']) => Promise<
        SaTokenInfo
    > = async(options) => {
        let _uri = '/system/auth/login';
        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<SaTokenInfo>;
    }
    
    /**
     * 登出
     */
    readonly logout: () => Promise<
        void
    > = async() => {
        let _uri = '/system/auth/logout';
        return (await this.executor({uri: _uri, method: 'POST'})) as Promise<void>;
    }
    
    /**
     * 解封
     */
    readonly unban: (options: AuthServiceOptions['unban']) => Promise<
        void
    > = async(options) => {
        let _uri = '/system/auth/unban/';
        _uri += encodeURIComponent(options.userId);
        return (await this.executor({uri: _uri, method: 'POST'})) as Promise<void>;
    }
}

export type AuthServiceOptions = {
    'login': {
        readonly body: LoginReq
    }, 
    'logout': {}, 
    'ban': {
        readonly userId: number
    }, 
    'unban': {
        readonly userId: number
    }
}
