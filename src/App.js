import React, {useState} from 'react';
import DisplayComponent from './components/DisplayComponent';
import BtnComponent from './components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  return (
    <div className="main-section">
      <div className="clock-holder">
         <div className="stopwatch">
           <DisplayComponent time={time}/>
           <BtnComponent />
         </div>
      </div>
    </div>
  );
}

export default App;
