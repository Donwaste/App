import React from "react";
import { useEffect, useState } from "react";
import TextField from "./textField";
import { validator } from "../utils/validator";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validatorConfig = {
    email: {
      isRequired: { message: "Email обязателен для заполнения" },
      isEmail: { message: "Email должен быть корректным" },
    },
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" },
      isCapital: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одну цифру",
      },
      min: {
        message: "Пароль должен содержать хотя бы 8 символов",
        value: 8,
      },
    },
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-3">Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Электронная почта"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextField
              label="Пароль"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            <button
              className="btn btn-primary w-100 mx-auto"
              type="submit"
              disabled={Object.keys(errors).length > 0}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
