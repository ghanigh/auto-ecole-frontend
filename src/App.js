import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddStagiaire from './components/AddStagiaire';
import ListStagiaires from './components/ListStagiaires';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddStagiaire />} />
          <Route path="/list" element={<ListStagiaires />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
