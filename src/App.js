import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const name = 'Oscar';
  const calc = 2+2;

  return (
    <div className="App-header">
        <Header name={name} lastname='' calc={calc}/>
    </div>
  );
}

export default App;
