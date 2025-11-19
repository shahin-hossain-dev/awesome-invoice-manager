import React from "react";
import { Input as AntInput } from "antd";

const Input = ({
  label,
  placeholder,
  onChange,
  value,
  name,
  type,
  ...props
}) => {
  return (
    <div>
      {label && (
        <div className="mb-2.5">
          <label className=" font-semibold mb-2 ">{label}</label>
        </div>
      )}
      <AntInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
        placeholder={placeholder}
        className="!text-base !mb-0"
      />
    </div>
  );
};

export default Input;
