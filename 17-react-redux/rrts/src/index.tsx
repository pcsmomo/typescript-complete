import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

const App: React.FC<AppProps> = (props) => {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter((prevCount) => prevCount + 1);
  };

  const onDecrement = (): void => {
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
