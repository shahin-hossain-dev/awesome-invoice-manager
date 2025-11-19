import { useRef } from "react";
import FormDiv from "../../products/_components/FormDiv";
import Image from "next/image";
import FormItem from "../../components/ui/FormItem";
import FormInnerDiv from "../../components/partials/form/FormInnderDiv";
import { DatePicker, Form } from "antd";
import InvoiceItems from "./InvoiceItems";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import InvoiceAction from "./InvoiceAction";
import InvoicePreview from "./InvoicePreview";
import { useReactToPrint } from "react-to-print";

const CreateInvoice = ({ isCreate }) => {
  return (
    <div>
      <Form
        layout="vertical"
        initialValues={{ due_amount: "10000", invoice_id: "#1IDF2D3" }}
      >
        <FormDiv>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-main-background rounded-2xl p-4">
            <div>
              <Image
                src={"/images/icons/logo.png"}
                width={50}
                height={50}
                alt="logo"
                className="w-[50px] h-[50px]"
              />
              <FormInnerDiv title={"Bill From"}>
                <FormItem
                  placeholder="Company Name"
                  name="company_name"
                  className="!mb-2"
                />
                <FormItem
                  placeholder="Company Address"
                  name="company_address"
                  className="!mb-2"
                />
              </FormInnerDiv>
            </div>
            <div>
              <FormInnerDiv title={"Bill To"}>
                <FormItem
                  placeholder="Billing Name"
                  name="billing_name"
                  className="!mb-2"
                />
                <FormItem
                  placeholder="Billing Address"
                  name="billing_address"
                  className="!mb-2"
                />
                <FormItem
                  placeholder="Billing Phone"
                  name="billing_phone"
                  className="!mb-2"
                />
              </FormInnerDiv>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <FormItem
              label="Invoice Id"
              placeholder="Company Name"
              name="invoice_id"
              className="!mb-2"
            />

            <Form.Item label="Issued Date">
              <DatePicker placeholder="Issued Date" />
            </Form.Item>
            <Form.Item label="Due Date">
              <DatePicker placeholder="Due Date" />
            </Form.Item>

            <FormItem
              label="Due Amount"
              placeholder="Company Name"
              name="due_amount"
              className="!mb-2"
              readOnly={true}
            />
          </div>

          <InvoiceItems />

          <div className="flex justify-end">
            <div className="space-y-2">
              <div className="grid grid-cols-2 place-items-center">
                <span className="text-base">Sub Total: </span>
                <Input readOnly={true} value={`৳ 2000`} variant="filled" />
              </div>
              <div className="grid grid-cols-2 place-items-center">
                <span className="text-base">Discount: </span>
                <Input readOnly={true} value={`৳ 20`} variant="filled" />
              </div>
              <div className="grid grid-cols-2 place-items-center">
                <span className="text-base">Coupon: </span>
                <Input readOnly={true} variant="filled" />
              </div>
              <div className="grid grid-cols-2 place-items-center">
                <span className="text-base">Total: </span>
                <Input readOnly={true} value={"৳ 220"} variant="filled" />
              </div>
            </div>
          </div>
        </FormDiv>
      </Form>
    </div>
  );
};

export default CreateInvoice;
