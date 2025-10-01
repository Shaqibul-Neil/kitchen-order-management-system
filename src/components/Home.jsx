import { useLoaderData } from "react-router";
import Banner from "./Banner";
import States from "./States";
import KitchenContext from "./Root/KitchenContext/KitchenContext";
import KitchenContainer from "./KitchenContainer";
import { useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const ordersData = useLoaderData();
  const [orderItems, setOrderItems] = useState([...ordersData]);
  // console.log({ ordersData, orderItems });

  const [cookingItems, setCookingItems] = useState([]);
  const [readyItems, setReadyItems] = useState([]);

  const handleClickOnOrders = (newOrder) => {
    //check if cooking order exist or not
    const isExist = cookingItems.find((item) => item.id === newOrder.id);
    if (isExist)
      return toast.error(`Already Cooking ${newOrder.order_title}`, {
        theme: "dark",
      });
    //add items to the cooking section
    const newCookingItems = [...cookingItems, newOrder];
    setCookingItems(newCookingItems);
    toast.warn(`Started Cooking ${newOrder.order_title}`, {
      theme: "colored",
      className: "!text-[#1D232A] font-semibold",
    });
  };

  const handleClickOnCooking = (newReady) => {
    //creating order completion time
    newReady.cookedAt = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    //add items to the ready section
    const newReadyItems = [...readyItems, newReady];
    setReadyItems(newReadyItems);

    //remove items form the cooking section
    const remainingCookingItems = cookingItems.filter(
      (item) => item.id !== newReady.id
    );
    setCookingItems(remainingCookingItems);

    //remove items form the order section
    const remainingOrderItems = orderItems.filter(
      (item) => item.id !== newReady.id
    );
    setOrderItems(remainingOrderItems);
    toast.success(`${newReady.order_title} is Ready to Serve`, {
      theme: "colored",
      className: "!text-[#1D232A] font-semibold",
    });
  };
  return (
    <KitchenContext
      value={{
        orderItems,
        handleClickOnOrders,
        cookingItems,
        handleClickOnCooking,
        readyItems,
      }}
    >
      <section>
        <Banner>Kitchen Room</Banner>
      </section>
      <section>
        <States />
      </section>
      <section>
        <KitchenContainer />
      </section>
    </KitchenContext>
  );
};

export default Home;
