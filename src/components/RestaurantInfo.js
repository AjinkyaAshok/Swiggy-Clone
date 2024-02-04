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
    <div className=" w-6/12 mx-auto">
      <div className="my-6 p-4 flex flex-col bg-white shadow-md">
        <h1 className="text-sm font-bold">{name}</h1>
        <h3 className="text-sm font-normal">{cuisines.join(", ")}</h3>
        <h3 className="text-sm font-normal">
          {"Rs."}
          {costForTwo / 100}
          {" For two"}
        </h3>
      </div>

      <div className="">
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
