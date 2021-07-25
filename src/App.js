import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';
import Interval from './Components/Interval';
import Loading from './Components/Loading/Loading'

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [intTime, setIntTime] = useState([]);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [intstatus, setIntStatus] = useState(0);
  let res=[];

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setIntTime([])
    setTime({ms:0, s:0, m:0, h:0})
  };
  const resume = () => start();
const interval=()=>{
  setIntStatus(1)
  setIntTime([{...time}])
  setIntTime([...intTime,{...time}])
  console.log(intTime);
}
  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
               <BtnComponent status={status} interval={interval} resume={resume} reset={reset} stop={stop} start={start}/>
               <Interval intstatus={intstatus} intTime={intTime} res={res} time={time}/>
          </div>
     </div>
     <Loading/>
    </div>
  );
}

export default App;
