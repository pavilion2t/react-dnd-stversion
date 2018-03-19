import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Knight from './Knight'
import Square from './Square'
import { canMoveKnight, moveKnight } from './Game'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'
class Board extends Component {

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i}
           style={{width: '30px', height: '30px'}}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x,y)}
        </BoardSquare>
      </div>
    )
  }

renderPiece(x,y){
  const [knightX, knightY] = this.props.knightPosition
  if (x === knightX && y === knightY){
    return <Knight />
  }
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

export default DragDropContext(HTML5Backend)(Board)
