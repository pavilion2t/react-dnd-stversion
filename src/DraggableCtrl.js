import React from "react"
import { DragSource } from "react-dnd"
import "./DraggableCtrl.css"
import { CTRL } from "./DraggableTypes"
import cs from "classnames"

const ctrlSource = {
  beginDrag({type}) {
    return {
      ctrl: {type}
    }
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const DraggableCtrl = ({type, connectDragSource, isDragging }) => connectDragSource(
  <div className={ cs("draggable-ctrl", {dragging: isDragging}) }>{type.toUpperCase()}</div>
)

export default DragSource(CTRL, ctrlSource, collect)(DraggableCtrl)