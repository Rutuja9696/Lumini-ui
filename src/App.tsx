import React from 'react'
import './App.css'

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <h1 className="header">Welcome to Lumini UI</h1>
      <div className="container--chart">charts goes here</div>
      <div className="container--table">table goes here</div>
    </div>
  );
};

export default App
