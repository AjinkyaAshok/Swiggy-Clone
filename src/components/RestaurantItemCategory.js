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
        className="px-5 py-3 flex justify-between mb-2 cursor-pointer bg-white shadow-md"
      >
        <span className="font-semibold">
          {data.title}({data.itemCards.length})
        </span>
        <span>{"🔽"}</span>
      </div>
      <div className="">
        {showItems && <RestaurantMenuItems items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantItemCategory;
