import { Form, Input } from "antd";
import React from "react";

const FormItem = ({
  label = "",
  name = "",
  rules,
  required = false,
  message = "",
  className = "",
  inputClassName = "",
  onChange,
  placeholder = "",
  size = "",
  disabled = false,
  readOnly = false,
  value = "",
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: required, message: message, ...rules }]}
      className={`!w-full ${className} `}
    >
      <Input
        name={name}
        size={size}
        className={`!w-full ${inputClassName}`}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
      />
    </Form.Item>
  );
};

export default FormItem;
