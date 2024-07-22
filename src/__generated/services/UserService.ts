import type {Executor} from '../';
import type {UserDto} from '../model/dto/';
import type {Page, UserInput} from '../model/static/';

export class UserService {
    
    constructor(private executor: Executor) {}
    
    /**
     * 删除
     */
    readonly deleteById: (options: UserServiceOptions['deleteById']) => Promise<
        void
    > = async(options) => {
        let _uri = '/system/users/';
        _uri += encodeURIComponent(options.ids.join(','));
        return (await this.executor({uri: _uri, method: 'DELETE'})) as Promise<void>;
    }
    
    /**
     * 分页查询
     */
    readonly findPage: (options: UserServiceOptions['findPage']) => Promise<
        Page<UserDto['UserService/COMPLEX_USER']>
    > = async(options) => {
        let _uri = '/system/users';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.index;
        _uri += _separator
        _uri += 'index='
        _uri += encodeURIComponent(_value);
        _separator = '&';
        _value = options.size;
        _uri += _separator
        _uri += 'size='
        _uri += encodeURIComponent(_value);
        _separator = '&';
        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<Page<UserDto['UserService/COMPLEX_USER']>>;
    }
    
    /**
     * 保存
     */
    readonly save: (options: UserServiceOptions['save']) => Promise<
        number
    > = async(options) => {
        let _uri = '/system/users';
        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<number>;
    }
}

export type UserServiceOptions = {
    'findPage': {
        readonly index: number, 
        readonly size: number
    }, 
    'save': {
        readonly body: UserInput
    }, 
    'deleteById': {
        readonly ids: ReadonlyArray<number>
    }
}
