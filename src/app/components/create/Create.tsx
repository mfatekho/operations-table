import React from 'react'

import Button from '@material-ui/core/Button';

import {CreateDialog} from '../dialog';
import {IOperationListHook} from '../../hooks/useOperationsList';
import {makeStyles} from '@material-ui/core';

interface ICreateProps extends Pick<IOperationListHook, 'addOperation'>{}

const useStyles = makeStyles({
    createBtn: {
        margin: '20px 0 20px 20px',
        alignSelf: 'flex-end'
    }
});

export function Create({addOperation}: ICreateProps) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <div className={classes.createBtn}>
            <Button variant="outlined" color="primary"
                    onClick={handleClickOpen}>
                Create
            </Button>
            <CreateDialog open={open} setOpen={setOpen} addOperation={addOperation}/>
        </div>
    )
}
