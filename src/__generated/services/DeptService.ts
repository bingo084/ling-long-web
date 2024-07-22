import type {Executor} from '../';
import type {DeptDto} from '../model/dto/';
import type {DeptInput} from '../model/static/';

export class DeptService {
    
    constructor(private executor: Executor) {}
    
    /**
     * 删除
     */
    readonly deleteById: (options: DeptServiceOptions['deleteById']) => Promise<
        void
    > = async(options) => {
        let _uri = '/system/depts/';
        _uri += encodeURIComponent(options.ids.join(','));
        return (await this.executor({uri: _uri, method: 'DELETE'})) as Promise<void>;
    }
    
    /**
     * 查询树
     */
    readonly findTree: () => Promise<
        ReadonlyArray<DeptDto['DeptService/TREE_DEPT']>
    > = async() => {
        let _uri = '/system/depts';
        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<ReadonlyArray<DeptDto['DeptService/TREE_DEPT']>>;
    }
    
    /**
     * 保存
     */
    readonly save: (options: DeptServiceOptions['save']) => Promise<
        number
    > = async(options) => {
        let _uri = '/system/depts';
        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<number>;
    }
}

export type DeptServiceOptions = {
    'findTree': {}, 
    'save': {
        readonly body: DeptInput
    }, 
    'deleteById': {
        readonly ids: ReadonlyArray<number>
    }
}
