
import { IMG_CDN_URL } from "./config";
import { AiFillStar } from "react-icons/ai";

const RestrauntCard = ({ cloudinaryImageId, name ,cuisines,veg ,areaName, avgRating }) => {
    return(
    <div className="  p-3 m-2 shadow-lg bg-gray-100  hover:scale-110 ">
      <div className="relative">
        <img
        className="w-50% h-auto object-cover"
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
      </div>
      <h3 className="font-medium text-slate-900 text-lg">{name}</h3>
      <h4 className="text-slate-700 text-sm">{cuisines?.join(", ")}</h4>
      <h4 className="text-slate-700 text-sm">{areaName}</h4>

      <div className="pt-2 flex  items-center text-sm text-slate-700 uppercase ">
          {/* <p className={` text-white px-1 py-0.5 ${avgRating >= 4 ? "bg-green-600 " : avgRating > 3 ? "bg-orange-400 " : "bg-red-400 "} `}>&diams; {avgRating}</p> */}
          { (avgRating >= 4 )? (<AiFillStar className=" text-green-500 text text-2xl "/>) : (<AiFillStar className=" text-red-500 text-2xl" />) } 
          <p>{avgRating}</p>
      
      </div>
    </div>
  );
}
export default RestrauntCard;