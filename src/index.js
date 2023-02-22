import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

const element = document.getElementById('root');
const forte = <h1> <strong>Hello World! I'm using JSX</strong></h1>;

ReactDOM.render(
  <div>
    { forte }
  </div>, 
  element
  );