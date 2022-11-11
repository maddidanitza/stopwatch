import React, {useState} from 'react';
import DisplayComponent from '../components/DisplayComponent';
import BtnComponent from '../components/BtnComponent';

const timeInit = {ms:0, s:25, m:33, h:1};
export const Countdown = () => {
  const [time, setTime] = useState(timeInit);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };
  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  const run = () => {
    if(updatedM === 0){
      updatedH--;
      updatedM = 60;
    }
    if(updatedS === 0){
      updatedM--;
      updatedS = 60;
    }
    updatedMs = 0;
    updatedS--;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
    const reset = () => {
      clearInterval(interv);
      setStatus(0);
      setTime(timeInit)
  };
  
  return (
      <div className="clock-holder">
         <div className="stopwatch">
           <DisplayComponent time={time}/>
           <BtnComponent status={status} stop={stop} reset={reset} start={start}/>
         </div>
    </div>
  );
};

