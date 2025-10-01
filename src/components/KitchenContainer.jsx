import Cooking from "./Cooking";
import CurrentOrders from "./CurrentOrders";

const KitchenContainer = () => {
  return (
    <div className="kitchen-Container">
      <div className="current-Orders">
        <CurrentOrders />
      </div>

      <div className="cooking">
        <Cooking />
      </div>
    </div>
  );
};

export default KitchenContainer;
