import {IOperationItem} from '../models/operations';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';

function useOperationsList(): [IOperationItem[], Dispatch<SetStateAction<IOperationItem[]>>] {
    const [operations, setOperations] = useState<IOperationItem[]>([])

    useEffect(() => {
        const hostAddr = 'http://127.0.0.1:3001';

        async function fetchOperations() {
            const fullResponse = await fetch(`${hostAddr}/test`);
            const responseJson = await fullResponse.json();
            setOperations(responseJson.data);
        }

        fetchOperations();
    }, []);
    return [operations, setOperations];
}

export {useOperationsList}
