import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './components/Header/Header';
import { FirstView } from './pages/HomePage/FirstView/FirstView';

function App() {
  return (
    <div>
      <Header/>
      <FirstView/>
      <HomePage/>
    </div>
  );
}

export default App;
