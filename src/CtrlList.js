import React, {Fragment} from "react"
import Ctrl from "./DraggableCtrl"

const CtrlList = () => (
  <Fragment>
    <Ctrl label="Input" type="input"/>
    <Ctrl label="Select" type="select"/>
  </Fragment>
)



export default CtrlList