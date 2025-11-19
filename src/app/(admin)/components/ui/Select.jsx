import { Select as AntSelect } from "antd";

const Select = ({
  label,
  mode = "basic",
  onChange,
  options = [],
  ...props
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <AntSelect
        mode={mode}
        placeholder="Inserted are removed"
        // value={selectedItems}
        onChange={onChange}
        style={{ width: "100%" }}
        options={options}
        {...props}
      />
    </div>
  );
};

export default Select;
