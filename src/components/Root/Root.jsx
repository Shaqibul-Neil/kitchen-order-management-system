import { Outlet } from "react-router";
import Navbar from "../Navbar";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
