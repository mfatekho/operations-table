import React, {Dispatch, SetStateAction} from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


interface ICreateDialogProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    addOperation: ((name: string) => void),
}


export function CreateDialog(props: ICreateDialogProps) {
    const [operationName, setOperationName] = React.useState('');


    const handleCreate = () => {
        props.addOperation(operationName);
        setOperationName('');
        props.setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOperationName(event.target.value);
    };

    const handleClose = () => {
        props.setOpen(false)
    }

    return (
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create Operation</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter the name of operation
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Operation name"
                    value={operationName}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleCreate} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}
