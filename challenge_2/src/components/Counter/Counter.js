import * as React from "react";
import './Counter.css';
const confetti = window.confetti;


export const Counter = () => {
  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if ( counter === 0) confetti.start();

  return (
    <h1>{counter}</h1>
  );
}

