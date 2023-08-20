
import { Link, Outlet } from "react-router-dom";
import Logo1 from "../assets/img/Logo.png"

const About = () => {
  return (
    <div>
         {Outlet}
      <div className=" flex flex-wrap flex-col mt-3 mb-auto justify-center items-center h-[72vh] ">
        <div className=" pl-3 overflow-hidden">
          <h1 className=" text-lg">
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Hub</span> healthy
            meal"
          </h4>
        </div>
        <div className=" pr-5 h-7 overflow-hidden">
          <img src={Logo1} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;