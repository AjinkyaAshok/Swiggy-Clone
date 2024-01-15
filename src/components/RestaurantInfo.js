import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantInfo = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);
const [showIndex,setShowIndex] = useState(null)
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ca) =>
        ca.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="">
      <div className="mt-10 p-5 w-6/12 mx-auto bg-orange-100 shadow-md ">
        <h1 className="text-2xl pb-4 font-bold">{name}</h1>
        <h3 className="text-sm font-semibold">{cuisines.join(", ")}</h3>
        <h3 className="text-sm font-semibold">
          {"Rs."}
          {costForTwo / 100}
          {" For two"}
        </h3>
      </div>

      <div>
        {categories.map((category,index) => (
          <RestaurantItemCategory
            key={category?.card?.card?.itemCards[0].card.info.id}
            data={category?.card?.card}
            showItems={index=== showIndex?true:false}
            setShowIndex={()=>setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantInfo;
