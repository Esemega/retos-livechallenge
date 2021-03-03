import {useState, useRef} from "react";
import { Button } from "../Button/Button";
import './App.css';

const confetti = window.confetti;
const startingValue = 5;

const App = () => {
  const [countdown, setCountdown] = useState(startingValue);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  const start = () => {
    setIsActive(true);
    countRef.current = countdown > 0 && setInterval(() => setCountdown(countdown => --countdown), 1000);
  }

  const pause = () => {
    setIsActive(false);
    clearInterval(countRef.current);
  }

  const reset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setCountdown(startingValue);
    confetti.remove();
  }

  if ( countdown === 0) {
    clearInterval(countRef.current);
    confetti.start();
  }

  const svgStart = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg>;

  const svgPause = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/></svg>

  const svgReset = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"/></svg>

  return (
    <div className="App"> 
      <h1 className='countdown'>{countdown}</h1>
      <div>
        {countdown === 0 ? ''
        : 
        (isActive ? 
        <Button text= {svgPause} callBack={pause} />
        :
        <Button text= {svgStart} callBack={start} />
        )}
        <Button text={svgReset} callBack={reset} />
      </div>
    </div>
  );
}

export default App;
