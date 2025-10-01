import { useContext } from "react";
import KitchenContext from "./Root/KitchenContext/KitchenContext";
import Order from "./Order";

const CurrentOrders = () => {
  const orders = useContext(KitchenContext);

  return (
    <div>
      <h2 className="kitchen-Container-Title">Current Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default CurrentOrders;
