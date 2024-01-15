import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex bg-orange-200 justify-between shadow-md">
      <div className="logo-container">
        <img className=" w-40" src={LOGO_URL} alt="" />
      </div>

      <div className="flex items-center">
        <ul className="flex text-xl">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="px-4 font-bold">Cart ({cartItems.length})</li>
          </Link>
          <Link to="/grocery">
            <li className="px-4">Grocery</li>
          </Link>

          <button
            className="px-4"
            onClick={() => {
              loginButton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginButton}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
