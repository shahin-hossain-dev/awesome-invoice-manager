import React from "react";
import Button from "../../components/ui/Button";
import FormDiv from "../../products/_components/FormDiv";
import { FaRegEye } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

const InvoiceAction = ({ handlePrint }) => {
  return (
    <FormDiv className="flex flex-col gap-2">
      <div>
        <Button size="large" className="w-full" icon={<FaRegEye />}>
          Preview
        </Button>
      </div>
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
        >
          Print
        </Button>
      </div>
    </FormDiv>
  );
};

export default InvoiceAction;
