import Cooking from "./Cooking";
import CurrentOrders from "./CurrentOrders";
import OrderReady from "./OrderReady";

const KitchenContainer = () => {
  return (
    <div className="kitchen-Container">
      <div className="current-Orders">
        <CurrentOrders />
      </div>

      <div className="cooking">
        <Cooking />
        <OrderReady />
      </div>
    </div>
  );
};

export default KitchenContainer;
