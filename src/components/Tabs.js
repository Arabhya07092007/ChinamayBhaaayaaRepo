// Tabs.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  return (
    <div className="tabs-container">
      <NavLink to="/tab1" activeClassName="active-tab">
        Home
      </NavLink>
      <NavLink to="/tab2" activeClassName="active-tab">
        Current Personels
      </NavLink>
      <NavLink to="/tab3" activeClassName="active-tab">
        Lost & Found
      </NavLink>
      <NavLink to="/tab4" activeClassName="active-tab">
        My Parking Profile
      </NavLink>
      <NavLink to="/tab5" activeClassName="active-tab">
        Helpline & Support
      </NavLink>
    </div>
  );
};

export default Tabs;
