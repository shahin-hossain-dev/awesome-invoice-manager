import React from "react";
import { Form, Input, TextArea } from "antd";

/**
 * FormTextArea
 * A reusable Ant Design Input wrapped in Form.Item
 * Works with React Hook Form via Controller
 */
const FormTextArea = React.forwardRef(
  (
    {
      label = "",
      name,
      value,
      onChange,
      onBlur,
      rows = 3,
      placeholder = "",
      size = "middle",
      disabled = false,
      readOnly = false,
      validateStatus, // "error" if field has validation error
      help, // error message or helper text
      className = "",
      inputClassName = "",
      required,
      ...rest
    },
    ref
  ) => {
    return (
      <Form.Item
        label={label}
        validateStatus={validateStatus}
        help={help}
        className={`!w-full !mb-2 ${className}`}
        required={required}
      >
        <Input.TextArea
          rows={rows}
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          size={size}
          disabled={disabled}
          readOnly={readOnly}
          className={`!w-full ${inputClassName}`}
          {...rest}
        />
      </Form.Item>
    );
  }
);

export default FormTextArea;
