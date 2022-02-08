import React from "react";
import PropTypes from "prop-types";

import styles from "./input.module.scss";

const InputField = ({ type, value, placeholder, onChange, className }) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className = {className}
      autoFocus
    />
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

InputField.defaultProps = {
  value: "",
  className: "",
  type: "text",
  placeholder: "",
  onChange: () => {},
  error: "",
};
export default InputField;
