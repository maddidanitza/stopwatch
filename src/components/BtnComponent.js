import React from 'react';


function BtnComponent(props) {
  return (
    <div>
      <button className="stopwatch-btn stopwatch-btn-gre"
      onClick={props.start}><b>Start</b></button>
    </div>
  );
}

export default BtnComponent;