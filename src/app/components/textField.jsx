import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const TextField = ({ label, type = "text", name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState();
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="mb-4 form-group text-start">
      <label htmlFor={name}>{label}</label>
      <div className="input-group ">
        <input
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          className={getInputClasses()}
        />
        {type === "password" && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <i className="bi bi-eye-slash"></i>
            ) : (
              <i className="bi bi-eye"></i>
            )}
          </button>
        )}
      </div>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
export default TextField;
