
import React from 'react';
import './App.css';
import { ChartCard } from './components/cards';
// import { UserMetricGraphArea } from './UserMetrics/UserMetricGraphArea';
// import { UserMetricRadialChart } from './UserMetrics/UserMetricRadialChart';
import UserMetricsTable from './UserMetrics/UserMetricsTable';
import ExecutiveSummary from './ExecutiveSummary/ExecutiveSummary';

const App = (): React.ReactElement => {
  return (
    <div className="app">
      <div className="container--charts flex justify-between gap-4 mt-4">
        <ChartCard />
        <ExecutiveSummary />
        {/* <UserMetricGraphArea /> */}
        {/* <UserMetricRadialChart /> */}
      </div>
      <div className="container--table"><UserMetricsTable /></div>
    </div>
  );
};

export default App
