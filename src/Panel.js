import React from "react"

import "./Panel.css"

const Panel = ({header, children, style}) => (
  <div className="panel" style={style}>
    <div className="header">{header}</div>
    {children}
  </div>
)

export default Panel