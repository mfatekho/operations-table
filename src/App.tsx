import React from 'react';
import './App.css';
import {Create, OperationsTable} from './app/components';
import {useOperationsList} from './app/hooks';
import {ThemeProvider, unstable_createMuiStrictModeTheme} from '@material-ui/core/styles';

const theme = unstable_createMuiStrictModeTheme();

function App() {
    const {operations, addOperation, deleteOperation} = useOperationsList();
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">Simple operations table</header>
                <div className="content">
                    <Create addOperation={addOperation}/>
                    {operations?.length ? (
                        <OperationsTable operations={operations} deleteOperation={deleteOperation}/>) : (
                        <span>There is no data yet.</span>)}
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
