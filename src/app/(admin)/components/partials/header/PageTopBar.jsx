import React from "react";
import Button from "../../ui/Button";
import { FaPlus } from "react-icons/fa";
import { Input } from "antd";
import { FiSearch } from "react-icons/fi";
const PageTopBar = ({
  buttonTitle,
  onChange,
  onClick,
  setIsCreate,
  setIsEdit,
  setIsPreview,
}) => {
  return (
    <div className="md:flex justify-center md:justify-between items-center space-y-4 md:space-y-0 py-3 md:py-6 lg:py-8">
      <div className="flex justify-center md:justify-start">
        {buttonTitle && (
          <Button
            icon={<FaPlus />}
            size="large"
            onClick={() => {
              onClick();
              if (setIsPreview) setIsPreview(false);
              if (setIsEdit) setIsEdit(false);
              if (setIsCreate) setIsCreate(true);
            }}
          >
            {buttonTitle}
          </Button>
        )}
      </div>
      <div>
        <form>
          <Input
            addonAfter={<FiSearch />}
            placeholder="Search..."
            variant="outlined"
            size="large"
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};

export default PageTopBar;
