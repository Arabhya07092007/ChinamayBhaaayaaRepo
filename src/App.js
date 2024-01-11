import React from 'react';
import CustomNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Dashboard />
    </div>
  );
}

export default App;
