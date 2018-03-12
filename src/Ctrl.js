import React from "react"
import cs from "classnames"
import "./Ctrl.css"
import { CTRL } from "./DraggableTypes"
import { DropTarget, DragSource } from "react-dnd"
import flow from "lodash/flow"
import { findDOMNode } from "react-dom";

const renderCtrl = (type) => {
  switch(type) {
    case "input":
      return <input/>
    case "select":
      return (
        <select>
          <option value="a">A</option>
          <option value="b">B</option>
        </select>
      )
    default:
      return null
  }
}

class Ctrl extends React.Component {
  render() {
    const {ctrl, onSelect, selected, connectDropTarget, connectDragSource, isDragging} = this.props
    console.log(isDragging)
    const { type, label } = ctrl
    return flow(connectDropTarget, connectDragSource)(
      <div className={cs("ctrl", {selected, dragging: true})} onClick={() => onSelect(ctrl)}>
        <div className="label">{label||type.toUpperCase()}</div>
        {renderCtrl(type)}
      </div>
    )
  }
}

const dropSpec = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index

    if ( dragIndex === undefined) {
      return
    }
    
    const hoverIndex = props.index

    if ( dragIndex === hoverIndex ) {
      return
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    const clientOffset  = monitor.getClientOffset()

    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    props.move(dragIndex, hoverIndex)

    monitor.getItem().index = hoverIndex
  }
}

const dropCollect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
})

const dragSpec = {
  beginDrag({ctrl, index}) {
    return {
      ctrl,
      index,
    }
  },
  isDragging(props, monitor){
    console.log("isDragging", monitor.getItem().ctrl, props.ctrl, props.index, monitor.getItem().ctrl.id === props.ctrl.id)
    return monitor.getItem().ctrl.id === props.ctrl.id
  }
}

const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

export default flow(
  DropTarget(CTRL, dropSpec, dropCollect),
  DragSource(CTRL, dragSpec, dragCollect),
)(Ctrl)