import { useContext } from "react";
import KitchenContext from "./Root/KitchenContext/KitchenContext";

const OrderReady = () => {
  const { readyItems } = useContext(KitchenContext);
  // console.log(readyItems);

  return (
    <div>
      <h2 className="kitchen-Container-Title mb-12">Order Ready</h2>
      {readyItems.map((order) => (
        <div
          className="rounded-xl p-5 shadow bg-amber-200 my-4 cursor-pointer"
          key={order.id}
        >
          {/* Order Title */}
          <h3 className="text-xl font-bold text-amber-800 mb-2">
            {order.order_title}
          </h3>

          {/* Table No */}
          <p className="text-[#1D232A]">
            <span className="font-semibold">Table:</span>{" "}
            {order.table_no < 9 ? `0${order.table_no}` : order.table_no}
          </p>

          {/* Waiter ID */}
          <p className="text-[#1D232A]">
            <span className="font-semibold">Waiter ID:</span> {order.waiterId}
          </p>

          {/* Cooking Time */}
          <p className="text-[#1D232A] mt-2">
            <span className="font-semibold">Cooking Time : </span>
            {order.cookedAt}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrderReady;
