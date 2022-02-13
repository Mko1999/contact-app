import React from "react";
import PropTypes from "prop-types";

const InputField = ({ type, value, placeholder, onChange, className }) => {
  return (
    <input
      className={className}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      autoFocus
    />
  );
};

InputField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
