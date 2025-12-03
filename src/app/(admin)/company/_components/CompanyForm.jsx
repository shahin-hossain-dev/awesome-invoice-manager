"use client";
import { Button, Checkbox, Form, Upload } from "antd";
import FormDiv from "../../components/form/FormDiv";
import { Controller, useForm } from "react-hook-form";
import { FormInput } from "../../components/form/fields";
import { UploadOutlined } from "@ant-design/icons";
import { useCreateCompanyMutation } from "@/redux/api/companyApi";
import FormTextArea from "../../components/form/fields/FormTextArea";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

// helper: check if UploadFile array contains a File
const getFileFromUploadValue = (uploadValue) => {
  // uploadValue is expected to be an array (AntD fileList) or undefined
  const item =
    Array.isArray(uploadValue) && uploadValue.length ? uploadValue[0] : null;
  return item?.originFileObj ?? null;
};

// Yup schema
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

const schema = yup.object().shape({
  name: yup.string().required("Company name is required"),
  customerName: yup.string().nullable(),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  postal_code: yup.string().nullable(),
  state: yup.string().nullable(),
  country: yup.string().nullable(),
  bank_account_details: yup.string().nullable(),
  permissions: yup.array().of(yup.string()).nullable(),
  // Logo is optional, validate only if a file exists
  logo: yup
    .mixed()
    .nullable()
    .test("file-type", "Logo must be an image", (value) => {
      if (!value || value.length === 0) return true; // optional
      const file = getFileFromUploadValue(value);
      return file && file.type.startsWith("image/");
    })
    .test(
      "file-size",
      `Logo must be <= ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
      (value) => {
        if (!value || value.length === 0) return true; // optional
        const file = getFileFromUploadValue(value);
        return file && file.size <= MAX_FILE_SIZE;
      }
    ),

  // QR code is optional, same as logo
  qr_code: yup
    .mixed()
    .nullable()
    .test("file-type", "QR code must be an image", (value) => {
      if (!value || value.length === 0) return true; // optional
      const file = getFileFromUploadValue(value);
      return file && file.type.startsWith("image/");
    })
    .test(
      "file-size",
      `QR code must be <= ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
      (value) => {
        if (!value || value.length === 0) return true; // optional
        const file = getFileFromUploadValue(value);
        return file && file.size <= MAX_FILE_SIZE;
      }
    ),
});

