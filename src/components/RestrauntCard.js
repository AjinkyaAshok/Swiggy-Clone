import { useContext } from "react";
import { RES_ITEMS_IMAGE } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, aggregatedDiscountInfoV3 } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div data-testid="resCard" className="p-4 relative z-0">
      <div className="w-64 h-80  rounded-xl transform transition duration-250 hover:scale-95">
        <p className="absolute text-center pt-32 text-white font-bold text-xl pl-4">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </p>
        
        <img
          className="w-60 h-40 ml-2 mt- shadow-lg rounded-xl"
          src={RES_ITEMS_IMAGE + resData.info.cloudinaryImageId}
          alt=""
        />
        <div className="px-5 py-2">
          <h1 className="font-bold text-lg">{name}</h1>
          <h1 className="text-base h-max w-max py-1 rounded-md font-semibold">
            {avgRating}⭐{" • "}
            {deliveryTime} mins.
          </h1>
          <h1 className="">{cuisines.join(", ")}</h1>
          {/* <h1 className="">{loggedInUser} </h1> */}
        </div>
      </div>
    </div>
  );
};

export const withOfferLabel = () => {
  return (props) => {
    return (
      <div>
        <label
          htmlFor=""
          className="absolute bg-opacity- ml-3 mt-3 z-10 text-xs font-medium shadow-lg bg-white text-black p-1 rounded-md "
        >
          OPEN
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
