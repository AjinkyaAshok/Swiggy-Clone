import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuItems, { ItemsClearButton } from "./RestaurantMenuItems";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = (store) => {
    dispatch(clearCart());
  };
  const RestaurantMenuItemsWithClearButton =
    ItemsClearButton(RestaurantMenuItems);
  return (
    <div className="h-screen">
      <div className="font-bold text-center ">
        <h1 className=" my-4 text-2xl">Cart Page</h1>
        <button
          onClick={handleClearCart}
          className="bg-black p-4 m-4 text-xl text-white rounded-lg"
        >
          Clear Cart
        </button>
      </div>

      <div className="w-6/12 mx-auto">
        {/* there should be a remove button instead of ADD button */}
        {CartItems.length === 0 ? (
          <h1 className="font-semibold">
            Looks like you have not added any item to the cart!!
          </h1>
        ) : (
          <RestaurantMenuItemsWithClearButton
            key={CartItems?.index}
            items={CartItems}
          />
        )}
      </div>
    </div>
  );
};

export default CartPage;
