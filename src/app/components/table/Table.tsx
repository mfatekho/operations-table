import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './Table.css'

import {IOperationItem} from "../../models/operations";


function OperationsTable(props: {operations: IOperationItem[]}) {
    return (
        <TableContainer className="operations-table">
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Operations</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.operations.map((element: IOperationItem) => (
                        <TableRow key={element.id}>
                            <TableCell component="th" scope="row">
                                {element.operation}
                            </TableCell>
                            <TableCell align="right">{element.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export {OperationsTable}
