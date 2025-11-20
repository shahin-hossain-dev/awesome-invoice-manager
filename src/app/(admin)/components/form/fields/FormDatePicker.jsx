import React from "react";
import { Form, DatePicker } from "antd";
import dayjs from "dayjs";

const FormDatePicker = React.forwardRef(
  (
    {
      label = "",
      name,
      value,
      onChange,
      onBlur,
      placeholder = "Select date",
      disabled = false,
      format = "YYYY-MM-DD",
      validateStatus,
      help,
      className = "",
      defaultValue = "",
      picker = "date", // "date", "month", "year", etc.
      ...rest
    },
    ref
  ) => {
    // AntD DatePicker expects a dayjs object as value
    const selectedValue = value ? dayjs(value) : null;

    const handleChange = (date, dateString) => {
      onChange?.(dateString); // send string to RHF
    };

    return (
      <Form.Item
        label={label}
        validateStatus={validateStatus}
        help={help}
        className={`!w-full !mb-2 ${className}`}
      >
        <DatePicker
          ref={ref}
          name={name}
          //   defaultValue={dayjs("2019/03/09", format)}
          value={selectedValue}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          format={format}
          picker={picker}
          className="!w-full"
          {...rest}
        />
      </Form.Item>
    );
  }
);

export default FormDatePicker;
