import React from 'react';
import './App.css';
import Header from './components/Header';
import Students from './components/Students';
import { Router } from '@reach/router';
import Nav from './components/Nav';
import Home from './components/Home';
import StudentById from './components/StudentById';

function App() {
  return (
    <main className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <Students path="/students" />
        <StudentById path="/students/:id" />
      </Router>
    </main>
  );
}

export default App;
