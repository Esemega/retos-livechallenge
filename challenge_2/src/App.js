import * as React from "react";
import './App.css';
const confetti = window.confetti;


const Counter = () => {
  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if ( counter === 0) confetti.start();

  return (
    <div className="container">
      <h1 className="counter">{counter}</h1>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
