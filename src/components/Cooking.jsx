import { useContext } from "react";
import KitchenContext from "./Root/KitchenContext/KitchenContext";

const Cooking = () => {
  // // Mock data
  // const order = {
  //   order_title: "Pasta Alfredo",
  //   quantity: 2,
  //   special_instruction: "Extra cheese, no garlic",
  // };
  const { cookingItems, handleClickOnCooking } = useContext(KitchenContext);
  // console.log(cookingItems);

  return (
    <div>
      <h2 className="kitchen-Container-Title mb-12">Cooking Now</h2>
      {cookingItems.map((order) => (
        <div
          className="rounded-xl p-5 shadow  my-4"
          style={{
            background:
              "url('/cook-bg.gif'), linear-gradient(to left, #b88600, #fcb700, #ffdd66)",
            // backgroundSize: "contain",
            // backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
          key={order.id}
        >
          {/* Title */}
          <h3 className="text-xl font-bold text-amber-900 mb-2">
            {order.order_title}
          </h3>

          {/* Quantity */}
          <p className="text-lg font-semibold text-amber-800">
            Quantity: <span className="text-[#1D232A]">0{order.quantity}</span>
          </p>

          {/* Special Instruction */}
          <p className="text-xs text-[#1D232A] mt-2 italic">
            {order.short_instruction}
          </p>

          {/* Static Button */}
          <button
            className="px-6 mt-3 py-1 shadow text-sm bg-[#1D232A] cursor-pointer rounded-xl"
            onClick={() => handleClickOnCooking(order)}
          >
            Cooked?
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cooking;
