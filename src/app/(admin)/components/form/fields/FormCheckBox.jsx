import React from "react";
import { Form, Checkbox } from "antd";

/**
 * FormCheckbox
 * A reusable Ant Design Checkbox wrapped in Form.Item
 * Works with React Hook Form via Controller
 */
const FormCheckbox = React.forwardRef(
  (
    {
      label = "",
      name,
      value = false,
      onChange,
      onBlur,
      disabled = false,
      validateStatus,
      help,
      className = "",
      ...rest
    },
    ref
  ) => {
    const handleChange = (e) => {
      onChange?.(e.target.checked); // RHF expects boolean value
    };

    return (
      <Form.Item
        // label={label}
        valuePropName="checked" // important for Checkbox
        validateStatus={validateStatus}
        help={help}
        className={`!w-full ${className}`}
      >
        <Checkbox
          ref={ref}
          name={name}
          checked={value}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disabled}
          {...rest}
        >
          {label} {/* optional inline label */}
        </Checkbox>
      </Form.Item>
    );
  }
);

export default FormCheckbox;
