import React from "react"
import { DropTarget } from "react-dnd"
import { CTRL } from "./DraggableTypes"
import cs from "classnames"
import Ctrl from "./Ctrl"
import insertPosition from "./insertPosition"

import "./Form.css"

class Form extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { connectDropTarget, isOver, ctrls, onSelect, selected, addCtrl, isShallowOver } = this.props
    return connectDropTarget(
      <div className={cs("form", {over: isOver})}>
        {ctrls.map((ctrl, index) => (
          <Ctrl
            index={index}
            ctrl={ctrl}
            key={ctrl.id}
            onSelect={onSelect}
            selected={selected === ctrl}
            addCtrl={addCtrl}
            move={this.props.move}
          />
        ))}
      </div>
    )
  }
}

const spec = {
  drop( props, monitor ) {
    if ( monitor.didDrop() === false && monitor.getItem().index === undefined ){
      console.log("drop", props, monitor.getItem())
      props.addCtrl(monitor.getItem().ctrl)
    }
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isShallowOver: monitor.isOver({shallow: true})
})

export default DropTarget(CTRL, spec, collect)(Form)