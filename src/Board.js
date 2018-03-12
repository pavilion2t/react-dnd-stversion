import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Knight from './Knight'
import Square from './Square'
import { moveKnight } from './Game'

export default class Board extends Component {

  handleSquareClick(toX, toY){
    moveKnight(toX, toY)
  }
  
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ?
      <Knight /> : null;


    return (
      <div key={i}
           style={{width: '30px', height: '30px'}}
           onClick={() => this.handleSquareClick(x,y)}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    )
  }


  render(){
    const squares = [];
    for (let i = 0; i < 64; i++){
      squares.push(this.renderSquare(i));
    }
    return (
      <div style={{width: '240px',height: '240px',display:'flex',flexWrap:'wrap'}}>
        {squares}
      </div>
    )
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};