const CompanyForm = () => {
  const [createCompany, { data, isLoading }] = useCreateCompanyMutation();

  const { register, control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      customerName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postal_code: "",
      state: "",
      country: "",
      bank_account_details: "",
      permissions: [], // e.g. ["show_name"]
      logo: [], // AntD fileList array
      qr_code: [], // AntD fileList array
    },
  });

  const onSubmit = async (data) => {
    try {
      const companyData = new FormData();

      // get actual File objects (originFileObj)
      const logoFile = getFileFromUploadValue(data.logo);
      const qrFile = getFileFromUploadValue(data.qr_code);

      const showName = data?.permissions[0] === "show_name" ? 1 : 0;
      const showAddress = data?.permissions[1] === "show_address" ? 1 : 0;
      const allowTransfer = data?.permissions[2] === "allow_transfer" ? 1 : 0;

      if (logoFile) companyData.append("logo", logoFile, logoFile.name);
      if (qrFile) companyData.append("qrcode", qrFile, qrFile.name);

      companyData.append("name", data?.name);
      companyData.append("contact_person", data?.customerName);
      companyData.append("email", data?.email);
      companyData.append("phone", data?.phone);
      companyData.append("address", data?.address);
      companyData.append("city", data?.city);
      companyData.append("postal_code", data?.postal_code);
      companyData.append("state", data?.state);
      companyData.append("country", data?.country);
      companyData.append("show_name", showName);
      companyData.append("show_address", showAddress);
      companyData.append("allow_transfer", allowTransfer);
      companyData.append("bank_account_details", data?.bank_account_details);

      const result = await createCompany(companyData).unwrap();
    } catch (error) {
      console.log("Error:", error?.message);
    }

    console.log(result);
  };

  return (
    <div>
      <div>
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit(onSubmit)}
          autoComplete="off"
          layout="vertical"
          size="large"
          className="!w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
            <div className="col-span-3 relative ">
              <FormDiv title={"Product Information"}>
                {/* company logo */}

                {/* QR Code */}
                <div className="flex flex-col lg:flex-row justify-between gap-2">
                  <Controller
                    name="logo"
                    control={control}
                    // rules={{ required: "Logo is required" }}
                    render={({ field, fieldState }) => {
                      const { value, onChange } = field;

                      const handleChange = (info) => {
                        const latestFile = info.fileList.slice(-1);
                        onChange(latestFile);
                      };

                      return (
                        <Form.Item
                          label="Company Logo"
                          validateStatus={fieldState.error ? "error" : ""}
                          help={fieldState.error?.message}
                        >
                          <Upload
                            fileList={value || []} // controlled by RHF
                            onChange={handleChange}
                            beforeUpload={() => false} // prevent auto upload
                          >
                            <Button icon={<UploadOutlined />}>
                              Select File
                            </Button>
                          </Upload>
                        </Form.Item>
                      );
                    }}
                  />
                  <Controller
                    name="qr_code"
                    control={control}
                    // rules={{ required: "File is required" }}
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
                            <Button icon={<UploadOutlined />}>
                              Select File
                            </Button>
                          </Upload>
                        </Form.Item>
                      );
                    }}
                  />
                </div>

                <div className="flex items-center gap-2 lg:gap-4 w-full">
                  {/*  product name */}
                  <Controller
                    name="customerName"
                    control={control}
                    rules={{ required: "Customer name is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"Customer Name"}
                        placeholder="Customer Name"
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      />
                    )}
                  />
                  {/* company name */}
                  <Controller
                    name="company"
                    control={control}
                    rules={{ required: "Company  is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"Company "}
                        placeholder="Company "
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      />
                    )}
                  />
                </div>
                <div className="flex items-center gap-2 lg:gap-4 w-full">
                  {/*  email */}

                  <Controller
                    name="email"
                    control={control}
                    // rules={{ required: "Email is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"Email"}
                        placeholder="Email"
                        // validateStatus={fieldState?.error ? "error" : ""}
                        // help={fieldState?.error?.message}
                      />
                    )}
                  />
                  {/* product code */}
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Phone no. is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"Phone"}
                        placeholder="Phone"
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="address"
                    control={control}
                    // rules={{ required: "Address no. is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"Address"}
                        placeholder="Address"
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      />
                    )}
                  />
                </div>

                <div className="flex items-center gap-2 lg:gap-4 w-full">
                  {/*  city */}

                  <Controller
                    name="city"
                    control={control}
                    // rules={{ required: "Email is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"City"}
                        placeholder="City"
                        // validateStatus={fieldState?.error ? "error" : ""}
                        // help={fieldState?.error?.message}
                      />
                    )}
                  />
                  {/* product code */}
                  <Controller
                    name="postalCode"
                    control={control}
                    // rules={{ required: "Phone no. is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"Postal Code"}
                        placeholder="Postal Code"
                        // validateStatus={fieldState?.error ? "error" : ""}
                        // help={fieldState?.error?.message}
                      />
                    )}
                  />
                </div>
                <div className="flex items-center gap-2 lg:gap-4 w-full">
                  {/*  State */}

                  <Controller
                    name="state"
                    control={control}
                    // rules={{ required: "Email is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"State"}
                        placeholder="State"
                        // validateStatus={fieldState?.error ? "error" : ""}
                        // help={fieldState?.error?.message}
                      />
                    )}
                  />
                  {/* Country */}
                  <Controller
                    name="country"
                    control={control}
                    // rules={{ required: "Phone no. is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"Country"}
                        placeholder="Country"
                        // validateStatus={fieldState?.error ? "error" : ""}
                        // help={fieldState?.error?.message}
                      />
                    )}
                  />
                </div>

                <div className="mt-4">
                  <Controller
                    name="permissions"
                    control={control}
                    render={({ field, fieldState }) => (
                      <div>
                        <Checkbox.Group
                          className="flex flex-col gap-2"
                          options={[
                            {
                              label:
                                "Show company name on invoices and quotations",
                              value: "show_name",
                            },
                            {
                              label:
                                "Show company full address on invoices and quotations",
                              value: "show_address",
                            },
                            {
                              label:
                                "Allow transfer of invoice amount to company bank account",
                              value: "allow_transfer",
                            },
                          ]}
                          value={field.value}
                          onChange={field.onChange}
                        />
                        {fieldState.error && (
                          <p className="text-sm text-red-500 mt-4">
                            {fieldState?.error?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="mt-4">
                  <Controller
                    name="bank_details"
                    control={control}
                    // rules={[(required = false)]}
                    render={({ fields, fieldState }) => (
                      <FormTextArea
                        {...fields}
                        row="4"
                        size="large"
                        placeholder="Bank Details"
                        label="Bank Details(Bank Name, Account Number, Routing Number, etc.)"
                      />
                    )}
                  />
                </div>

                <div className="mt-4">
                  <Button type="primary" htmlType="submit" className="!w-full">
                    Create Customer
                  </Button>
                </div>
              </FormDiv>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CompanyForm;
