import React, {Fragment} from "react"

class PropList extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange({target: { value, name }}) {
    let { selected } = this.props

    selected[name] = value

    this.props.updateCtrl(selected)
  }
  render() {
    const { selected } = this.props
    return (
      selected && (
        <Fragment>
          <div>Type: {selected.type}</div>
          <div>Label: <input name="label" value={selected.label || ""} onChange={this.handleChange}/></div>
        </Fragment>
      )
    )
  }
}

export default PropList