"use client";
import { Button, Checkbox, Form, Input } from "antd";
import FormDiv from "./FormDiv";
import FormItem from "../../components/ui/FormItem";
import TextEditor from "../../components/ui/TextEditor";
import ImageUploader from "./ImageUploader";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ProductForm = () => {
  return (
    <div>
      <div>
        <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          size="large"
          className=" !w-full  "
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
            <div className="col-span-2 relative ">
              <FormDiv title={"Product Information"}>
                {/* <Form.Item
                  label="Product Name"
                  name="product_name"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  className=""
                >
                  <Input />
                </Form.Item> */}
                <FormItem
                  label="Product Name"
                  name="Product Name"
                  message="Please enter product name"
                  placeholder="Enter product name"
                  required={true}
                />
                <div className="flex items-center gap-2 lg:gap-4 w-full">
                  <FormItem
                    label="SKU"
                    name="SKU"
                    message="SKU is required"
                    required={true}
                    placeholder="Input SKU"
                  />

                  <FormItem
                    name="barcode"
                    label="Barcode"
                    message="Barcode is required"
                    required={true}
                    placeholder="Input Barcode"
                  />
                </div>
                <div>
                  <TextEditor label={"Product Description"} />
                </div>
                <div>
                  <ImageUploader label="Product Images" required={true} />
                </div>
              </FormDiv>
            </div>

            <div className="col-span-1 ">
              <FormDiv title={"Pricing"}>
                <FormItem
                  label="Best Price"
                  name="base_price"
                  required={true}
                  message="Price is required"
                  placeholder="Enter product Price"
                />

                <FormItem
                  label="Discount Price"
                  name="discount_price"
                  required={true}
                  message="discount_price is required"
                  placeholder="Enter product discount price"
                />
              </FormDiv>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProductForm;
