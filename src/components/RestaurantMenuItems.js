import { useDispatch } from "react-redux";
import { RES_ITEMS_IMAGE } from "../utils/constants";
import { addItem,removeItem } from "../utils/cartSlice";
import { useLocation } from "react-router-dom";

const RestaurantMenuItems = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };


  const location = useLocation();
  console.log(location.pathname, "i am here");
  return (
    <div>
      {items.map((item) => (
        <div
          className="flex justify-between border-b-4 "
          key={item?.card?.info?.id}
        >
          <div className="w-8/12 p-10">
            <div className="font-semibold mb-4">
              <p>{item?.card?.info?.name}</p>
              <p> Rs.{item?.card?.info?.price / 100}</p>
            </div>

            <p>{item?.card?.info?.description}</p>
          </div>
          <div className="w-4/12 relative ">
            <img
              className="w-56 h-36 m-4 absolute"
              src={RES_ITEMS_IMAGE + item?.card?.info?.imageId}
              alt=""
            />
            {location.pathname == "/cart" ? (
              <button
                onClick={() => handleRemoveItem(item)}
                className="absolute bottom-4 ml-24 bg-orange-200 p-2 rounded font-semibold hover:bg-orange-300"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => handleAddItem(item)}
                className="absolute bottom-4 ml-24 bg-orange-200 p-2 rounded font-semibold hover:bg-orange-300"
              >
                ADD+
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const ItemsClearButton = (RestaurantMenuItems) => {
  return (props) => {
    return (
      <div>
        <RestaurantMenuItems {...props} />
        <button className="p-4 bg-orange-400 rounded-md">Remove</button>
      </div>
    );
  };
};

export default RestaurantMenuItems;
