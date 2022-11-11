import React, {useState} from 'react';
import {Stopwatch} from './screens/Stopwatch';
import {Countdown} from './screens/Countdown';
import './App.css';

function App() {
  
  return (
    <div className="main-section">
      <Stopwatch />
      <Countdown />
    </div>
  );
}

export default App;
