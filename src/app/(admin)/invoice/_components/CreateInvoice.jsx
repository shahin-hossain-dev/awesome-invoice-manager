import { useRef } from "react";
import FormDiv from "../../products/_components/FormDiv";
import Image from "next/image";
import FormItem from "../../components/form/FormItem";
import FormInnerDiv from "../../components/form/FormInnderDiv";
import { DatePicker, Form, Upload } from "antd";
import InvoiceItems from "./InvoiceItems";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import InvoiceAction from "./InvoiceAction";
import InvoicePreview from "./InvoicePreview";
import { useReactToPrint } from "react-to-print";
import { SearchSelect, Select } from "../../components/form/Select";
import dayjs from "dayjs";
import {
  FormDatePicker,
  FormInput,
  FormSelect,
} from "../../components/form/fields";
import { UploadOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";

const CreateInvoice = ({ isCreate }) => {
  const { register, control, handleSubmit, setValue } = useForm({
    // defaultValues: {
    //   firstName: "",
    //   select: {},
    // },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form
        layout="vertical"
        initialValues={{ due_amount: "10000", invoice_id: "#1IDF2D3" }}
        onFinish={handleSubmit(onSubmit)}
      >
        <FormDiv>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-main-background rounded-2xl p-4">
            <div>
              {/* <Image
                src={"/images/icons/logo.png"}
                width={50}
                height={50}
                alt="logo"
                className="w-[50px] h-[50px]"
              /> */}
              <FormInnerDiv>
                <Controller
                  name="companyName"
                  control={control}
                  rules={{ required: "Company name is required" }}
                  render={({ field, fieldState }) => (
                    <FormSelect
                      showSearch={true}
                      {...field}
                      validateStatus={fieldState.error ? "error" : ""}
                      help={fieldState?.error?.message}
                      label={"Company Name"}
                      placeholder="Company Name"
                      options={[
                        { value: "Apply", label: "Apply" },
                        { value: "Dpply", label: "Dpply" },
                      ]}
                    />
                  )}
                />
                {/* Customer name */}
                <Controller
                  name="customerName"
                  control={control}
                  rules={{ required: "Customer name is required" }}
                  render={({ field, fieldState }) => (
                    <FormSelect
                      showSearch={true}
                      {...field}
                      label={"Customer Name"}
                      placeholder="Customer Name"
                      validateStatus={fieldState?.error ? "error" : ""}
                      help={fieldState?.error?.message}
                      options={[
                        { value: "Apply", label: "Apply" },
                        { value: "Dpply", label: "Dpply" },
                      ]}
                    />
                  )}
                />
                {/*  reference */}
                <Controller
                  name="reference"
                  control={control}
                  // rules={{ required: "Customer name is required" }}
                  render={({ field, fieldState }) => (
                    <FormInput
                      {...field}
                      label={"Reference"}
                      placeholder="Reference"
                      // validateStatus={fieldState?.error ? "error" : ""}
                      // help={fieldState?.error?.message}
                      options={[
                        { value: "Apply", label: "Apply" },
                        { value: "Dpply", label: "Dpply" },
                      ]}
                    />
                  )}
                />

                {/* <SearchSelect
                  label={"Customer Name"}
                  placeholder="Customer Name"
                  options={[
                    { value: "1", label: "Apply" },
                    { value: "2", label: "Dpply" },
                  ]}
                /> */}

                {/* <FormItem
                  label="Reference"
                  placeholder="Company Address"
                  name="company_address"
                  className="!mb-2"
                /> */}
              </FormInnerDiv>
            </div>
            <div>
              <FormInnerDiv>
                <Controller
                  name="status"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormDatePicker {...field} label={"Date"} value={dayjs()} />
                  )}
                />
                <Controller
                  name="status"
                  control={control}
                  rules={{ required: "Status is required" }}
                  render={({ field, fieldState }) => (
                    <FormSelect
                      {...field}
                      label={"Status"}
                      placeholder="Invoice Status"
                      validateStatus={fieldState?.error ? "error" : ""}
                      help={fieldState?.error?.message}
                      options={[
                        { value: "pending", label: "Pending" },
                        { value: "paid", label: "Paid" },
                        { value: "cancel", label: "Cancel" },
                      ]}
                    />
                  )}
                />
                <Controller
                  name="file"
                  control={control}
                  rules={{ required: "File is required" }}
                  render={({ field, fieldState }) => {
                    const { value, onChange } = field;

                    const handleChange = (info) => {
                      const latestFile = info.fileList.slice(-1);
                      onChange(latestFile);
                    };

                    return (
                      <Form.Item
                        label="Upload QR Code"
                        validateStatus={fieldState.error ? "error" : ""}
                        help={fieldState.error?.message}
                      >
                        <Upload
                          fileList={value || []} // controlled by RHF
                          onChange={handleChange}
                          beforeUpload={() => false} // prevent auto upload
                        >
                          <Button icon={<UploadOutlined />}>Select File</Button>
                        </Upload>
                      </Form.Item>
                    );
                  }}
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
              label="Shipping Fee"
              placeholder="Shipping Fee"
              name="shipping_fee"
              className="!mb-2"
            />
          </div>

          <InvoiceItems setValue={setValue} />

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
          <input type="submit" />
        </FormDiv>
      </Form>
    </div>
  );
};

export default CreateInvoice;
