export type DeptDto = {
    'DeptService/TREE_DEPT': {
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
         * 描述
         */
        readonly description?: string | undefined;
        /**
         * 子部门
         */
        readonly children?: ReadonlyArray<DeptDto['DeptService/TREE_DEPT']> | undefined;
    }
}
