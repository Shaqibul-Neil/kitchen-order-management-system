const OrderReady = () => {
  // Static mock data

  const order = {
    order_title: "Beef Steak",
    table_no: 12,
    waiterId: "W-007",
    cooked_At: "12:45 PM",
  };
  return (
    <div>
      <h2 className="kitchen-Container-Title">Order Ready</h2>
      <div className="rounded-xl p-5 shadow bg-amber-200 mt-12 cursor-pointer">
        {/* Order Title */}
        <h3 className="text-xl font-bold text-amber-800 mb-2">
          {order.order_title}
        </h3>

        {/* Table No */}
        <p className="text-[#1D232A]">
          <span className="font-semibold">Table:</span> {order.table_no}
        </p>

        {/* Waiter ID */}
        <p className="text-[#1D232A]">
          <span className="font-semibold">Waiter ID:</span> {order.waiterId}
        </p>

        {/* Cooking Time */}
        <p className="text-[#1D232A] mt-2">
          <span className="font-semibold">Cooking Time:</span> {order.cooked_At}
        </p>
      </div>
    </div>
  );
};

export default OrderReady;
