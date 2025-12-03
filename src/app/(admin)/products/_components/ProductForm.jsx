"use client";
import { Button, Checkbox, Form, Input } from "antd";
import FormDiv from "../../components/form/FormDiv";
import FormItem from "../../components/form/FormItem";
import TextEditor from "../../components/ui/TextEditor";
import ImageUploader from "./ImageUploader";
import { Controller, useForm } from "react-hook-form";
import { FormInput, FormSelect } from "../../components/form/fields";
import FormTextArea from "../../components/form/fields/FormTextArea";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ProductForm = () => {
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
          className=" !w-full  "
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
            <div className="col-span-3 relative ">
              <FormDiv title={"Product Information"}>
                {/*  product name */}
                <Controller
                  name="productName"
                  control={control}
                  rules={{ required: "Product name is required" }}
                  render={({ field, fieldState }) => (
                    <FormInput
                      {...field}
                      // required={true}
                      size={"large"}
                      label={"Product Name"}
                      placeholder="Product Name"
                      validateStatus={fieldState?.error ? "error" : ""}
                      help={fieldState?.error?.message}
                    />
                  )}
                />
                <div className="flex items-center gap-2 lg:gap-4 w-full">
                  {/* product price */}
                  <Controller
                    name="Product Price"
                    control={control}
                    rules={{ required: "Product price is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"Product Price"}
                        placeholder="Product Price"
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      />
                    )}
                  />
                  {/* product code */}
                  <Controller
                    name="Product Code"
                    control={control}
                    rules={{ required: "Product code is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"Product Price"}
                        placeholder="Product Price"
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      />
                    )}
                  />
                </div>
                <div className="flex items-center gap-2 lg:gap-4 w-full">
                  {/* product category*/}
                  <Controller
                    name="productCategory"
                    control={control}
                    rules={{ required: "Product Category  is required" }}
                    render={({ field, fieldState }) => (
                      <FormSelect
                        showSearch={true}
                        {...field}
                        label={"Product Category "}
                        placeholder="Product Category "
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                        options={[
                          { value: "Apply", label: "Apply" },
                          { value: "Dpply", label: "Dpply" },
                        ]}
                      />
                    )}
                  />
                  {/* product tax rate */}
                  <Controller
                    name="taxRate"
                    control={control}
                    rules={{ required: "TAX rate is required" }}
                    render={({ field, fieldState }) => (
                      <FormSelect
                        showSearch={true}
                        {...field}
                        label={"Tax Rate"}
                        placeholder="Tax Rate"
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                        options={[
                          { value: "rate-1", label: "Rate 1" },
                          { value: "rate-2", label: "Rate 2" },
                        ]}
                      />
                    )}
                  />
                </div>

                {/* product image upload */}
                <div>
                  <ImageUploader label="Product Images" required={true} />
                </div>

                {/*  product details */}
                <Controller
                  name="productDescription"
                  control={control}
                  // rules={{ required: "Product description name is required" }}
                  render={({ field, fieldState }) => (
                    <FormTextArea
                      {...field}
                      // required={true}
                      rows={4}
                      size={"large"}
                      label={"Product Description"}
                      placeholder="Product Description"
                      // validateStatus={fieldState?.error ? "error" : ""}
                      // help={fieldState?.error?.message}
                    />
                  )}
                />

                <div className="mt-4">
                  <Button type="primary" htmlType="submit" className="!w-full">
                    Create Product
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

export default ProductForm;
