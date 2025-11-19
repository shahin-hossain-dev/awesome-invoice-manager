import { Button, Flex, Form, Input, Select, Space } from "antd";

const options = [
  {
    label: "Bangla",
    value: "bangla",
    emoji: "🇧🇩",
    desc: "Bangla (বাংলা)",
  },
  {
    label: "USA",
    value: "usa",
    emoji: "🇺🇸",
    desc: "USA (美国)",
  },
  {
    label: "Japan",
    value: "japan",
    emoji: "🇯🇵",
    desc: "Japan (日本)",
  },
  {
    label: "Korea",
    value: "korea",
    emoji: "🇰🇷",
    desc: "Korea (韩国)",
  },
];

const ProfileSetting = () => {
  const handleSubmit = (values) => {
    console.log("Success:", values);
  };
  const onDistrictChange = (value) => {
    console.log("District", value);
  };
  const onChangeLanguage = (value) => {
    console.log("Language", value);
  };

  return (
    <div>
      <Form layout="vertical" autoComplete="off" onFinish={handleSubmit}>
        <Flex vertical>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
            <div>
              <Form.Item
                name="firstname"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your first name",
                  },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="Enter Your First Name"
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="lastname"
                label="Last Name"
                rules={[
                  { required: true, message: "Please input your lastname!" },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="Please Enter your lastname"
                />
              </Form.Item>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
            <div>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  type="email"
                  size="large"
                  placeholder="Please Enter your email"
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name="phone"
                label="Phone No."
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone no.",
                  },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="Enter Your Phone No."
                />
              </Form.Item>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
            <div>
              <Form.Item
                name="district"
                label="District"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={onDistrictChange}
                  allowClear
                  size="large"
                >
                  <Select.Option value="male">male</Select.Option>
                  <Select.Option value="female">female</Select.Option>
                  <Select.Option value="other">other</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name={"language"}
                label="Language"
                rules={[{ required: true }]}
              >
                <Select
                  mode="multiple"
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="select one country"
                  defaultValue={["china"]}
                  onChange={onChangeLanguage}
                  options={options}
                  optionRender={(option) => (
                    <Space>
                      <span role="img" aria-label={option.data.label}>
                        {option.data.emoji}
                      </span>
                      {option.data.desc}
                    </Space>
                  )}
                />
              </Form.Item>
            </div>
          </div>

          {/* <div>
            <Form.Item name="remember" valuePropName="checked" label={null}>
              <div className="flex items-center justify-between">
                <Checkbox>
                  <span className="text-sm md:text-base ">Remember me</span>
                </Checkbox>
                <Link href={"/forget-password"}>
                  <span className="text-sm md:text-base">Forget Password</span>
                </Link>
              </div>
            </Form.Item>
          </div> */}

          <Button size="large" type="primary" htmlType="submit">
            Update
          </Button>
        </Flex>
      </Form>
    </div>
  );
};

export default ProfileSetting;
