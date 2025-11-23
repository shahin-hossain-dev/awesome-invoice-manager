"use client";
import { Button, Checkbox, Form, Input } from "antd";
import FormDiv from "@/app/(admin)/components/form/FormDiv";

import { Controller, useForm } from "react-hook-form";
import { FormInput } from "@/app/(admin)/components/form/fields";
import FormTextArea from "@/app/(admin)/components/form/fields/FormTextArea";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const TaxForm = () => {
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
              <FormDiv title={"Tax Rate Information"}>
                {/*  category name */}
                <Controller
                  name="categoryName"
                  control={control}
                  rules={{ required: "Category name is required" }}
                  render={({ field, fieldState }) => (
                    <FormInput
                      {...field}
                      // required={true}
                      size={"large"}
                      label={"Tax Rate Name"}
                      placeholder="Tax Rate Name"
                      validateStatus={fieldState?.error ? "error" : ""}
                      help={fieldState?.error?.message}
                    />
                  )}
                />

                {/*  product details */}
                <Controller
                  name="taxDescription"
                  control={control}
                  // rules={{ required: "Product description name is required" }}
                  render={({ field, fieldState }) => (
                    <FormTextArea
                      {...field}
                      // required={true}
                      rows={4}
                      size={"large"}
                      label={"Tax Description "}
                      placeholder="Tax Description"
                      // validateStatus={fieldState?.error ? "error" : ""}
                      // help={fieldState?.error?.message}
                    />
                  )}
                />

                <div className="mt-4">
                  <Button type="primary" htmlType="submit" className="!w-full">
                    Create Tax Rate
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

export default TaxForm;
