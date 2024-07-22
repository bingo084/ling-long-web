import type {Executor} from '../';
import type {RoleDto} from '../model/dto/';
import type {Page, RoleInput} from '../model/static/';

export class RoleService {
    
    constructor(private executor: Executor) {}
    
    /**
     * 删除
     */
    readonly deleteById: (options: RoleServiceOptions['deleteById']) => Promise<
        void
    > = async(options) => {
        let _uri = '/system/roles/';
        _uri += encodeURIComponent(options.ids.join(','));
        return (await this.executor({uri: _uri, method: 'DELETE'})) as Promise<void>;
    }
    
    /**
     * 分页查询
     */
    readonly findPage: (options: RoleServiceOptions['findPage']) => Promise<
        Page<RoleDto['RoleService/SIMPLE_ROLE']>
    > = async(options) => {
        let _uri = '/system/roles';
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
        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<Page<RoleDto['RoleService/SIMPLE_ROLE']>>;
    }
    
    /**
     * 保存
     */
    readonly save: (options: RoleServiceOptions['save']) => Promise<
        number
    > = async(options) => {
        let _uri = '/system/roles';
        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<number>;
    }
}

export type RoleServiceOptions = {
    'findPage': {
        readonly index: number, 
        readonly size: number
    }, 
    'save': {
        readonly body: RoleInput
    }, 
    'deleteById': {
        readonly ids: ReadonlyArray<number>
    }
}
