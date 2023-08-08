import React from 'react';
import MakeTable from './components/EmployeeTable'; 
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Find from './components/FindEmployee'
import Update from './components/UpdateEmployee'

const App = () => {
  return (
    <div>
      <h1>Employee Management</h1>
      <Router>
        <Routes>
          <Route path="/" element={<MakeTable />} />
          <Route path="/findEmployee" element={<Find />} />
          <Route path="/Update" element={<Update />} />

        </Routes>
      </Router>
    </div>

    

    
  );
};

export default App;
