import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

interface IDeleteProps {
    operationId: number;
    deleteOperation: ((id: number) => void)
}

export function Delete({operationId, deleteOperation}: IDeleteProps) {
    const handleDelete = () => {
        deleteOperation(operationId);
    }

    return (
        <DeleteIcon onClick={handleDelete}/>
    )
}
