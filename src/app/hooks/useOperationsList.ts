import {IOperationItem} from '../models/operations';
import { useEffect, useState} from 'react';
import axios from 'axios';

export interface IOperationListHook {
    operations: IOperationItem[],
    error: string | null,
    addOperation: ((name: string) => void)
    deleteOperation: ((id: number) => void)
}

const hostAddr = `${document.baseURI}api`;

export const useOperationsList = (): IOperationListHook => {
    const [operations, setOperations] = useState<IOperationItem[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const eventSource = new EventSource(`${hostAddr}/operations/sse`);
        eventSource.onmessage = ({ data }) => {
            const parsedData = JSON.parse(data);
            setOperations(parsedData.operations);
        }
        eventSource.onerror = (() => {
            setError('Error on connecting server');
        })
    }, []);

    const addOperation = async (name: string) => {
        try {
            await axios.post(`${hostAddr}/operations`, {name})
        }
        catch (err) {
            setError(err.message);
        }
    }

    const deleteOperation = async (id: number) => {
        try {
            await axios.delete(`${hostAddr}/operations/${id}`)
        }
        catch (err) {
            setError(err.message);
        }
    }

    return {operations, error, addOperation, deleteOperation};
}
