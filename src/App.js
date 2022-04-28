import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <div className='app__header'>
        <Header />
      </div>
        
      
      {/* Body */}
      <div className='app__body'>
        <Sidebar className="app__sidebar" />
        <Feed className="app__feed" />
        <Widgets text="Prévia da inflação é a mais alta para abril em 27 anos"/>
      </div>

    </div>
  );
}

export default App;
