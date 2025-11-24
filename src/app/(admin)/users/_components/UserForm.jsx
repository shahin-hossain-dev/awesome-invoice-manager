"use client";
import { Button, Checkbox, Form, Radio } from "antd";
import FormDiv from "../../components/form/FormDiv";
import { Controller, useForm } from "react-hook-form";
import {
  FormCheckBox,
  FormInput,
  FormSelect,
} from "../../components/form/fields";
import FormCheckbox from "../../components/form/fields/FormCheckBox";

const UserForm = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   firstName: "",
    //   select: {},
    // },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const options = [
    { label: "Only View", value: "only_read" },
    { label: "Edit and View", value: "edit_view" },
  ];

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
                  {/*  User name */}
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
                    name="password"
                    control={control}
                    rules={{ required: "Password is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        size={"large"}
                        type={"password"}
                        label={"Password"}
                        placeholder="Password"
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      />
                    )}
                  />
                  {/* confirm password  */}
                  <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{ required: "Confirm password is required" }}
                    render={({ field, fieldState }) => (
                      <FormInput
                        {...field}
                        // required={true}
                        type="password"
                        size={"large"}
                        label={"Confirm Password"}
                        placeholder="Confirm Password"
                        validateStatus={fieldState?.error ? "error" : ""}
                        help={fieldState?.error?.message}
                      />
                    )}
                  />
                </div>

                {/* user role */}
                <div className="w-full">
                  <Controller
                    name="role"
                    control={control}
                    // rules={{ required: "Email is required" }}
                    render={({ field, fieldState }) => (
                      <Form.Item name="radio-group" label="User Role">
                        <Radio.Group {...field} value={field?.value}>
                          <Radio value="admin">Admin</Radio>
                          <Radio value="moderator">Moderator</Radio>
                          <Radio value="customer">Customer</Radio>
                        </Radio.Group>
                      </Form.Item>
                    )}
                  />
                  {errors.role && (
                    <div className="text-red-500 mt-2">
                      {errors.role.message}
                    </div>
                  )}
                </div>
                {/* user role */}
                <div className="w-full">
                  <Controller
                    name="permission"
                    control={control}
                    // rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <>
                        <Checkbox.Group
                          label="User Role"
                          {...field}
                          options={options}
                          value={field.value || []}
                          defaultValue={["Pear"]}
                          // onChange={onChange}
                        />
                        {errors.permission && (
                          <div style={{ color: "red", marginTop: 6 }}>
                            {errors.services.message}
                          </div>
                        )}
                      </>
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
