import React, {useState} from 'react';
import DisplayComponent from '../components/DisplayComponent';
import BtnComponent from '../components/BtnComponent';


const timeInit = {ms:0, s:0, m:0, h:0};
export const Countdown = () => {
  const [time, setTime] = useState(timeInit);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  
  const [userEntry, setUserEntry] = useState(timeInit);

  
  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  const start = () => {
    setTime(userEntry);
    updatedS = userEntry.s;
    updatedM = userEntry.m;
    updatedH = userEntry.h;
    resume()
  };

  const resume = () => {
    setStatus(1);
    setInterv(setInterval(run, 1000));
  }

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
    setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
    const reset = () => {
      clearInterval(interv);
      setStatus(0);
      setTime(userEntry);
  };

  
  return (
      <div className="clock-holder">
         <div className="stopwatch">
            {(status === 0)?
                <div>
                <input type="text" placeholder="hours" 
                onChange={(event) => {
                    setUserEntry({...userEntry, h: event.target.value});
                    }} />
                <input type="text" placeholder="minutes" 
                onChange={(event) => {
                    setUserEntry({...userEntry, m: event.target.value});
                    }} />
                <input type="text" placeholder="seconds" 
                onChange={(event) => {
                    setUserEntry({...userEntry, s: event.target.value});
                    }} />
                </div>:
                <DisplayComponent time={time}/>
            }
           <BtnComponent resume={resume} status={status} stop={stop} reset={reset} start={start}/>
        </div>

    </div>
  );
};

