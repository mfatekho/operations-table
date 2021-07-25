import {IOperationItem} from '../models/operations';
import { useEffect, useState} from 'react';
import axios from 'axios';

export interface IOperationListHook {
    operations: IOperationItem[],
    isLoading: boolean,
    error: string | null,
    addOperation: ((name: string) => void)
}
const hostAddr = 'http://127.0.0.1:3001';

export const useOperationsList = (): IOperationListHook => {
    const [operations, setOperations] = useState<IOperationItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const eventSource = new EventSource(`${hostAddr}/operations/sse`);
        eventSource.onmessage = ({ data }) => {
            const datta = JSON.parse(data);
            setOperations(datta.operations);
        }
        eventSource.onerror = (() => {
            setError('Error on connecting server');
        })
    }, []);

    const addOperation = async (name: string) => {
        setIsLoading(true);
        try {
            await axios.post(`${hostAddr}/operations`, {name})
        }
        catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }

    return {operations, isLoading, error, addOperation};
}
