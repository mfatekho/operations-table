import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {IOperationItem} from "../../models/operations";
import {IOperationListHook} from '../../hooks/useOperationsList';
import {makeStyles} from '@material-ui/core';
import {Delete} from '../delete';
import {StatusNames} from '../../models/status';

interface IOperationsTableProps extends Pick<IOperationListHook, 'operations' | 'deleteOperation'> {
}

const useStyles = makeStyles({
    table: {
        minWidth: 600,
        display: 'flex',
        alignSelf: 'center'
    },
    tableHeader: {
        backgroundColor: '#D3D3D3',
    }
});


export function OperationsTable({operations, deleteOperation}: IOperationsTableProps) {
    const classes = useStyles();
    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead className={classes.tableHeader}>
                    <TableRow>
                        <TableCell>Operations</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {operations.map((element: IOperationItem) => (
                        <TableRow key={element.id}>
                            <TableCell component="th" scope="row">
                                {element.name}
                            </TableCell>
                            <TableCell align="right">{element.status}</TableCell>
                            <TableCell align="right">
                                {element.status === StatusNames.RUNNING ? ('N/A') :
                                    <Delete operationId={element.id} deleteOperation={deleteOperation}/>}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
