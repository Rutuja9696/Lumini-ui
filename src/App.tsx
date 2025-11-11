
import React from 'react';
import './App.css';
import { ChartCard } from './components/cards';
import UserMetricsTable from './UserMetrics/UserMetricsTable'

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <ChartCard />
      <div className="container--table"><UserMetricsTable /></div>
    </div>
  );
};

export default App
