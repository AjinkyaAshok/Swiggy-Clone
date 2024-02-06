import React from "react";

import DashDineLogoMini from "../images/dashdine-mini.png";

const SubFooter = () => {
  return (
    <footer className="mt-20 bg-[#f0f0f5] relative bottom-0">
      <div className="flex gap-x-4 items-center mx-auto w-6/12 h-24">
        <h1 className="grow text-2xl font-bold text-[#3D4047]">
          For better experience,download the Swiggy app now
        </h1>
        <div className="flex gap-x-6">
          <img
            className="w-48 h-16"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            }
            alt=""
          />
          <img
            className="w-48 h-16"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            }
            alt=""
          />
        </div>
      </div>

      <div className="bg-black text-gray-400">
        <ul className="flex gap-x-20 justify-center p-10 text-lg">
          <ul className="flex flex-col gap-y-2">
            <div className="flex">
              <img className="w-10 h-10" src={DashDineLogoMini} alt="" srcset="" />

              <li className="font-bold text-3xl text-white"></li>
            </div>

            <li className="text-gray-400">© 2023 AjinkyaAshok</li>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="text-white font-bold">Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>DashDine One</li>
            <li>DashDine Instamart</li>
            <li>DashDine Genie</li>
          </ul>
          <div className="flex flex-col gap-y-6">
            <ul className="flex flex-col gap-y-2">
              <li className="text-white font-bold">Contact us</li>
              <li>Help and Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="text-white font-bold">Legal</li>
              <li>Terms and Conditions</li>
              <li>Cookie policy</li>
              <li>Pivacy policy</li>
            </ul>
          </div>
          <ul className="flex flex-col gap-y-2">
            <li className="text-white font-bold">We Deliver to:</li>
            <li>Banglore</li>
            <li>Delhi</li>
            <li>Pune</li>
            <li>Mumbai</li>
            <select className="bg-black border rounded">
              <option value="volvo">592 cities</option>
              <option value="saab">Kolkata</option>
              <option value="mercedes">Chennai</option>
              <option value="audi">Akola</option>
            </select>
          </ul>
        </ul>
      </div>
    </footer>
  );
};

export default SubFooter;
