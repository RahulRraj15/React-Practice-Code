import { useEffect, useRef, useState } from "react";

export function ThrottleDemo() {
  const [ms, setMs] = useState(0);

  const [sec, setSec] = useState(0);

  const [min, setMin] = useState(0);

  const [hh, setHh] = useState(0);

  let thread = useRef(null);

  var milliSeconds = 0;
  var seconds = 0;
  var minutes = 0;
  var hours = 0;

  function StartClock() {
    if (ms > 0) {
      milliSeconds = ms;
    } else {
      milliSeconds++;
    }

    setMs((ms) => ms + 1);

    if (milliSeconds === 999) {
      seconds++;

      setSec((seconds) => seconds + 1);

      milliSeconds = 0;
      setMs((milliSeconds) => 0);
    }
    if (seconds === 59) {
      minutes++;
      setMin((minutes) => minutes + 1);
      seconds = 0;
      setSec((sec) => 0);
    }
    if (minutes == 59) {
      setHh((hh) => hh + 1);
      minutes = 0;
      setMin(0);
    }
  }

  function handleStartClick() {
    thread.current = setInterval(StartClock, 1);
  }
  function handleStopClick() {
    clearInterval(thread.current);
  }
  function handleRestartClick() {
    clearInterval(thread.current);
    setMs(0);
    setSec(0);
    setMin(0);
    setHh(0);
  }

  useEffect(() => {}, []);

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center "
      style={{ height: "500px" }}
    >
      <div>
        <h1 className="text-center  text-danger"> Timer </h1>
        <div
          style={{ width: "400px" }}
          className="row p-4 fs-3 border border-3 border-secondary"
        >
          <div className="col" style={{ width: "50px" }}>
            {hh}
          </div>

          <div className="col" style={{ width: "50px" }}>
            :
          </div>

          <div className="col" style={{ width: "50px" }}>
            {min}
          </div>

          <div className="col" style={{ width: "50px" }}>
            :
          </div>

          <div className="col" style={{ width: "50px" }}>
            {sec}
          </div>

          <div className="col" style={{ width: "50px" }}>
            :
          </div>

          <div className="col" style={{ width: "50px" }}>
            {ms}
          </div>
        </div>

        <div className="d-flex justify-content-center  " >
          <button onClick={handleStartClick} className="btn m-3 btn-success">
          Start
        </button>
        <button onClick={handleStopClick} className="btn m-3 btn-danger">
          Stop
        </button>
             <button onClick={handleRestartClick} className="btn m-3 btn-success">
          ReSet
        </button>

        </div>
      </div>
    </div>
  );
}

/*
  function StartClock() {
    if (ms > 0) {
      milliSeconds = ms;
    } else {
      milliSeconds++;
    }

    setMs((milliSeconds) => milliSeconds + 1);

    if (milliSeconds === 9) {
      seconds++;

      setSec((seconds) => seconds+1 );

      milliSeconds = 0;
      setMs((milliSeconds) => 0);
    }
    if (seconds === 60) {
      setMin((minutes) => minutes + 1);
      seconds = 0;
      setSec((sec) => 0);
    }
  }

  function handleStartClick() {
    thread.current = setInterval(StartClock, 1);
  }
  function handleStopClick() {
    clearInterval(thread.current);
    setMs(ms);
  }
  function handleRestartClick() {
    clearInterval(thread.current);
    setMs(0);
    setSec(0);
  }*/
