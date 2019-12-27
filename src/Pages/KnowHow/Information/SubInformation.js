import React from "react";

class SubInformation extends React.Component {
  render() {
    return (
      <div className="label_box">
        <div className="label">{this.props.information.label}</div>
        <div className="value">{this.props.information.value}</div>
      </div>
    );
  }
}

export default SubInformation;
