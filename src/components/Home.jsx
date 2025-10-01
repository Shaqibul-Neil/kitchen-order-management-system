import { useLoaderData } from "react-router";
import Banner from "./Banner";
import States from "./States";
import KitchenContext from "./Root/KitchenContext/KitchenContext";
import KitchenContainer from "./KitchenContainer";

const Home = () => {
  const ordersData = useLoaderData();
  return (
    <div>
      <KitchenContext value={ordersData}>
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
    </div>
  );
};

export default Home;
