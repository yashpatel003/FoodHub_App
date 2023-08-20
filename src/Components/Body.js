import { FETCH_RESTRO_URL } from "./config.js";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterdata";
import useOnline from "../useHook/useOnline";

const Body = () => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);


  async function getRestaurants() {
    try {
      const response = await fetch(FETCH_RESTRO_URL);

      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();

        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {

            // initialize checkData for Swiggy Restaurant data
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);

        // update the state variable restaurants with Swiggy API data
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
        console.log(resData);
      }
    } catch (error) {
      setErrorMessage(error);
      console.error(error);
    }
  }


  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };


  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, Please check your internet Connection</h1>
  }
  if (!AllRestaurants) return null;

  return AllRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>

      <div className="relative scroll-m-32   ">
        <div className="search-container mt-24 flex justify-center items-center overflow-hidden ">
          <input data-testid="search-ip"
            type="text"
            className="w-{2/4} rounded bg-white pt-1 pb-1 pr-1 pl-3 text-lg  "
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // searchData(e.target.value, AllRestaurants);
            }}
          />
          <button data-testid="search"
            className="p-2 m-2 bg-green-200 pt-3 pb-3 pr-5 pl-5 cursor-pointer border-hidden outline-hidden  hover:bg-green-600 rounded-md"
            onClick={() => {
              // const data = filterData(searchText, AllRestaurants);
              searchData(searchText, AllRestaurants);

            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="my-8  grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6 lg\:gap-4 lg:gap-6" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id} className="link"
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>


    </>
  );
};
export default Body;
