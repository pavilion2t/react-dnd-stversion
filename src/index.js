import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Board from './Board'
import Knight from './Knight'

ReactDOM.render(
  <Board knightPosition={[0,0]}/>,
  // <App/>,
  document.getElementById('root'));
registerServiceWorker();
