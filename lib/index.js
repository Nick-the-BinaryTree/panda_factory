import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function square(n) {
  return n * n;
}
square("2"); // Error!

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
registerServiceWorker();