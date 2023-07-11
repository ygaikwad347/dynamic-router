import React from "react";
import { Link } from "react-router-dom";

const customers = [
  { id: 1, name: "Customer 1", orders: ["Order 1", "Order 2"] },
  { id: 2, name: "Customer 2", orders: ["Order 3", "Order 4"] },
  { id: 3, name: "Customer 3", orders: ["Order 5", "Order 6"] }
];

export default function CustomersList() {
  const renderedCustomers = customers.map((el) => {
    return (
      <div key={el.id}>
        {el.name}
        <Link to={`/orders/${el.id}`}>Order Details</Link>
      </div>
    );
  });
  return <div>{renderedCustomers}</div>;
}

export { customers };
