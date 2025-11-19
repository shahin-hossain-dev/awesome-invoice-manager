"use client";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    console.log(e);
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
          <h2 className=""> Commerce</h2>
        </div>
        <div>
          <Form layout="vertical" autoComplete="off" onFinish={handleSubmit}>
            <Flex vertical gap={2}>
              <div>
                <Form.Item
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
                </Form.Item>
              </div>
              <div>
                <Form.Item
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
                </Form.Item>
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
