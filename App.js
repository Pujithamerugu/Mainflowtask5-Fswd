import React from 'react';
import './App.css';
import Calculator from './Calculator';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator App</h1>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
};

export default App;
