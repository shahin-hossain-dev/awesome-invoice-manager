"use client";
import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import FormItem from "../../components/ui/FormItem";
import Counter from "../../components/partials/Counter";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

const InvoiceItems = () => {
  const [items, setItems] = useState([
    {
      product_name: "",
      description: "",
      quantity: "",
      unit_price: "",
      total_price: "",
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
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
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
                  onChange={(e) =>
                    handleChangeInput(e.target.name, e.target.value, idx)
                  }
                />
              </td>
              <td>
                <Input
                  value={item.description}
                  name={"description"}
                  placeholder="Description"
                  className="!mb-0"
                  onChange={(e) =>
                    handleChangeInput(e.target.name, e.target.value, idx)
                  }
                />
              </td>
              <td>
                <Counter />
              </td>
              <td>
                <Input
                  value={item.unit_price}
                  name={"unit_price"}
                  placeholder="Unit Price"
                  type="number"
                  className="!mb-0"
                  onChange={(e) =>
                    handleChangeInput(e.target.name, e.target.value, idx)
                  }
                />
              </td>
              <td>
                <Input
                  value={item.total}
                  type="number"
                  name={"total"}
                  placeholder="Total Price"
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
