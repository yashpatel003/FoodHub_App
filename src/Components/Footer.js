
import { Link } from 'react-router-dom';
import {  FaLinkedinIn,  FaGithub } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Logo from '../assets/img/Logo.png'

const Footer = () => {
  const items = useSelector(state => state.cart.items);
  return (
    <>
      <div className=" w-[100%] h-auto">
        <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-slate-600 text-white">
          <div className="m-auto">
            <div className="text-center">
              <p>Stay tuned with latest offers and updates.</p>
              <h2 className="font-bold">Download the FoodHub app now</h2>
            </div>
            <div className="pt-2 flex justify-center gap-x-3">
              <a
                href=""
                className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
              >
                <img
                  src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
                  alt="App Store"
                  className="w-[150px] h-[70px]"
                  width="130px"
                  height="50px"
                />
              </a>

              <a
                href=""
                className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
              >
                <img
                  src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
                  alt="App Store"
                  className="w-[150px] h-[70px]"
                  width="130px"
                  height="50px"
                />
              </a>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <form className="w-full" noValidate>
              <div className="flex flex-col items-center">
                <div className="w-full">
                  <input
                    id="subscription_email"
                    name="subscription_email"
                    type="email"
                    placeholder="Write your email here"
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 bg-white border-gray-300 focus:outline-none focus:border-heading md:h-12 lg:px-7 h-12 lg:h-14 text-center text-black"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <button
                  data-variant="flat"
                  className="w-full bg-black transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-800 mt-2 flex-shrink-0"
                >
                  <span className="lg:py-0.5">Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>




      <section
        className="w-[100%] h-auto bg-black flex items-center justify-center flex-col" >
        <div className=" w-[70%] flex items-start justify-between mt-10 pb-12   ml-30 mr-30">
          <div className="flex items-start justify-center flex-col gap-3">
            <div className=" w-1/4 mb-6 mr-8 text-2xl uppercase font-semibold text-white ">Company</div>
            <a href="#" className=' text-xl text-gray-300'>About us</a>
            <a href="#" className=' text-xl text-gray-300'>Team</a>
            <a href="#" className=' text-xl text-gray-300'>Career</a>
            <a href="#" className=' text-xl text-gray-300'>FoodHub Blog</a>
            <a href="#" className=' text-xl text-gray-300'>FoodHub Bug Bounty</a>
            <a href="#" className=' text-xl text-gray-300'>FoodHub One </a>
            <a href="#" className=' text-xl text-gray-300'>FoodHub Corporate</a>
            <a href="#" className=' text-xl text-gray-300'>FoodHub Instamart</a>
            <a href="#" className=' text-xl text-gray-300'>FoodHub Genie</a>
          </div>
          <div>
            <div className=" w-[250px] mb-6 mr-8 text-2xl uppercase font-semibold text-white">Contact</div>
            <a href="#" className=' text-xl text-gray-300'>Help & Support</a>
            <a href="#" className=' text-xl text-gray-300'>Partner with us</a>
            <a href="#" className=' text-xl text-gray-300'>Ride with us</a>
          </div>
          <div>
            <div className=" w-[300px] mb-6 mr-8 text-2xl uppercase font-semibold text-white">Legal</div>
            <a href="#" className=' text-xl text-gray-300'>Terms & Conditions</a>
            <a href="#" className=' text-xl text-gray-300'>Refund & Cancellation</a>
            <a href="#" className=' text-xl text-gray-300'>Privacy Policy</a>
            <a href="#" className=' text-xl text-gray-300'>Cookie Policy</a>
            <a href="#" className=' text-xl text-gray-300'>Offer Terms</a>
            <a href="#" className=' text-xl text-gray-300'>Phishing & Fraud</a>
            <a href="#" className=' text-xl text-gray-300'>Corporate – FoodHub Money Codes Terms and Conditions</a>
            <a href="#" className=' text-xl text-gray-300'>
              Corporate - FoodHub Discount Voucher Terms and Conditions
            </a>
          </div>
        </div>
        <div className="w-[70%] h-24 m-auto text-white flex items-center justify-between">
          <a href={'#'}>
            <img
              src={Logo}
              className="w-[150px] h-[70px]"
              width="130px"
               height="50px"
              alt=""
            />
          </a>
          <div className=" text-4xl">
            <div> &copy; 2023 FoodHub </div>
            <div className=' text-center pt-1 pb-1 '>
              by Yash
            </div>
          </div>
          <div className=" text-3xl flex items-center justify-end  gap-8">
            <Link to={'https://www.linkedin.com/in/yash-patel-0b8753205/'} target="_blank">
              <FaLinkedinIn className=" text-white text-4xl" />
            </Link>
            <Link to={'https://github.com/yashpatel003'} target="_blank">
              <FaGithub className=" text-white text-4xl" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
