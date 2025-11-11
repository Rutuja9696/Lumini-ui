
import React from 'react';
import './App.css';
import { ChartCard } from './components/cards';

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <ChartCard />
      <div className="container--table">table goes here</div>
    </div>
  );
};

export default App
