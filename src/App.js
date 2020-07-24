import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const name = 'Oscar Aceves';
  const calc = 4*2;

  return (
    <div className="App-header">
        <Header name={name} lastname='Aceves' calc={calc}/>
    </div>
  );
}

export default App;
