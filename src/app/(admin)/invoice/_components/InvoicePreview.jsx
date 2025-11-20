import React, { useRef } from "react";
import FormDiv from "../../products/_components/FormDiv";
import FormInnerDiv from "../../components/form/FormInnderDiv";
import Table from "../../components/ui/Table";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";

const InvoicePreview = ({ contentRef, handlePrint }) => {
  const tableData = [
    {
      key: "1",
      product_name: "Cell Phone",
      quantity: 2,
      unit_price: "$ 15000",
      total: "$ 30000",
    },
  ];

  const tableColumn = [
    { key: "1", dataIndex: "product_name", title: "Product Name" },
    { key: "2", dataIndex: "quantity", title: "Quantity" },
    { key: "3", dataIndex: "unit_price", title: "Unit Price" },
    { key: "4", dataIndex: "total", title: "Total" },
  ];

  const invoiceDate = new Date();

  return (
    <div>
      {/* <button onClick={reactToPrintFn}>Print</button> */}
      <div className={"overflow-x-scroll"}>
        <FormDiv ref={contentRef} className={"min-w-[500px]"}>
          <div className="flex items-center justify-between">
            <Image
              src={"/images/icons/logo.png"}
              width={50}
              height={50}
              alt="logo"
              className="w-[50px] h-[50px]"
            />
            <div>
              <h2 className="uppercase text-2xl">Invoice</h2>
              {invoiceDate.toLocaleString()}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInnerDiv title={"Bill From"}>
              <div>
                <h2>Artificial Soft</h2>
                <p className="!mb-0">Banglamoto, Dhaka, Bangladesh</p>
                <p className="!mb-0">artificial-soft@gmail.com</p>
                <p className="!mb-0">+880 1500 000000</p>
              </div>
            </FormInnerDiv>
            <FormInnerDiv title={"Bill To"}>
              <div>
                <h2>Customer Name</h2>
                <p className="!mb-0">Banglamoto, Dhaka, Bangladesh</p>
                <p className="!mb-0">customemr@gmail.com</p>
                <p className="!mb-0">+880 1500 000000</p>
              </div>
            </FormInnerDiv>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <h6 className="!font-bold">Invoice Id</h6>
              <p>#DK30AKS9</p>
            </div>
            <div>
              <h6 className="!font-bold">Date Issued</h6>
              <p>20-12-2025</p>
            </div>
            <div>
              <h6 className="!font-bold">Due Date</h6>
              <p>22-12-2025</p>
            </div>
            <div>
              <h6 className="!font-bold">Due Amount</h6>
              <p>৳ 20,000</p>
            </div>
          </div>
          <div>
            <Table dataSource={tableData} columns={tableColumn} />
          </div>
          <div className="flex justify-end mt-4 lg:mt-6">
            <div className="space-y-2">
              <div className="grid grid-cols-2 place-items-end gap-4">
                <span className="text-base">Sub Total:</span>
                <span className="text-base font-semibold"> $30000 </span>
              </div>
              <div className="grid grid-cols-2 place-items-end gap-4">
                <span className="text-base">Discount: </span>
                <span className="text-base font-semibold">$200 </span>
              </div>
              <div className="grid grid-cols-2 place-items-end gap-4">
                <span className="text-base">Delivery Charge: </span>
                <span className="text-base font-semibold">$50</span>
              </div>
              <div className="grid grid-cols-2 place-items-end gap-4">
                <span className="text-base">Coupon: </span>
                <span className="text-base font-semibold">--</span>
              </div>
              <hr />
              <div className="grid grid-cols-2 place-items-end gap-4">
                <span className="text-base">Total: </span>
                <span className="text-base font-semibold">$28050</span>
              </div>
            </div>
          </div>
        </FormDiv>
      </div>
    </div>
  );
};

export default InvoicePreview;
