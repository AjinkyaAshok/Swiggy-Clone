import { useContext } from "react";
import { RES_ITEMS_IMAGE } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, aggregatedDiscountInfoV3 } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div data-testid="resCard" className="p-8">
      <div className="w-64 h-80  rounded-xl hover:bg-orange-50 ">
        <p className="absolute text-center pt-32 text-white font-bold text-xl pl-4">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </p>
        <img
          className="w-60 h-40 ml-2 mt-2 shadow-lg rounded-xl"
          src={RES_ITEMS_IMAGE + resData.info.cloudinaryImageId}
          alt=""
        />
        <div className="px-5 py-2">
          <h1 className="font-bold text-lg">{name}</h1>
          <h1 className="mb text-base h-max w-max py-1 rounded-md font-semibold">
            {avgRating}⭐{" • "}
            {deliveryTime} mins.
          </h1>
          <h1 className="">{cuisines.join(", ")}</h1>
          <h1 className="">{loggedInUser} </h1>
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
          className="absolute m-6 font-medium shadow-xl bg-orange-200 text-black p-2 rounded-md"
        >
          OPEN
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
