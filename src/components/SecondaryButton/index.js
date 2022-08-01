import React from "react";
import PrimaryButton from "../PrimaryButton";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

class SecondaryButton extends PrimaryButton {
  render() {
    return (
      <div className="SecondaryButton">
        {this.renderButton()}
        <ArrowForwardRoundedIcon />
      </div>
    );
  }
}

export default SecondaryButton;
