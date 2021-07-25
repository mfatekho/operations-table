import {StatusNames} from './status';

export interface IOperationItem {
    id: number;
    name: string;
    status: StatusNames;
}

export interface IOperationsState {
    operations: IOperationItem[],
    isLoading: boolean,
    error?: string | null,
}
