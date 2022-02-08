import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";
import { noop } from "../../utils/noop";

const Button = ({ value, color, onButtonClick, customClass }) => {
  return (
    <button
      style={{
        color: color,
      }}
      className={`${styles.custom_button} ${customClass || ""}`}
      onClick={onButtonClick}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  onButtonClick: PropTypes.func,

  className: PropTypes.string,
};

Button.defaultProps = {
  value: "",
  color: "",

  className: "",
  onButtonClick: noop
};

export default Button;
