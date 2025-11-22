"use client";
import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const InvoiceItems = ({ setValue }) => {
  const [items, setItems] = useState([
    {
      product_name: "",
      discount: "",
      quantity: "",
      unit_price: "",
      total_price: "",
      tax: "",
    },
  ]);

  const handleAddField = () => {
    setItems([
      ...items,
      {
        product_name: "",
        description: "",
        quantity: "",
        unit_price: "",
        total_price: "",
      },
    ]);
  };

  const handleChangeInput = (fieldName, value, idx) => {
    const allItems = [...items];
    allItems[idx][fieldName] = value;

    setItems(allItems);
    setValue("items", allItems);
  };

  const handleRemoveField = (idx) => {
    const remains = items.filter((item, rmIdx) => rmIdx !== idx);
    setItems(remains);
  };

  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Tax</th>
            <th>Discount</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>
                <Input
                  value={item.product_name}
                  name={"product_name"}
                  placeholder="Product Name"
                  className="!mb-0"
                  required={true}
                  onChange={(e) =>
                    handleChangeInput(e.target.name, e.target.value, idx)
                  }
                />
              </td>

              <td>
                <Input
                  value={item.unit_price}
                  name={"unit_price"}
                  placeholder="Unit Price"
                  min={0}
                  type="number"
                  className="!mb-0"
                  onChange={(e) =>
                    handleChangeInput(e.target.name, e.target.value, idx)
                  }
                />
              </td>
              <td>
                <Input
                  value={item.quantity}
                  min={0}
                  name={"quantity"}
                  placeholder="Quantity"
                  type="number"
                  className="!mb-0"
                  onChange={(e) =>
                    handleChangeInput(e.target.name, e.target.value, idx)
                  }
                />
              </td>
              <td>
                <Input
                  value={item.tax}
                  name={"tax"}
                  placeholder="Tax"
                  min={0}
                  type="number"
                  className="!mb-0"
                  onChange={(e) =>
                    handleChangeInput(e.target.name, e.target.value, idx)
                  }
                />
              </td>
              <td>
                <Input
                  value={item.discount}
                  name={"discount"}
                  min={0}
                  type={"number"}
                  placeholder="Discount"
                  className="!mb-0"
                  onChange={(e) =>
                    handleChangeInput(e.target.name, e.target.value, idx)
                  }
                />
              </td>
              <td>
                <Input
                  value={item.total_price}
                  type="number"
                  name={"total_price"}
                  placeholder="Total Price"
                  min={0}
                  className="!mb-0"
                  onChange={(e) =>
                    handleChangeInput(e.target.name, e.target.value, idx)
                  }
                />
              </td>
              <td>
                <button
                  type="button"
                  className=" cursor-pointer"
                  onClick={() => handleRemoveField(idx)}
                >
                  <FaTrash className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={handleAddField} icon={<FaPlus />}>
        Add Product
      </Button>
    </div>
  );
};

export default InvoiceItems;
