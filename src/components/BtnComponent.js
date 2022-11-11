import React from 'react';


function BtnComponent(props) {
  return (
    <div>
        {(props.status === 0)?
          <button className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}><b>Start</b></button>: ""
        }
        {(props.status === 1)?
          <div>
              <button className="stopwatch-btn stopwatch-btn-red"
              onClick={props.stop}><b>Stop</b></button>
              <button className="stopwatch-btn stopwatch-btn-yel"
              onClick={props.reset}><b>Reset</b></button>
          </div>: ""
        }
        {(props.status === 2)?
          <div>
              <button className="stopwatch-btn stopwatch-btn-red"
              onClick={props.start}><b>Resume</b></button>
              <button className="stopwatch-btn stopwatch-btn-yel"
              onClick={props.reset}><b>Reset</b></button>
          </div>: ""
        }
    </div>
  );
}

export default BtnComponent;