import React, { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1);
  const [text, setText] = useState('sm');
  function increamentCount() {
    setCount(count + factor);
  }
  function decreamentCount() {
    setCount(count - factor);
  }

  function increamentFactor() {
    setFactor(factor + 1);
  }
  function decreamentFactor() {
    setFactor(factor - 1);
  }
  return (
    <div>
      <h1>Counter State {count}</h1>
      <button onClick={increamentCount}> Increament</button>

      <button onClick={decreamentCount}> decreament</button>

      <h1>Factor State {factor}</h1>
      <button onClick={increamentFactor}> Increament</button>

      <button onClick={decreamentFactor}> decreament</button>

      <form>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
        />
      </form>
    </div>
  );
};

export default State;
