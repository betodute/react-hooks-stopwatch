import React, { useState, useRef } from 'react';

export const Stopwatch = () => {
  const [timePassedInSeconds, setTimePassed] = useState(0);
  const timer = useRef(null);

  const start = () => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setTimePassed((timePassedInSeconds) => timePassedInSeconds + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  const reset = () => {
    stop();
    setTimePassed(0);
  };

  return (
    <div>
      <h2 className="stopwatch-headline mt-4">Stopwatch</h2>
      <h2 className="border py-4 rounded my-3 mx-auto text-center" style={{ maxWidth: '300px' }}>
        {timePassedInSeconds} s
      </h2>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary mr-2" onClick={start}>
          start
        </button>
        <button className="btn btn-outline-danger mr-2" onClick={stop}>
          stop
        </button>
        <button className="btn btn-outline-warning" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};
