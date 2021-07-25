import React from 'react'

import Button from '@material-ui/core/Button';

import './Create.css'
import {CreateDialog} from '../dialog';
import {IOperationListHook} from '../../hooks/useOperationsList';

interface ICreateProps extends Pick<IOperationListHook, 'addOperation'>{}


function Create({addOperation}: ICreateProps) {
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
            <CreateDialog open={open} setOpen={setOpen} addOperation={addOperation}/>
        </div>
    )
}

export {Create}
