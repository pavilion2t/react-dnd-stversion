import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Board from './Board'
import Knight from './Knight'
import { observe } from './Game'

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition}/>,
  document.getElementById('root')
))
