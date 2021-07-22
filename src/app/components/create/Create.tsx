import React, {Dispatch, SetStateAction} from 'react'

import Button from '@material-ui/core/Button';


import {IOperationItem} from '../../models/operations';

import './Create.css'
import {CreateDialog} from '../dialog';


function Create(props: { operations: IOperationItem[], setOperations: Dispatch<SetStateAction<IOperationItem[]>> }) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <div className="create">
            <Button variant="outlined" color="primary"
                    onClick={handleClickOpen}>
                Create
            </Button>
            <CreateDialog open={open} setOpen={setOpen} operations={props.operations}
                          setOperations={props.setOperations}/>
        </div>
    )
}

export {Create}
