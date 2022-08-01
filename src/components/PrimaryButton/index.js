import React from "react";

class PrimaryButton extends React.Component {
  renderButton() {
    return <button>{this.props.text}</button>;
  }

  render() {
    return (
      <div className="PrimaryButton">
        {this.renderButton()}
        <div></div>
      </div>
    );
  }
}

export default PrimaryButton;
