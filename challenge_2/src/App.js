import * as React from "react";
import { Counter } from "./components/Counter/Counter";
import { Buttons } from "./components/Buttons/Buttons";
import './App.css';

const callBackList = [() => console.log('Empezar'),() => console.log('Parar'),() => console.log('Resetear')];

const App = () => {
  return (
    <div className="App">
      <Counter />
      <Buttons callBackList={callBackList}/>
    </div>
  );
}

export default App;
