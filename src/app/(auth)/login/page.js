"use client";
import Image from "next/image";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Flex, Form } from "antd";
import { FormInput } from "@/app/(admin)/components/form/fields";
import { axiosPublic } from "@/libs/axios";
import { setUser } from "@/redux/features/authSlice";

const schema = yup
  .object({
    login: yup.string().max(50).required(),
    password: yup.string().min(6).max(16).required().matches(),
  })
  .required();

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (e) => {
    const formData = new FormData();

    formData.append("login", e.login);
    formData.append("password", e.password);

    try {
      const result = await axiosPublic.post("/login", formData);

      const data = result?.data?.data;
      const user = data?.user;

      if (result.status === 200) {
        dispatch(
          setUser({
            user: { email: user?.email, userId: user?.id },
            token: data?.token,
          })
        );
        router.push("/");
      }
    } catch (error) {
      const message = error.response?.data?.message;
      setError("root", { type: "server", message: message });
      console.log(error.response?.data);
    }
  };

  return (
    <section className="auth-container bg-[#f5f5f5]">
      <div className="auth-body shadow-2xl bg-white">
        <div className="flex-center mb-3">
          <Image
            src={"/images/icons/logo.png"}
            alt="Logo"
            height={50}
            width={50}
          />
          <h2 className=""> Artificial Soft</h2>
        </div>
        <div>
          <Form
            layout="vertical"
            autoComplete="off"
            onFinish={handleSubmit(onSubmit)}
          >
            <Flex vertical gap={2}>
              <div>
                {/* <Form.Item
                  name="username"
                  label="Username or email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your username or email",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    size="large"
                    placeholder="Enter username or email"
                  />
                </Form.Item> */}

                <Controller
                  name="login"
                  control={control}
                  rules={{ required: "username or email is required" }}
                  render={({ field, fieldState }) => (
                    <FormInput
                      {...field}
                      size="large"
                      label="Username or Email"
                      placeholder="Username or Email"
                      validateStatus={fieldState?.error ? "error" : ""}
                      help={fieldState?.error?.message}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required" }}
                  render={({ field, fieldState }) => (
                    <FormInput
                      {...field}
                      type="password"
                      size="large"
                      label="Password"
                      placeholder="Password"
                      validateStatus={fieldState?.error ? "error" : ""}
                      help={fieldState?.error?.message}
                    />
                  )}
                />
                {/* <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    type="password"
                    size="large"
                    placeholder="************"
                  />
                </Form.Item> */}
              </div>
              <div>
                <Form.Item name="remember" valuePropName="checked" label={null}>
                  <div className="flex items-center justify-between">
                    <Checkbox>
                      <span className="text-sm md:text-base ">Remember me</span>
                    </Checkbox>
                    <Link href={"/forget-password"}>
                      <span className="text-sm md:text-base">
                        Forget Password
                      </span>
                    </Link>
                  </div>
                </Form.Item>
              </div>
              {errors?.root?.message && (
                <p className="text-red-500  text-sm">{errors?.root?.message}</p>
              )}

              <Button size="large" type="primary" htmlType="submit">
                Login
              </Button>
            </Flex>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Login;
