import { CookingPot, ScrollText, Soup } from "lucide-react";
import { useContext } from "react";
import KitchenContext from "./Root/KitchenContext/KitchenContext";

const States = () => {
  const { orderItems, cookingItems, readyItems } = useContext(KitchenContext);

  const conditionalLength = (arr) =>
    arr.length <= 9 ? `0${arr.length}` : arr.length;

  return (
    <div className="states">
      {/* current orders */}
      <div className="border-4 border-dotted rounded-2xl border-warning p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="icons" />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-4xl lg:text-6xl font-bold">
              {conditionalLength(orderItems)}
            </h2>
          </div>
        </div>
      </div>

      {/* cooking */}
      <div className="border-4 border-dotted rounded-2xl border-warning p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="icons" />
          <div className="text-xl text-center">
            Cooking
            <h2 className="text-4xl lg:text-6xl font-bold">
              {conditionalLength(cookingItems)}
            </h2>
          </div>
        </div>
      </div>

      {/* order ready */}
      <div className="border-4 border-dotted rounded-2xl border-warning p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Soup className="icons" />
          <div className="text-xl text-center">
            Order Ready
            <h2 className="text-4xl lg:text-6xl font-bold">
              {conditionalLength(readyItems)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
