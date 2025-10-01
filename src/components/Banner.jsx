import { ChefHat } from "lucide-react";

const Banner = ({ children }) => {
  return (
    <div className="banner">
      <h2>
        <ChefHat size={40} />
      </h2>
      <h2>{children}</h2>
    </div>
  );
};

export default Banner;
