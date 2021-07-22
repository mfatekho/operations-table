import React from 'react';
import './App.css';
import {Create, OperationsTable} from "./app/components";
import {useOperationsList} from "./app/hooks";

function App() {
    const [operations, setOperations] = useOperationsList();

    return (
        <div className="App">
            <header className="App-header">Simple operations table</header>
            <div className="content">
                <Create operations={operations} setOperations={setOperations}/>
                <OperationsTable operations={operations}/>
            </div>
        </div>
    );
}

export default App;
