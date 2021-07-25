export interface IOperationItem {
    id: number;
    name: string;
    status: string;
}

export interface IOperationsState {
    operations: IOperationItem[],
    isLoading: boolean,
    error?: string | null,
}
