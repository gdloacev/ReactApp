import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {

  const name = 'Oscar';
  const calc = 2+2;

  return (
    <div className="App-header">
        <Header name={name} lastname='Aceves' calc={calc}/>
    </div>
  );
}

export default App;
