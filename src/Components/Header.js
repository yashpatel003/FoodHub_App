import { useState, useContext } from "react";
import Logo from '../assets/img/Logo.png';
import { Link } from "react-router-dom";
import UserContext from "../useHook/UserContext";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";



export const Title = () => (
  <h1 id="title" className="font-bold text-[22px] text-orange-400">
    <a href="/">
      <img data-testid="logo"
        className="w-[70px]"
        src={Logo}
        alt="FoodHub"
      />
    </a>
  </h1>

);

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(
    token?.length === 100 ? false : true
  );
  
  const navigate = useNavigate();


  const { user } = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);

  return (

    <div className="  flex  opacity-75 bg-slate-300 shadow-lg" >
      <div className=" flex flex-row top-0 left-0 right-0  w-full z-50 justify-between items-center py-3 lg:py-6 drop-shadow-xl overflow-y-hidden">
        <Title />
        <div className="">

          <ul className="list-none items-end hidden lg:flex gap-6">
            <Link to="/">
              <li className=" p-3 hover:text-orange-500 cursor-pointer">Home</li>
            </Link>
            <Link to="/about">
              <li className="  p-3  hover:text-orange-500 cursor-pointer">About Us</li>
            </Link>
            <Link to="/contact">
              <li className=" p-3  hover:text-orange-500 cursor-pointer">Contact</li>
            </Link>

            <Link to="/cart">
              
              <div>
                <div className=" bg-slate-300 flex justify-center items-center ">
                  <div className="relative py-2">
                    <div className="t-0 right-3  absolute left-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartItems.length}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:bg-orange-500 file: mt-2 h-4 w-6  ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </ul>
        </div>
        
        <li>
          {/* use conditional rendering for login and logout */}
          {(isLoggedIn) ? (
            <button
              className="btn p-2 mr-12 border-2 border-black text-black hover:bg-orange-500 hover:text-white hover:cursor-pointer"
              // onClick={() => {
              //   localStorage.clear();
              //   setIsLoggedIn(!isLoggedIn);
              // }}
              onClick={() => {
                localStorage.removeItem("token"); // Remove only the token
                setIsLoggedIn(false); // Update the state
              }}
              
            >
              Logout
            </button>
          ) : (
            <button
              className="btn p-2 border-2 border-black mr-12 text-black    hover:bg-orange-500 hover:text-white hover:cursor-pointer"
              onClick={() =>{
               navigate("/login")}}
              >
              Login
            </button>
          )}
        </li>
      </div>
    </div >
  );
};
export default Header;
