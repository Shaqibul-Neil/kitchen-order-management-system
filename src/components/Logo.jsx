import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <a href="./index.html">
      <div className="flex items-center gap-1">
        <img className="w-10" src={logo} alt="Taxi Kitchen" />

        <h2 className="text-xl font-bold text-shadow-xs">
          Taxi <span className="text-warning">Kitchen</span>
        </h2>
      </div>
    </a>
  );
};

export default Logo;
