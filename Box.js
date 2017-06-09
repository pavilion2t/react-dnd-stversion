
import React, { Component} from 'react';
import { DragSource } from 'react-dnd';

//这里表示拖放源的样式
const styles = {
  backgroundColor: 'white',
  cursor: 'move',
  color:"#666"
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview:connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}
class Box extends Component{
  componentDidMount () {

      const img = new Image();
      img.onload = () => this.props.connectDragPreview(img);
      img.src = require("../../img/dpImg.png")
  }
  
  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <p style={styles}>{this.props.name}</p>,
      )
    );
  }
}
export default DragSource("box", boxSource, collect)(Box);

```
