import { useState } from "react";
import RestaurantMenuItems from "./RestaurantMenuItems";

const RestaurantItemCategory = ({ data, setShowIndex, showItems }) => {
  // const [showItems, setShowItems] = useState(false);
  // const { title, itemCards } = data;

  const handleClick = () => {
    setShowIndex(); 
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="cursor-pointer flex justify-between px-5 py-3 w-6/12 mx-auto mt-3  bg-orange-50 shadow-md "
      >
        <span className="font-semibold">
          {data.title}({data.itemCards.length})
        </span>
        <span>{"🔽"}</span>
      </div>
      <div className="flex justify-between px-5 py-3 w-6/12 mx-auto mt-3">
        {showItems && <RestaurantMenuItems items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantItemCategory;
