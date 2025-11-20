/**
 * 
 *  How to use Ant Design Reusable Form with React Hook Form through Hoom Form controller
 * 
 * 
 import { useForm, Controller } from "react-hook-form";
import { Button } from "antd";
import FormInput from "./FormInput";

 export default function ExampleForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: { username: "" },
  });

  const onSubmit = (data) => console.log("Form submitted:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        rules={{ required: "Username is required" }}
        render={({ field, fieldState }) => (
          <FormInput
            label="Username"
            placeholder="Enter your username"
            {...field}
            validateStatus={fieldState.error ? "error" : ""}
            help={fieldState.error?.message}
          />
        )}
      />

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Submit
      </Button>
    </form>
  );
 */
