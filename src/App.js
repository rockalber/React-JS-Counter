import React, { useState } from "react";
import style from "./index.module.css";
import Card from "./components/Card";
import Button from "./components/Button";
// import './components/Keyframes.css';

function App() {
  const [Count, setCount] = useState(0);

  const Possitive = () => {
    setCount(Count + 1);
  };

  const Negative = () => {
    setCount(Count - 1);
    if (Count < 0) {
      alert("Value Can't be in negitive");
      setCount(0);
    }
  };

  return (
    <div>
      <h1 className={style.glow}>React JS Counter</h1>
      <Card>
        <div className={style.divb}>
          <h1 className={style.h1}>
            {Count}
          </h1>
        </div>
        <div className={style.flexgap}>
        <div>
          <Button Handler={Negative}>-</Button>
        </div>
        <div>
          <Button Handler={Possitive}>+</Button>
        </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
