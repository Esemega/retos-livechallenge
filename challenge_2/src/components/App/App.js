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
    countRef.current = countdown > 0 && setInterval(() => setCountdown(countdown => countdown - 1), 1000);
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

  return (
    <div className="App">
    <h1 className='countdown'>{countdown}</h1>
      <div>
        {(isActive ? 
        <Button text= 'Pausar' callBack={pause} />
        :
        <Button text= 'Empezar' callBack={start} />
        )}
        <Button text='Resetear' callBack={reset} />
      </div>
    </div>
  );
}

export default App;
