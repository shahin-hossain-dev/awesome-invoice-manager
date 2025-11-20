import { Select as AntSelect } from "antd";

export const Select = ({
  label,
  mode = "basic",
  onChange,
  options = [],
  ...props
}) => {
  return (
    <div className="mb-2">
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

export const SearchSelect = ({
  placeholder = "Select one",
  onChange,
  onSearch,
  options = [],
  label,
  ...props
}) => {
  return (
    <div className="mb-2">
      {label && <label>{label}</label>}
      <Select
        showSearch
        placeholder={placeholder}
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        options={
          options
          //   [
          //   {
          //     value: "jack",
          //     label: "Jack",
          //   },
          //   {
          //     value: "lucy",
          //     label: "Lucy",
          //   },
          //   {
          //     value: "tom",
          //     label: "Tom",
          //   },
          // ]
        }
        {...props}
      />
    </div>
  );
};
