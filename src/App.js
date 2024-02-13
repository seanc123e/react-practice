import React from 'react';
import Navbar from '../src/components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact component={Home}/>
      </Routes>
      
    </Router>
    </>
    
  );
}

export default App;