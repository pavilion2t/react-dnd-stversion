import React, { Component } from 'react'

export default class Square extends Component {
  render(){
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (<div style={{
      backgroundColor: fill,
      color: stroke,
      width: '30px',
      height: '30px'
    }}>
      {this.props.children}
    </div>
    )
  }
}
