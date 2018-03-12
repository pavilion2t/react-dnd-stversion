import React, { Component } from 'react';
import './App.css';
import Panel from "./Panel"
import CtrlList from "./CtrlList"
import PropList from "./PropList"
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import Form from "./Form"
import insertPosition from "./insertPosition"

class App extends Component {
  constructor(props) {
    super(props)

    this.setSelected = this.setSelected.bind(this)
    this.addCtrl = this.addCtrl.bind(this)
    this.updateCtrl = this.updateCtrl.bind(this)
    this.move = this.move.bind(this)

    this.state = {
      selected: null,
      ctrls: [],
    }
  }
  setSelected(selected) {
    this.setState({selected})
  }
  updateCtrl(ctrl) {
    const { ctrls } = this.state
    
    this.setState({ ctrls })
  }
  addCtrl(ctrl, hover) {
    const { ctrls } = this.state
    if ( ctrl.id ) {
      ctrls.filter(c => c !== ctrl )
    } else {
      ctrl.id = + new Date()
    }
    ctrls.splice(insertPosition(ctrls, hover), 0, ctrl)
    this.setState({ctrls})
  }
  move(dragIndex, hoverIndex) {
    this.setState(({ctrls}) => {
      const dragCtrl = ctrls[dragIndex]
      
      ctrls.splice(dragIndex, 1)
      ctrls.splice(hoverIndex, 0, dragCtrl)
      return {ctrls}
    })
  }
  render() {
    const { selected, ctrls } = this.state
    return (
      <div className="App">
        <Panel header="Controls" style={{width: "10%", background: "#f2f2f2"}}>
          <CtrlList/>
        </Panel>
        <Panel header="Form" style={{flex: 1}}>
          <Form onSelect={this.setSelected} ctrls={ctrls} addCtrl={this.addCtrl} selected={selected} move={this.move}/>
        </Panel>
        <Panel header="Properties" style={{width: "10%", background: "#f2f2f2"}}>
          <PropList selected={selected} updateCtrl={this.updateCtrl}/>
        </Panel>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
