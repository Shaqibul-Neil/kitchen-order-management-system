import { useContext } from "react";
import KitchenContext from "./Root/KitchenContext/KitchenContext";
import Order from "./Order";

const CurrentOrders = () => {
  const { orderItems } = useContext(KitchenContext);
  // console.log(orderItems);

  return (
    <div>
      <h2 className="kitchen-Container-Title">Current Orders</h2>
      <div className="space-y-4 mt-12">
        {orderItems.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default CurrentOrders;
