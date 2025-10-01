import { Outlet } from "react-router";
import Navbar from "../Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <ToastContainer newestOnTop />
    </div>
  );
};

export default Root;
