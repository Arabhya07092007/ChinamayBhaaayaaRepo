// Dashboard.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tabs from './Tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <div className="sidebar">
          <Tabs />
        </div>
        <div className="content-container">
          <Switch>
            <Route path="/tab1" component={Tab1} />
            <Route path="/tab2" component={Tab2} />
            <Route path="/tab3" component={Tab3} />
            <Route path="/tab4" component={Tab4} />
            <Route path="/tab5" component={Tab5} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
