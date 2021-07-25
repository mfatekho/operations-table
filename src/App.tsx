import React, {useEffect} from 'react';
import './App.css';
import {Create, OperationsTable} from './app/components';
import {useOperationsList} from './app/hooks';

function App() {
    const {operations, isLoading, addOperation} = useOperationsList();
    return (
        <div className="App">
            <header className="App-header">Simple operations table</header>
            <div className="content">
                <Create addOperation={addOperation}/>
                {operations?.length ? (<OperationsTable operations={operations}/>) : (<span>There is no data yet.</span>)}
            </div>
        </div>
    );
}

export default App;
