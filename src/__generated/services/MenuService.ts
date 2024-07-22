import type {Executor} from '../';
import type {MenuDto} from '../model/dto/';
import type {MenuInput} from '../model/static/';

export class MenuService {
    
    constructor(private executor: Executor) {}
    
    /**
     * 删除
     */
    readonly deleteById: (options: MenuServiceOptions['deleteById']) => Promise<
        void
    > = async(options) => {
        let _uri = '/system/menus/';
        _uri += encodeURIComponent(options.ids.join(','));
        return (await this.executor({uri: _uri, method: 'DELETE'})) as Promise<void>;
    }
    
    /**
     * 查询树
     */
    readonly findTree: () => Promise<
        ReadonlyArray<MenuDto['MenuService/TREE_MENU']>
    > = async() => {
        let _uri = '/system/menus';
        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<ReadonlyArray<MenuDto['MenuService/TREE_MENU']>>;
    }
    
    /**
     * 保存
     */
    readonly save: (options: MenuServiceOptions['save']) => Promise<
        number
    > = async(options) => {
        let _uri = '/system/menus';
        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<number>;
    }
}

export type MenuServiceOptions = {
    'findTree': {}, 
    'save': {
        readonly body: MenuInput
    }, 
    'deleteById': {
        readonly ids: ReadonlyArray<number>
    }
}
