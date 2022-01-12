import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

const App: React.FC<AppProps> = (props) => {
  return <div>{props.color}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
