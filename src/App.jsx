import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({ buttonLabel, onClick }) {
  return (
    <button className="Button" onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");

  const fullName = "JEIRUS KAHLIL CRUZ";
  const section = "WMD-3A"; 
  const subjectCode = "C-PCIT9";

  const num1Handler = (e) => { e.preventDefault(); setDisp("Being On Time"); };
  const num2Handler = (e) => { e.preventDefault(); setDisp("Making An Effort"); };
  const num3Handler = (e) => { e.preventDefault(); setDisp("Being High Energy"); };
  const num4Handler = (e) => { e.preventDefault(); setDisp("Having A Positive Attitude"); };
  const num5Handler = (e) => { e.preventDefault(); setDisp("Being Passionate"); };
  const num6Handler = (e) => { e.preventDefault(); setDisp("Using Good Body Language"); };
  const num7Handler = (e) => { e.preventDefault(); setDisp("Being Coachable"); };
  const num8Handler = (e) => { e.preventDefault(); setDisp("Doing A Little Extra"); };
  const num9Handler = (e) => { e.preventDefault(); setDisp("Being Prepared"); };
  const num0Handler = (e) => { e.preventDefault(); setDisp("Having A Strong Work Ethic"); };

  const nameplateButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp(fullName);
  };

  const subjectButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp(subjectCode);
  };

  return (
    <div className="App">
      <div className="Calculator">
        <div className="Header">
          Jeirus Kahlil Cruz - WMD3A
        </div>
        
        <CalcDisplay dispValue={disp} />
        
        <div className="Keypad">

          <CalcButton buttonLabel="7" onClick={num7Handler} />
          <CalcButton buttonLabel="8" onClick={num8Handler} />
          <CalcButton buttonLabel="9" onClick={num9Handler} />
          <CalcButton buttonLabel="4" onClick={num4Handler} />

          <CalcButton buttonLabel="5" onClick={num5Handler} />
          <CalcButton buttonLabel="6" onClick={num6Handler} />
          <CalcButton buttonLabel="1" onClick={num1Handler} />
          <CalcButton buttonLabel="2" onClick={num2Handler} />

          <CalcButton buttonLabel="3" onClick={num3Handler} />
          <CalcButton buttonLabel="NAME" onClick={nameplateButtonClickHandler} />
          <CalcButton buttonLabel="0" onClick={num0Handler} />
          <CalcButton buttonLabel="SUBJ" onClick={subjectButtonClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;