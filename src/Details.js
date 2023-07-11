import { useParams } from "react-router-dom";
import { customers } from "./CustomersList";

export default function Details() {
  const { elId } = useParams();

  const detail = customers.find((cust) => cust.id === Number(elId));

  const renderDetails = detail.orders.map((el) => {
    return <div key={el}>{el}</div>;
  });

  if (!detail) {
    return <div>Customer not found</div>;
  }
  return (
    <div>
      <p>Customer : {detail.name}</p>
      {renderDetails}
    </div>
  );
}
