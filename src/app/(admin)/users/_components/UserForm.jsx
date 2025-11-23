"use client";
import { Button, Form } from "antd";
import FormDiv from "../../components/form/FormDiv";
import { Controller, useForm } from "react-hook-form";
import { FormInput, FormSelect } from "../../components/form/fields";

const UserForm = () => {
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
                <div className="flex items-center gap-2 lg:gap-4 w-full">
                  {/*  product name */}
                  <Controller
                    name="userName"
                    control={control}
                    rules={{ required: "User name is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        label={"User Name"}
                        placeholder="User Name"
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      />
                    )}
                  />
                  {/* company name */}
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Email is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        type="email"
                        size={"large"}
                        label={"Email"}
                        placeholder="Email"
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
                    rules={{ required: "Address no. is required" }}
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

export default UserForm;
