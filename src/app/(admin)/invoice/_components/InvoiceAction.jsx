import React from "react";
import Button from "../../components/ui/Button";
import FormDiv from "../../components/form/FormDiv";
import { FaRegEye } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

const InvoiceAction = ({ handlePrint, isCreate = false }) => {
  return (
    <FormDiv className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <Button
          size="large"
          className="w-full"
          color="default"
          icon={<FiSave />}
        >
          Save
        </Button>
        <Button
          size="large"
          color="default"
          className="w-full"
          icon={<FiEdit />}
          disabled={isCreate}
        >
          Edit
        </Button>
      </div>
      <div>
        <Button
          size="large"
          variant="solid"
          color="cyan"
          className="w-full"
          icon={<FaPrint />}
          onClick={handlePrint}
          disabled={isCreate}
        >
          Print
        </Button>
      </div>
    </FormDiv>
  );
};

export default InvoiceAction;
