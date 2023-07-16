
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';

import Register from './components/Register/Register';
function App() {
  return (
    <Router>
    <div className='app-container'>

          <Routes>
            <Route path ="/" element={<Login />}/> 
            <Route path ="/home" element={<Register />}/> 
          </Routes>            

      </div>
    </Router>
  );
}

export default App;
