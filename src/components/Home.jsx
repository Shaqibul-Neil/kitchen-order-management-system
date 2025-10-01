import { useLoaderData } from "react-router";
import Banner from "./Banner";
import States from "./States";
import KitchenContext from "./Root/KitchenContext/KitchenContext";
import KitchenContainer from "./KitchenContainer";
import { useState } from "react";

const Home = () => {
  const ordersData = useLoaderData();
  const [cookingItems, setCookingItems] = useState([]);
  const [readyItems, setReadyItems] = useState([]);

  const handleClickOnOrders = (newOrder) => {
    //check if cooking order exist or not
    const isExist = cookingItems.find((item) => item.id === newOrder.id);
    if (isExist) return alert("Already cooking");
    const newCookingItems = [...cookingItems, newOrder];
    setCookingItems(newCookingItems);
  };
  const handleClickOnCooking = (newReady) => {
    const isExist = readyItems.find((item) => item.id === newReady.id);
    if (isExist) return alert("Already ready");
    const newReadyItems = [...readyItems, newReady];
    setReadyItems(newReadyItems);
  };
  return (
    <KitchenContext
      value={{
        ordersData,
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
